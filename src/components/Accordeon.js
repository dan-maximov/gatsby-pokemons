import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaChevronDown } from 'react-icons/fa';

const Header = styled.label`
  display: flex;
  justify-content: space-between;
  padding: 1em;
  border-top: #bdbdbd solid 1px;
  cursor: pointer;
`;

const Title = styled.p`
  font-size: 24px;
`;

const Content = styled.div`
  display: none;
  padding: 0 1em 1em;
`;

const Chevron = styled(FaChevronDown)`
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
  <React.Fragment>
    <HiddenCheckbox type="checkbox" id={title} />
    <Header htmlFor={title}>
      <Title>{title}</Title>
      <Chevron />
    </Header>
    <Content>{children}</Content>
  </React.Fragment>
);

Accordeon.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Accordeon;
