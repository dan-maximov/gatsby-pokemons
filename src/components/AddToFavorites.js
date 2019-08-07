import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

import { connect } from 'unistore/react';
import { createStructuredSelector } from 'reselect';
import { actions, selectors } from '../store';

const Wrapper = styled.div`
  display: flex;
  width: 128px;
  align-items: center;
  padding: 2px 6px;
  border-radius: 4px;
  background-color: #fbc02d;

  cursor: pointer;
`;

const Text = styled.span`
  margin-left: 6px;
`;

const AddToFavorites = ({ add, del, id, inFavorites }) => {
  const text = inFavorites ? 'In favorites' : 'Add to favorites';
  const action = inFavorites ? del : add;
  const Icon = inFavorites ? FaHeart : FaRegHeart;
  return (
    <Wrapper onClick={() => action(id)}>
      <Icon />
      <Text>{text}</Text>
    </Wrapper>
  );
};

const selector = createStructuredSelector({
  inFavorites: selectors.inFavorites,
});

const action = {
  add: actions.addToFavorites,
  del: actions.deleteFromFavorites,
};

const enhance = connect(
  selector,
  action,
);

AddToFavorites.propTypes = {
  add: PropTypes.func.isRequired,
  del: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  inFavorites: PropTypes.bool.isRequired,
};

export default enhance(AddToFavorites);
