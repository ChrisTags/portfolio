import type { ReactNode } from "react";
import styles from "./ContentSection.module.scss";

type ContentSectionProps = {
  title: string;
  description?: string;
  children?: ReactNode;
};

export default function ContentSection({
  title,
  description,
  children,
}: ContentSectionProps) {
  return (
    <section className={styles["content-section"]}>
      <h2 className={styles["content-section__title"]}>{title}</h2>
      {description && (
        <p className={styles["content-section__description"]}>{description}</p>
      )}
      {children}
    </section>
  );
}
