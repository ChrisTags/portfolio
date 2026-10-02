import type { ChangeEvent } from "react";
import { useEffect, useState } from "react";
import { Checkbox } from "../Forms";
import styles from "./ThemeToggle.module.scss";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches,
  );

  const themeMode = isDark
    ? styles["theme-switch--dark"]
    : styles["theme-switch--light"];

  const handleThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsDark(event.target.checked);
  };

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("theme-dark");
      document.body.classList.remove("theme-light");
    } else {
      document.body.classList.add("theme-light");
      document.body.classList.remove("theme-dark");
    }
  }, [isDark]);

  return (
    <Checkbox
      name="theme"
      checked={isDark}
      className={`${styles["theme-switch__input"]} ${themeMode}`}
      onChange={handleThemeChange}
    />
  );
}
