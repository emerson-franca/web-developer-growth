import type { MenuItem } from "@/types/index";

export interface FooterProps {
  footerMenu: MenuItem[];
  copyright: string;
  helpText: string;
  status: {
    text: string;
    color: string;
  };
  currentLocale: string;
  social: {
    facebook: string;
    instagram: string;
    twitter: string;
    linkedIn: string;
    youTube: string;
    tikTok: string;
  };
}
