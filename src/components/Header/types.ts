import type { GlobalData, MenuItem } from "@/types/index";
import { ReactNode } from "react";

export type MenuLinkProps = {
  href: string;
  active?: boolean;
  children: ReactNode;
  openNewWindow?: boolean;
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
