import type { MenuItem } from "@/types/index";

export type SocialKeys =
  | "facebook"
  | "instagram"
  | "twitter"
  | "linkedIn"
  | "youTube"
  | "tikTok";

export type FooterProps = {
  footerMenu: MenuItem[];
  copyright: string;
  helpText: string;
  status: {
    text: string;
    color: string;
  };
  currentLocale: string;
  social: Record<SocialKeys, string>;
};
