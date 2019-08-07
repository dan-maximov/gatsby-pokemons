import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Type from './Type';

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

const TypesList = ({ types }) => (
  <Wrapper>
    {types.map(t => (
      <Type name={t} key={t} />
    ))}
  </Wrapper>
);

TypesList.propTypes = {
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TypesList;
