import type { Button } from "@/types/index";

export type ButtonAppearance = "solid" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";
export type ButtonColor = "blue" | "white";

export type ButtonProps = {
  appearance?: ButtonAppearance;
  size?: ButtonSize;
  color?: ButtonColor;
  className?: string;
  onClick?: VoidFunction;
  href?: string;
} & Omit<Button, "id" | "url">;
