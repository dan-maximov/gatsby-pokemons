import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Wrapper = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`;

const Inner = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
`;

const Heading = styled.h1`
  margin: 0;
`;

const LinkToHome = styled(Link)`
  color: white;
  text-decoration: none;
`;

const Header = ({ siteTitle }) => (
  <Wrapper>
    <Inner>
      <Heading>
        <LinkToHome to="/">{siteTitle}</LinkToHome>
      </Heading>
    </Inner>
  </Wrapper>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
