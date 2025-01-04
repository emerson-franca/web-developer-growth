"use client";

import { Logo, MenuIcon, CloseIcon, ArrowRight } from "@/components/Icons";
import { useMenuToggle } from "@/hooks/useMenuToggle";
import {
  Nav,
  Container,
  NavContent,
  MenuContainer,
  Menu,
  MenuLink,
  MobileLoginContainer,
  LoginLink,
  MobileMenuButton,
} from "./styles";

const MenuLinks = () => (
  <Menu>
    <MenuLink href="#" active>
      Modules
    </MenuLink>
    <MenuLink href="#">Resources</MenuLink>
    <MenuLink href="#">Pricing</MenuLink>
    <MenuLink href="#">Contact sales</MenuLink>
  </Menu>
);

export const Header = () => {
  const { isMenuOpen, toggleMenu } = useMenuToggle();

  return (
    <Nav>
      <Container>
        <NavContent>
          <Logo />
          <MenuContainer isOpen={isMenuOpen}>
            <MenuLinks />
            <MobileLoginContainer>
              <LoginLink href="#" className="mobile">
                Login <ArrowRight />
              </LoginLink>
            </MobileLoginContainer>
          </MenuContainer>

          <LoginLink href="#" className="desktop">
            Login <ArrowRight />
          </LoginLink>

          <MobileMenuButton
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </MobileMenuButton>
        </NavContent>
      </Container>
    </Nav>
  );
};
