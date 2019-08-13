import React from 'react';
import { FaEnvelope, FaTwitter, FaGithub } from 'react-icons/fa';

import styled, { css } from 'styled-components';
import {} from 'styled-components/cssprop';

const icon = css`
  margin-left: 6px;
`;

const Wrapper = styled.footer`
  width: 100%;
  background-color: #b71c1c;
  color: #fff;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  max-width: 960px;
  padding: 6px 6px 6px 0;
`;

const CurrentYear = styled.span`
  margin-left: auto;
  margin-right: 3px;
`;

const IconLink = styled.a`
  display: flex;
  color: #fff;
`;

const Link = styled.a`
  color: #fff;
`;

const Footer = () => (
  <Wrapper>
    <Inner>
      <IconLink href="mailto:mr.quze@gmail.com">
        <FaEnvelope css={icon} />
      </IconLink>
      <IconLink href="https://twitter.com/MaximovDanila" target="_blank" rel="noopener noreferrer">
        <FaTwitter css={icon} />
      </IconLink>
      <IconLink href="https://github.com/meatspincom" target="_blank" rel="noopener noreferrer">
        <FaGithub css={icon} />
      </IconLink>
      <CurrentYear>{`© ${new Date().getFullYear()}, `}</CurrentYear>
      <Link href="https://github.com/meatspincom/gatsby-pokemons" target="_blank" rel="noopener noreferrer">
        meatspincom
      </Link>
    </Inner>
  </Wrapper>
);

export default Footer;
