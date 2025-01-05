import { useState, useEffect } from "react";

export const useMaxHeight = () => {
  const [maxHeight, setMaxHeight] = useState<number | null>(null);

  useEffect(() => {
    const updateMaxHeight = () => {
      const viewportHeight = window.innerHeight;
      const margin = 64;
      setMaxHeight(viewportHeight - margin);
    };

    updateMaxHeight();

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateMaxHeight, 100);
    };

    let timeoutId: NodeJS.Timeout;
    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return maxHeight;
};
