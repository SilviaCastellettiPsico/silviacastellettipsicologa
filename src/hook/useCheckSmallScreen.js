import { useEffect, useState } from "react";

const useCheckSmallScreen = () => {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1199
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width <= 1000;
};

export default useCheckSmallScreen;
