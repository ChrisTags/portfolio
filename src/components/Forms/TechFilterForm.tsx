import type { ChangeEvent } from "react";
import Checkbox from "./Checkbox";
import Form from "./Form";
import styles from "./TechFilterForm.module.scss";

type TechFilterFormProps = {
  onTechChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function TechFilterForm({ onTechChange }: TechFilterFormProps) {
  return (
    <Form className={styles["form-filter"]}>
      <Checkbox
        name="tech"
        value="html"
        label="HTML/CSS"
        onChange={onTechChange}
      />
      <Checkbox name="tech" value="scss" label="SCSS" onChange={onTechChange} />
      <Checkbox
        name="tech"
        value="javascript"
        label="JavaScript"
        onChange={onTechChange}
      />
      <Checkbox
        name="tech"
        value="typescript"
        label="TypeScript"
        onChange={onTechChange}
      />
      <Checkbox
        name="tech"
        value="react"
        label="React"
        onChange={onTechChange}
      />
    </Form>
  );
}
