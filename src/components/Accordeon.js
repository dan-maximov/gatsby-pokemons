import React from 'react';
import PropTypes from 'prop-types';
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

const Accordeon = ({ title, children }) => (
  <>
    <HiddenCheckbox type="checkbox" id={title} />
    <Header htmlFor={title}>
      <Title>{title}</Title>
      <Chevron />
    </Header>
    <Content>{children}</Content>
  </>
);

Accordeon.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Accordeon;
