import { useState, useEffect } from "react";
import { getWindowDimensions } from "../getWindowDimensions";

export default function useWindowDimensions()
: {width: number, height: number} {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}