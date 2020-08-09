import { SelectHTMLAttributes } from "react";

export interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: Array<{ value: string; label: string; }>;
}
