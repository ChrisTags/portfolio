import type { ReactNode } from "react";
import styles from "./PageHeader.module.scss";

type PageHeaderProps = {
  title: string;
  description?: ReactNode;
};

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className={styles["page-header"]}>
      <h1 className={styles["page-header__title"]}>{title}</h1>
      {description && (
        <div className={styles["page-header__description"]}>{description}</div>
      )}
    </section>
  );
}
