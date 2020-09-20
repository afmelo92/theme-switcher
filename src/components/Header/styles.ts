/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.nav`
  background: linear-gradient(270deg, ${props => props.theme.color.primary} 1%, ${props => props.theme.color.secondary});
  height: 100px;
  display: flex;
`;

export const Navbar = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;

export const NavLogo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 60px;

  img {
    margin: 0 0 0 auto;
    width: 40px;
    height: 40px;
  }

  h1 {
    margin: 0 auto 0 -22px;
    font-size: 30px;
    color: ${props => props.theme.color.text};
  }
`;

export const NavItems = styled.div`
  display: flex;
  margin-right: 90px;
  height: 100%;
  align-items: center;

  a {
    height: 100%;

    font-size: 18px;
    font-weight: bold;
    color: ${props => props.theme.color.text};
    cursor: pointer;
    text-decoration: none;
    margin: 0 20px 0 20px;
    padding: 30px;

    transition: opacity 0.2s;

    &:hover,
    &:focus {
      opacity: 0.55;
      background: ${props => props.theme.color.secondary};
      color: ${props => props.theme.color.text};
      border-bottom: 5px solid #fff;
    }
  }
`;
