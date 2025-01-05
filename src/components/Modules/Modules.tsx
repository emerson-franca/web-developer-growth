"use client";

import Link from "next/link";
import { useRef } from "react";
import { ArrowRight, ArrowUp } from "@/components/Icons";
import { useCarousel } from "@/hooks/useCarousel";
import { styles } from "./styles";
import { ModulesProps } from "./types";

export const Modules = ({
  preTitle,
  title,
  description,
  cards,
}: ModulesProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const { extendedItems, handlePrevSlide, handleNextSlide, isDragging } =
    useCarousel({
      items: cards,
      containerRef,
      carouselRef,
    });

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.titleWrapper}>
            {preTitle && <p>{preTitle}</p>}
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
          </div>
          <div className={styles.navigationWrapper}>
            <button
              type="button"
              className={styles.navigationButton}
              onClick={handlePrevSlide}
              aria-label="Previous slide"
            >
              <ArrowRight className="w-6 h-6 rotate-180 text-black" />
            </button>
            <button
              type="button"
              className={styles.navigationButton}
              onClick={handleNextSlide}
              aria-label="Next slide"
            >
              <ArrowRight className="w-6 h-6 text-black" />
            </button>
          </div>
        </header>

        <div
          ref={containerRef}
          className={styles.carouselWrapper}
          role="region"
          aria-label="Carrossel de Módulos"
        >
          <div
            ref={carouselRef}
            className={styles.carousel}
            style={{ pointerEvents: isDragging ? "none" : "auto" }}
            role="list"
          >
            {extendedItems.map((card, index) => (
              <div
                key={`${card.id}-${index}`}
                className={styles.card}
                role="listitem"
                aria-current={index === 0 ? "true" : undefined}
                tabIndex={0}
              >
                <span className="sr-only">
                  Slide {index + 1} de {extendedItems.length}
                </span>
                <div className={styles.cardInner}>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardDescription}>{card.description}</p>
                  {card.button && (
                    <Link
                      href={card.button.url || "#"}
                      className={styles.cardButton}
                      onClick={(e) => {
                        if (!card.button?.url) {
                          e.preventDefault();
                        }
                      }}
                      aria-disabled={!card.button?.url}
                    >
                      {card.button.text}
                      <ArrowUp width={24} height={24} />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
