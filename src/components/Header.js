import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { FaHeart, FaCalendarAlt } from 'react-icons/fa';

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #f44336;
  z-index: 99;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  max-width: 960px;
  padding: 6px;
`;

const Logo = styled.img`
  height: 36px;
  width: 28.66px;
`;

const LinkToHome = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 24px;
  color: white;
`;

const LinkText = styled.span`
  margin-top: 2px;
  margin-left: 12px;
`;

const LinkToFavorites = styled(Link)`
  margin-left: auto;
`;

const LinkToCompares = styled(Link)`
  padding: 0 8px;
`;

const Header = () => (
  <Wrapper>
    <Inner>
      <LinkToHome to="/">
        <Logo src="/logo.png" alt="site logo" />
        <LinkText>PokeList</LinkText>
      </LinkToHome>
      <LinkToFavorites to="/favorites">
        <FaHeart color="#fff" size="18px" />
      </LinkToFavorites>
      <LinkToCompares to="/compares">
        <FaCalendarAlt color="#fff" size="18px" />
      </LinkToCompares>
    </Inner>
  </Wrapper>
);

export default Header;
