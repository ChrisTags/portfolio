import type { AnchorHTMLAttributes, ReactNode } from "react";
import styles from "./ButtonLink.module.scss";

type ButtonLinkProps = {
  children: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export default function ButtonLink({
  children,
  className,
  ...props
}: ButtonLinkProps) {
  return (
    <a {...props} className={`${styles.buttonLink} ${className ?? ""}`}>
      {children}
    </a>
  );
}
