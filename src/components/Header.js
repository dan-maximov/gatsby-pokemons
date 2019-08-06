import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import pika from './pikachu.png';

const Wrapper = styled.header`
  background-color: #f44336;
  margin-bottom: 1.45rem;
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
  width: auto;
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

const Header = () => (
  <Wrapper>
    <Inner>
      <LinkToHome to="/">
        <Logo src={pika} alt="site logo" />
        <LinkText>PokeList</LinkText>
      </LinkToHome>
    </Inner>
  </Wrapper>
);

export default Header;
