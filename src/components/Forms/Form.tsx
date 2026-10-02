import type { FormHTMLAttributes, ReactNode } from "react";

type FormProps = FormHTMLAttributes<HTMLFormElement> & {
  children: ReactNode;
};

export default function Form({ children, ...props }: FormProps) {
  return <form {...props}>{children}</form>;
}
