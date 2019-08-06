import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from './Header';

const Wrapper = styled.div`
  margin: 0 auto;
  margin-top: 72px;
  max-width: 960px;
`;

const Layout = ({ children }) => (
  <>
    <Header />
    <Wrapper>
      <main>{children}</main>
      <footer>
        {`© ${new Date().getFullYear()}, `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </Wrapper>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
