import type { ReactNode } from "react";
import styles from "./ItemsList.module.scss";

type ItemsGridProps = {
  children: ReactNode;
  className?: string;
};

export default function ItemsGrid({ className, children }: ItemsGridProps) {
  return (
    <ul className={`${styles["items-list"]} ${className ?? ""}`}>{children}</ul>
  );
}
