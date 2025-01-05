import { Button } from "@/types/index";

export type ButtonAppearance = "solid" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";
export type ButtonColor = "blue" | "white";

export type ButtonProps = {
  appearance?: ButtonAppearance;
  size?: ButtonSize;
  color?: ButtonColor;
  href?: string;
  className?: string;
  onClick?: VoidFunction;
} & Button;
