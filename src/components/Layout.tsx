import React from 'react';
import styled from 'styled-components';

import Header from 'components/Header';
import Footer from 'components/Footer';

const Wrapper = styled.div`
  margin: 0 auto;
  padding-top: 48px;
  max-width: 960px;
  min-height: calc(100vh - 78px);
`;

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => (
  <>
    <Header />
    <Wrapper>
      <main>{children}</main>
    </Wrapper>
    <Footer />
  </>
);

export default Layout;
