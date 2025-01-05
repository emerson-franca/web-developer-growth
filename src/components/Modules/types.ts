import type { Button } from "@/types/index";

interface ModuleButton extends Button {}

interface ModuleCard {
  id: number;
  title: string;
  description: string;
  icon?: string;
  button?: ModuleButton;
}

export interface ModulesProps {
  theme?: "dark" | "light";
  preTitle?: string | null;
  title: string;
  description: string;
  cards: ModuleCard[];
}
