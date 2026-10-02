import type { ChangeEventHandler } from "react";
import styles from "./Checkbox.module.scss";

type CheckboxProps = {
  name: string;
  value?: string;
  label?: string;
  className?: string;
  checked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

export default function Checkbox({
  name,
  value,
  label,
  className,
  checked,
  onChange,
}: CheckboxProps) {
  return (
    <label className={styles.checkbox__label}>
      <input
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        className={`${styles.checkbox__input} ${className ?? ""}`}
        onChange={onChange}
      />
      {label ? <span className={styles.checkbox__text}>{label}</span> : null}
    </label>
  );
}
