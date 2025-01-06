import type { Button } from "@/types/index";

interface ModuleCard {
  id: number;
  title: string;
  description: string;
  icon?: string;
  button?: Button;
}

export interface ModulesProps {
  theme?: "dark" | "light";
  preTitle?: string | null;
  title: string;
  description: string;
  cards: ModuleCard[];
}
