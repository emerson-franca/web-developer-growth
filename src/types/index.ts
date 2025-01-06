export interface Metadata {
  id: number;
  metaTitle: string;
  metaDescription: string;
  robots: string;
  shareImage: string | null;
}

export interface Alternate {
  locale: string;
  path: string;
}

export type ButtonAppearance = "solid" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";
export type ButtonColor = "blue" | "white";

export interface Button {
  id: number;
  appearance: ButtonAppearance;
  size: ButtonSize;
  color: ButtonColor;
  url: string;
  text: string;
  subText: string | null;
  fluid?: boolean;
  newTab?: boolean;
  startIcon?: string | null;
  endIcon?: string | null;
}

export interface Brand {
  id: number;
  alternativeText: string | null;
  title: string;
  url: string;
}

export interface Card {
  id: number;
  title: string;
  description: string;
  icon: string;
  button?: Button;
}

export interface HeroSection {
  id: number;
  __component: "sections.hero-video";
  theme: string;
  full: boolean;
  preTitle: string | null;
  title: string;
  description: string;
  buttons: Button[];
  widget: Record<string, unknown>;
  background: Record<string, unknown>;
}

export interface BrandsSection {
  id: number;
  __component: "sections.brands";
  theme: string;
  brands: Brand[];
}

export interface CardContentGridSection {
  id: number;
  __component: "sections.card-content-grid";
  theme: string;
  preTitle: string;
  title: string;
  description: string;
  cards: Card[];
}

export interface ModulesSection {
  id: number;
  __component: "sections.modules";
  theme: string;
  preTitle: string | null;
  title: string;
  description: string;
  cards: Card[];
}

export interface CenteredCtaSection {
  id: number;
  __component: "sections.centered-cta";
  theme: string;
  preTitle: string | null;
  title: string;
  description: string;
  buttons: Button[];
}

export interface ContentSection {
  id: number;
  __component: string;
  theme: string;
  title: string;
  description: string;
  buttons: Button[];
  brands: Brand[];
  cards: Card[];
  preTitle?: string;
}
export interface PageData {
  id: number;
  slug: string;
  path: string;
  locale: string;
  alternates: Alternate[];
  metadata: Metadata;
  contentSections: ContentSection[];
}

export interface MenuItem {
  id: number;
  title: string;
  link: string | null;
  openNewWindow: boolean;
  dropdown?: MenuItem[];
}

export interface GlobalData {
  id: number;
  locale: string;
  siteName: string;
  helpText: string;
  copyright: string;
  metadata: Metadata;
  menu: MenuItem[];
  footerMenu: MenuItem[];
  social: {
    facebook: string;
    instagram: string;
    twitter: string;
    youTube: string;
    tikTok: string;
    linkedIn: string;
  };
}
