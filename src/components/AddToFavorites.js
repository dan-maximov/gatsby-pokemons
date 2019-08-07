import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

import { connect } from 'unistore/react';
import { createStructuredSelector } from 'reselect';
import { actions, selectors } from '../store';
import useAvoidHydrate from '../hooks/useAvoidHydrate';

const Wrapper = styled.div`
  display: flex;
  width: 128px;
  height: 18px;
  align-items: center;
  padding: 2px 6px;
  padding-left: 0;

  cursor: pointer;
`;

const Text = styled.span`
  margin-left: 6px;
`;

const AddToFavorites = ({ add, del, id, inFavorites }) => {
  const client = useAvoidHydrate();

  if (!client) {
    return null;
  }

  const text = inFavorites ? 'In favorites' : 'Add to favorites';
  const action = inFavorites ? del : add;
  const Icon = inFavorites ? FaHeart : FaRegHeart;
  return (
    <Wrapper onClick={() => action(id)}>
      <Icon color="#d50000" />
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
