"use client";

import { Logo, MenuIcon, CloseIcon, ArrowRight } from "@/components/Icons";
import { useMenuToggle } from "@/hooks/useMenuToggle";
import { useMaxHeight } from "@/hooks/useMaxHeight";
import { useScroll } from "@/hooks/useScroll";
import { cn } from "@/utils/cn";
import { useCallback, useState } from "react";
import { MenuLinkProps, HeaderProps, DropdownProps } from "./types";
import { styles } from "./styles";
import type { MenuItem } from "@/types/index";

const MenuLink = ({
  href,
  active,
  children,
  openNewWindow,
  className,
}: MenuLinkProps & { className?: string }) => (
  <a
    href={href}
    target={openNewWindow ? "_blank" : undefined}
    rel={openNewWindow ? "noopener noreferrer" : undefined}
    className={cn(
      styles.menuLink,
      active ? styles.menuLinkActive : styles.menuLinkDefault,
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
      className="relative z-10"
      role="menu"
      aria-label={`${item.title} menu`}
      onMouseEnter={() => !isMobile && onToggle()}
      onMouseLeave={() => !isMobile && isOpen && onToggle()}
    >
      <button
        onClick={() => isMobile && onToggle()}
        className={cn(
          styles.menuLink,
          item.title === "Modules"
            ? styles.menuLinkActive
            : styles.menuLinkDefault,
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
            styles.dropdown.menu,
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
                  styles.dropdown.item,
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

const MenuLinks = ({
  menu,
  isMobile,
}: {
  menu: MenuItem[];
  isMobile?: boolean;
}) => {
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);

  const handleDropdownToggle = useCallback((itemId: number) => {
    setOpenDropdownId((prev) => (prev === itemId ? null : itemId));
  }, []);

  return (
    <ul className={cn(styles.mobile.menuList)} role="menubar">
      {menu.map((item) => (
        <li className="p-3" key={item.id} role="menuitem">
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

const LoginLink = ({ loginItem }: { loginItem: MenuItem | undefined }) =>
  loginItem ? (
    <div className={styles.loginLink.wrapper}>
      <MenuLink
        active
        href={loginItem.link || "#"}
        openNewWindow={loginItem.openNewWindow}
        className={styles.loginLink.link}
      >
        <span className={styles.loginLink.text}>{loginItem.title}</span>
      </MenuLink>
      <ArrowRight width={24} height={24} />
    </div>
  ) : null;

export const Header = ({ menu }: HeaderProps) => {
  const { isMenuOpen, toggleMenu } = useMenuToggle();
  const isScrolled = useScroll(50);

  return (
    <nav
      className={cn(styles.nav.wrapper)}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className={cn(styles.nav.container, isScrolled && "bg-black transition-colors duration-300")}>
        <div className={styles.nav.inner}>
          <Logo />

          <div className={styles.nav.desktopMenu}>
            <MenuLinks menu={menu} />
          </div>

          <button
            onClick={toggleMenu}
            className={styles.nav.mobileButton}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>

          <div className={styles.nav.loginWrapper}>
            <LoginLink
              loginItem={menu.find((item) => item.title === "Login")}
            />
          </div>
        </div>

        <div
          className={cn(
            styles.mobile.menu,
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          )}
        >
          <div className={styles.mobileMenu.wrapper}>
            <MenuLinks menu={menu} isMobile={true} />
            <div className={styles.mobileMenu.loginContainer}>
              <LoginLink
                loginItem={menu.find((item) => item.title === "Login")}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
