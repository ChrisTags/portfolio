import { useEffect, useRef, useState } from "react";

export default function useMobileHeaderVisibility() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const previousScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.matchMedia("(max-width: 767px)").matches;

      if (!isMobile) {
        setIsHeaderVisible(true);
        return;
      }

      const currentScrollY = window.scrollY;

      if (currentScrollY < previousScrollY.current) {
        setIsHeaderVisible(true);
      } else if (currentScrollY > previousScrollY.current) {
        setIsHeaderVisible(false);
      }

      previousScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isHeaderVisible;
}
