import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import styles from "./ScrollToTopButton.module.scss";

export default function ScrollToTopButton() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 250);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!showScrollTop) {
    return null;
  }

  return (
    <button
      type="button"
      className={styles.scrollTopButton}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ArrowUp size={18} />
    </button>
  );
}
