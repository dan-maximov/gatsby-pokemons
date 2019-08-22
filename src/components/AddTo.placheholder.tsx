import React from 'react';
import styled from 'styled-components';
import { Text, Wrapper } from './AddTo.styles';

interface Props {
  text: string;
}

const AddToPlacheholder: React.FC<Props> = ({ text }) => (
  <Wrapper>
    <Icon />
    <Text>{text}</Text>
  </Wrapper>
);

const Icon = styled.i`
  width: 14px;
  height: 14px;
`;

export default AddToPlacheholder;
