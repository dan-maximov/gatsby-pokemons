import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.footer`
  width: 100%;
  background-color: #b71c1c;
  color: #fff;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0 auto;
  max-width: 960px;
  padding: 6px;
`;

const CurrentYear = styled.span`
  margin-right: 3px;
`;

const Link = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => (
  <Wrapper>
    <Inner>
      <CurrentYear>{`© ${new Date().getFullYear()}, `}</CurrentYear>
      <Link href="https://github.com/meatspincom" target="_blank" rel="noopener noreferrer">
        meatspincom
      </Link>
    </Inner>
  </Wrapper>
);

export default Footer;
