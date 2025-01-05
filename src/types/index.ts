export type MenuLinkProps = {
  href: string;
  active?: boolean;
  children: React.ReactNode;
  openNewWindow?: boolean;
}

export type MenuItem = {
  id: number;
  title: string;
  link: string | null;
  openNewWindow: boolean;
  dropdown?: MenuItem[];
}

export type GlobalData = {
  siteName: string;
  menu: MenuItem[];
}

export type HeaderProps = {
  globalData: GlobalData;
}

export type DropdownProps = {
  item: MenuItem;
  isMobile?: boolean;
  isOpen: boolean;
  onToggle: () => void;
}

export type ContentSection = {
  __component: string;
  id: number;
  theme: string;
  title?: string;
  description?: string;
  brands?: {
    id: number;
    name: string;
  }[];
  preTitle?: string;
}

export type PageData = {
  id: number;
  slug: string;
  locale: string;
  contentSections: ContentSection[];
}
