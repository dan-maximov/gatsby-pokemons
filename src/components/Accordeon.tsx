import React from 'react';
import styled from 'styled-components';
import { FaChevronUp } from 'react-icons/fa';

const Header = styled.label`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  border-top: #bdbdbd solid 1px;
  cursor: pointer;
`;

const Title = styled.p`
  font-size: 24px;
`;

const Content = styled.div`
  display: none;
  padding: 0 16px 16px;
`;

const Chevron = styled(FaChevronUp)`
  transform: rotate(180deg);

  transition: transform 100ms linear;
`;

const HiddenCheckbox = styled.input`
  display: none;

  &:checked + ${Header} + ${Content} {
    display: block;
  }

  &:checked + ${Header} ${Chevron} {
    transform: rotate(0deg);
  }
`;

interface IProps {
  title: string;
  children: React.ReactNode;
}

const Accordeon = ({ title, children }: IProps) => (
  <>
    <HiddenCheckbox type="checkbox" id={title} />
    <Header htmlFor={title}>
      <Title>{title}</Title>
      <Chevron />
    </Header>
    <Content>{children}</Content>
  </>
);

export default Accordeon;
