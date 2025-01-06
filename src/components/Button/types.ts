import type { Button } from "@/types/index";

export type ButtonProps = {
  className?: string;
  onClick?: VoidFunction;
  href?: string;
} & Button;
