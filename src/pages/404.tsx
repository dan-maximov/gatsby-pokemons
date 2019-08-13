import React from 'react';
import styled from 'styled-components';
import SEO from 'components/Seo';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 16px 12px;

  h2 {
    margin-bottom: 12px;
  }
`;

const ImageWrapper = styled.div`
  margin: 0 auto;
  img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
`;

const NotFoundPage = () => (
  <Wrapper>
    <SEO title="404: Not found" />
    <h2>Page was not found</h2>
    <ImageWrapper>
      <img src="/404.jpg" alt="Snivy" />
    </ImageWrapper>
  </Wrapper>
);

export default NotFoundPage;
