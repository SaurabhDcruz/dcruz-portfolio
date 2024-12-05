import { useState, useEffect, useCallback } from 'react';

const useWindowWidth = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = useCallback(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    const debounceResize = () => {
      clearTimeout(window.resizeTimeout);
      window.resizeTimeout = setTimeout(handleResize, 100); // Adjust the timeout as needed
    };

    window.addEventListener("resize", debounceResize);
    return () => {
      window.removeEventListener("resize", debounceResize);
      clearTimeout(window.resizeTimeout); // Clean up the timeout on unmount
    };
  }, [handleResize]);

  return screenWidth;
};

export default useWindowWidth;