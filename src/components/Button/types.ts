export type ButtonAppearance = "solid" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";
export type ButtonColor = "blue" | "white";

export interface ButtonProps {
  appearance?: ButtonAppearance;
  size?: ButtonSize;
  color?: ButtonColor;
  href?: string;
  text: string;
  subText?: string | null;
  fluid?: boolean;
  newTab?: boolean;
  startIcon?: string | null;
  endIcon?: string | null;
  className?: string;
  onClick?: () => void;
}
