import { useState, useEffect } from "react";

interface WindowDimensionsType {
  ganttHeight: number;
  ganttWidth: number;
}

const getWindowDimensions = (): WindowDimensionsType => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    ganttHeight: (height * 8) / 10,
    ganttWidth: (width * 9) / 10,
  };
};

export const useWindowDimensions = (): WindowDimensionsType => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    const handleResize = (): void => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};
