"use client";

import { Logo, MenuIcon, CloseIcon } from "@/components/Icons";
import { useMenuToggle } from "@/hooks/useMenuToggle";
import { useMaxHeight } from "@/hooks/useMaxHeight";
import { cn } from "@/utils/cn";
import { useCallback, useState } from "react";
import { MenuLinkProps, MenuItem, HeaderProps, DropdownProps } from "@/types";
import "./styles.css";

const MenuLink = ({ href, active, children, openNewWindow, className }: MenuLinkProps & { className?: string }) => (
  <a
    href={href}
    target={openNewWindow ? "_blank" : undefined}
    rel={openNewWindow ? "noopener noreferrer" : undefined}
    className={cn(
      "menu-link",
      active ? "menu-link-active" : "menu-link-default",
      className
    )}
  >
    {children}
  </a>
);

const Dropdown = ({ item, isMobile, isOpen, onToggle }: DropdownProps) => {
  const hasDropdown = item.dropdown && item.dropdown.length > 0;
  const maxHeight = useMaxHeight();

  return (
    <div
      className="relative"
      role="menu"
      aria-label={`${item.title} menu`}
      onMouseEnter={() => !isMobile && onToggle()}
      onMouseLeave={() => !isMobile && isOpen && onToggle()}
    >
      <button
        onClick={() => isMobile && onToggle()}
        className={cn(
          "menu-link",
          item.title === "Modules" ? "menu-link-active" : "menu-link-default",
          isMobile && "cursor-default w-full text-left"
        )}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {item.title}
      </button>
      {hasDropdown && (
        <ul
          className={cn(
            "dropdown-menu",
            !isMobile && !isOpen && "md:opacity-0 md:invisible",
            !isMobile && isOpen && "md:opacity-100 md:visible"
          )}
          style={maxHeight ? { maxHeight: `${maxHeight}px` } : undefined}
        >
          {item.dropdown?.map((dropdownItem) => (
            <li key={dropdownItem.id} role="menuitem">
              <MenuLink
                href={dropdownItem.link || "#"}
                openNewWindow={dropdownItem.openNewWindow}
                className={cn(
                  "dropdown-item",
                  !isMobile && "px-4 hover:bg-gray-800"
                )}
              >
                {dropdownItem.title}
              </MenuLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const MenuLinks = ({ menu, isMobile }: { menu: MenuItem[]; isMobile?: boolean }) => {
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);

  const handleDropdownToggle = useCallback((itemId: number) => {
    setOpenDropdownId((prev) => (prev === itemId ? null : itemId));
  }, []);

  return (
    <ul
      className={cn(
        "flex flex-col md:flex-row",
        isMobile ? "space-y-4" : "md:space-x-6",
        "w-full md:w-auto"
      )}
      role="menubar"
    >
      {menu.map((item) => (
        <li key={item.id} role="none">
          {item.dropdown && item.dropdown.length > 0 ? (
            <Dropdown
              item={item}
              isMobile={isMobile}
              isOpen={openDropdownId === item.id}
              onToggle={() => handleDropdownToggle(item.id)}
            />
          ) : (
            <MenuLink
              href={item.link || "#"}
              openNewWindow={item.openNewWindow}
            >
              {item.title}
            </MenuLink>
          )}
        </li>
      ))}
    </ul>
  );
};

export const Header = ({ globalData }: HeaderProps) => {
  const { isMenuOpen, toggleMenu } = useMenuToggle();

  return (
    <nav className="relative font-sans" role="navigation" aria-label="Main Navigation">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Logo />

          <div className="hidden md:flex items-center space-x-6">
            <MenuLinks menu={globalData.menu} />
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden p-2"
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>

          <MenuLink
            href="#"
            className="hidden md:inline-flex items-center gap-2 px-1 py-2"
          >
            <span>Login</span>
          </MenuLink>
        </div>

        <div
          className={cn(
            "mobile-menu",
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          )}
        >
          <div className="px-6 py-4 space-y-4">
            <MenuLinks menu={globalData.menu} isMobile={true} />
            <MenuLink
              href="#"
              className="inline-flex items-center gap-2 px-1 py-2 fixed bottom-4"
            >
              <span>Login</span>
            </MenuLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
