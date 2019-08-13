import React from 'react';
import styled from 'styled-components';
import Type from 'components/Type';

const Wrapper = styled.div`
  display: flex;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  & > div {
    :not(:first-child) {
      margin-left: 8px;
    }
  }
`;

interface IProps {
  types: string[];
}

const TypesList = ({ types }: IProps) => (
  <Wrapper>
    {types.map(t => (
      <Type name={t} key={t} />
    ))}
  </Wrapper>
);

export default TypesList;
