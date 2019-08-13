import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;

const Text = styled.p`
  margin-top: 2px;
  display: flex;
`;

const Dots = styled.div`
  flex: 1;
  height: 18px;
  margin: 0 4px;
  margin-top: -6px;
  border-bottom: 2px dotted #000;
`;

interface IProps {
  title: string;
  value: React.ReactNode | string;
}

const Stat = ({ title, value }: IProps) => (
  <Wrapper>
    <Text>{title}</Text>
    <Dots />
    <Text>{value}</Text>
  </Wrapper>
);

export default Stat;
