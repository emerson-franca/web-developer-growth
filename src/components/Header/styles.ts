import styled from "@emotion/styled";

export const Nav = styled.nav`
  position: relative;
  font-family: "Articulat CF", sans-serif;
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
`;

export const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const LogoText = styled.span`
  font-weight: 600;
  font-size: 1.125rem;
`;

export const MenuContainer = styled.div<{ isOpen: boolean }>`
  @media (min-width: 768px) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 4rem;
  }

  @media (max-width: 767px) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: black;
    border-top: 1px solid rgba(133, 133, 133, 0.2);
    transition: all 0.3s;
    opacity: ${(props) => (props.isOpen ? 1 : 0)};
    visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
    min-height: ${(props) => (props.isOpen ? "100vh" : 0)};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const Menu = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  @media (max-width: 767px) {
    padding: 2rem 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

export const MenuLink = styled.a<{ active?: boolean }>`
  color: ${(props) => (props.active ? "#FFFFFF" : "#969696")};
  text-decoration: none;
  transition: color 0.2s;
  font-family: "Articulat CF", sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 16.8px;

  &:hover {
    color: #ffffff;
  }

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

export const MobileLoginContainer = styled.div`
  display: none;

  @media (max-width: 767px) {
    display: flex;
    padding: 1rem 1.5rem;
    border-top: 1px solid rgba(133, 133, 133, 0.2);
    margin-top: auto;
    position: fixed;
    width: 100%;
    bottom: 0;
  }
`;

export const LoginLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  transition: opacity 0.2s;
  font-size: 1.125rem;
  display: flex;
  align-items: center;
  gap: 4px;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 767px) {
    display: none;
  }

  &.mobile {
    display: none;
    @media (max-width: 767px) {
      display: flex;
    }
  }

  &.desktop {
    display: none;
    @media (min-width: 768px) {
      display: flex;
    }
  }
`;

export const MobileMenuButton = styled.button`
  color: #ffffff;
  padding: 0.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 2;

  @media (min-width: 768px) {
    display: none;
  }
`;
