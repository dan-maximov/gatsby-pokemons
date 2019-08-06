import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';

const Wrapper = styled.div`
  margin: 0 auto;
  margin-top: 48px;
  max-width: 960px;
  min-height: calc(100vh - 78px);
`;

const Layout = ({ children }) => (
  <>
    <Header />
    <Wrapper>
      <main>{children}</main>
    </Wrapper>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
