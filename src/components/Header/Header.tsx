"use client";

import { Logo, MenuIcon, CloseIcon, ArrowRight } from "@/components/Icons";
import { useMenuToggle } from "@/hooks/useMenuToggle";
import { cn } from "@/utils/cn";

interface MenuLinkProps {
  href: string;
  active?: boolean;
  children: React.ReactNode;
}

const MenuLink = ({ href, active, children }: MenuLinkProps) => (
  <a
    href={href}
    className={cn(
      "text-sm font-medium transition-colors hover:text-gray-300",
      active ? "text-white" : "text-gray-400"
    )}
  >
    {children}
  </a>
);

const MenuLinks = () => (
  <div className="flex md:flex-row flex-col space-y-4 md:space-y-0 md:space-x-6">
    <MenuLink href="#" active>
      Modules
    </MenuLink>
    <MenuLink href="#">Resources</MenuLink>
    <MenuLink href="#">Pricing</MenuLink>
    <MenuLink href="#">Contact sales</MenuLink>
  </div>
);

export const Header = () => {
  const { isMenuOpen, toggleMenu } = useMenuToggle();

  return (
    <nav className="relative font-sans">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          
          <div className="hidden md:flex items-center space-x-6">
            <MenuLinks />
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden p-2"
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>

          <a
            href="#"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-white hover:text-gray-300 transition-colors px-1 py-2"
          >
            <span>Login</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        <div
          className={cn(
            "md:hidden absolute left-0 right-0 top-full bg-black border-t border-gray-800 transition-all duration-300 h-[calc(100vh-72px)]",
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          )}
        >
          <div className="px-6 py-4 space-y-4">
            <MenuLinks />
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-gray-300 transition-colors px-1 py-2 fixed bottom-4"
            >
              <span>Login</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
