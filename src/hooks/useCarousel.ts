/* eslint-disable react-hooks/exhaustive-deps */
import {
  useState,
  useCallback,
  useEffect,
  RefObject,
  useMemo,
  useRef,
} from "react";

interface UseCarouselProps<T> {
  items: T[];
  containerRef: RefObject<HTMLDivElement>;
  carouselRef: RefObject<HTMLDivElement>;
  cloneCount?: number;
}

export const useCarousel = <T extends { id: number | string }>({
  items,
  containerRef,
  carouselRef,
  cloneCount = 3,
}: UseCarouselProps<T>) => {
  const [currentSlide, setCurrentSlide] = useState(cloneCount);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const resizeTimeout = useRef<NodeJS.Timeout | null>(null);

  const getVisibleSlides = useCallback(() => {
    if (typeof window === "undefined") return 1;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  }, []);

  const getSlideWidth = useCallback(() => {
    if (!containerRef.current) return 0;
    const visibleSlides = getVisibleSlides();
    return containerRef.current.offsetWidth / visibleSlides;
  }, [containerRef, getVisibleSlides]);

  const scrollToSlide = useCallback(
    (index: number, withTransition = true) => {
      const slideWidth = getSlideWidth();
      const translate = -slideWidth * index;

      if (carouselRef.current) {
        carouselRef.current.style.transition = withTransition
          ? "transform 300ms ease-out"
          : "none";
        carouselRef.current.style.transform = `translateX(${translate}px)`;
      }

      setCurrentSlide(index);
      setPrevTranslate(translate);
      setCurrentTranslate(translate);
    },
    [getSlideWidth]
  );

  useEffect(() => {
    scrollToSlide(cloneCount, false);
  }, [scrollToSlide, cloneCount]);

  useEffect(() => {
    const handleResize = () => {
      if (resizeTimeout.current) clearTimeout(resizeTimeout.current);
      resizeTimeout.current = setTimeout(
        () => scrollToSlide(currentSlide, false),
        200
      );
    };

    window.addEventListener("resize", handleResize);
    return () => {
      if (resizeTimeout.current) clearTimeout(resizeTimeout.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [currentSlide, scrollToSlide]);

  useEffect(() => {
    if (!isTransitioning || isDragging) return;

    const timer = setTimeout(() => {
      setIsTransitioning(false);
      if (currentSlide <= cloneCount - 1) {
        scrollToSlide(currentSlide + items.length, false);
      } else if (currentSlide >= items.length + cloneCount) {
        scrollToSlide(cloneCount, false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [
    currentSlide,
    items.length,
    isTransitioning,
    isDragging,
    scrollToSlide,
    cloneCount,
  ]);

  const handleDragStart = useCallback(
    (e: MouseEvent | TouchEvent) => {
      setIsDragging(true);
      setStartX(e instanceof MouseEvent ? e.pageX : e.touches[0].pageX);
      setPrevTranslate(currentTranslate);

      if (carouselRef.current) {
        carouselRef.current.style.transition = "none";
      }
    },
    [currentTranslate]
  );

  const handleDragMove = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (!isDragging || !carouselRef.current) return;

      const currentX = e instanceof MouseEvent ? e.pageX : e.touches[0].pageX;
      const diff = currentX - startX;
      const translate = prevTranslate + diff;

      setCurrentTranslate(translate);
      carouselRef.current.style.transform = `translateX(${translate}px)`;
    },
    [isDragging, startX, prevTranslate]
  );

  const handleDragEnd = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);

    const slideWidth = getSlideWidth();
    const threshold = slideWidth / 4;
    const diff = currentTranslate - prevTranslate;

    let newSlide = currentSlide;

    if (Math.abs(diff) > threshold) {
      newSlide = diff > 0 ? currentSlide - 1 : currentSlide + 1;
    }

    setIsTransitioning(true);
    scrollToSlide(newSlide);
  }, [
    isDragging,
    currentTranslate,
    prevTranslate,
    currentSlide,
    getSlideWidth,
    scrollToSlide,
  ]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    carousel.addEventListener("mousedown", handleDragStart);
    carousel.addEventListener("touchstart", handleDragStart, { passive: true });
    window.addEventListener("mousemove", handleDragMove);
    window.addEventListener("touchmove", handleDragMove, { passive: false });
    window.addEventListener("mouseup", handleDragEnd);
    window.addEventListener("touchend", handleDragEnd);

    return () => {
      carousel.removeEventListener("mousedown", handleDragStart);
      carousel.removeEventListener("touchstart", handleDragStart);
      window.removeEventListener("mousemove", handleDragMove);
      window.removeEventListener("touchmove", handleDragMove);
      window.removeEventListener("mouseup", handleDragEnd);
      window.removeEventListener("touchend", handleDragEnd);
    };
  }, [handleDragStart, handleDragMove, handleDragEnd]);

  const handlePrevSlide = useCallback(() => {
    setIsTransitioning(true);
    scrollToSlide(currentSlide - 1);
  }, [currentSlide, scrollToSlide]);

  const handleNextSlide = useCallback(() => {
    setIsTransitioning(true);
    scrollToSlide(currentSlide + 1);
  }, [currentSlide, scrollToSlide]);

  const extendedItems = useMemo(
    () => [
      ...items.slice(-cloneCount),
      ...items,
      ...items.slice(0, cloneCount),
    ],
    [items, cloneCount]
  );

  return {
    currentSlide,
    isTransitioning,
    isDragging,
    extendedItems,
    handlePrevSlide,
    handleNextSlide,
  };
};
