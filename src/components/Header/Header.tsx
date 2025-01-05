"use client";

import { Logo, MenuIcon, CloseIcon } from "@/components/Icons";
import { useMenuToggle } from "@/hooks/useMenuToggle";
import { cn } from "@/utils/cn";
import { useCallback, useState } from "react";
import { MenuLinkProps, MenuItem, HeaderProps, DropdownProps } from "@/types";

const LinkComponent = ({ href, openNewWindow, children, className }: { href: string; openNewWindow?: boolean; children: React.ReactNode; className?: string; }) => (
  <a
    href={href}
    target={openNewWindow ? "_blank" : undefined}
    rel={openNewWindow ? "noopener noreferrer" : undefined}
    className={className}
  >
    {children}
  </a>
);

const MenuLink = ({ href, active, children, openNewWindow }: MenuLinkProps) => (
  <LinkComponent
    href={href}
    openNewWindow={openNewWindow}
    className={cn(
      "text-sm font-medium transition-colors hover:text-gray-300",
      active ? "text-white" : "text-gray-400"
    )}
  >
    {children}
  </LinkComponent>
);

const Dropdown = ({ item, isMobile, isOpen, onToggle }: DropdownProps) => {
  const hasDropdown = item.dropdown && item.dropdown.length > 0;

  return (
    <div className="relative" role="menu" aria-label={`${item.title} menu`}>
      <button
        onClick={() => !isMobile && onToggle()}
        className={cn(
          "text-sm font-medium transition-colors hover:text-gray-300",
          item.title === "Modules" ? "text-white" : "text-gray-400",
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
            "md:absolute md:left-0 md:mt-2 md:w-48 md:bg-black md:border md:border-gray-800 md:rounded-md md:shadow-lg",
            "md:transition-all md:duration-200",
            !isMobile && !isOpen && "md:opacity-0 md:invisible",
            !isMobile && isOpen && "md:opacity-100 md:visible"
          )}
        >
          {item.dropdown?.map((dropdownItem) => (
            <li key={dropdownItem.id} role="menuitem">
              <LinkComponent
                href={dropdownItem.link || "#"}
                openNewWindow={dropdownItem.openNewWindow}
                className={cn(
                  "block py-2 text-sm text-gray-400 hover:text-white",
                  !isMobile && "px-4 hover:bg-gray-800"
                )}
              >
                {dropdownItem.title}
              </LinkComponent>
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

          <LinkComponent
            href="#"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-white hover:text-gray-300 transition-colors px-1 py-2"
          >
            <span>Login</span>
          </LinkComponent>
        </div>

        <div
          className={cn(
            "md:hidden absolute left-0 right-0 top-full bg-black border-t border-gray-800 transition-all duration-300 h-[calc(100vh-72px)]",
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          )}
        >
          <div className="px-6 py-4 space-y-4">
            <MenuLinks menu={globalData.menu} isMobile={true} />
            <LinkComponent
              href="#"
              className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-gray-300 transition-colors px-1 py-2 fixed bottom-4"
            >
              <span>Login</span>
            </LinkComponent>
          </div>
        </div>
      </div>
    </nav>
  );
};
