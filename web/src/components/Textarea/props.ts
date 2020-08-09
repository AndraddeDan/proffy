import { InputHTMLAttributes } from "react";

export interface Props extends InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
}
