import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaToggleOff, FaToggleOn } from 'react-icons/fa';

import { connect } from 'unistore/react';
import { createStructuredSelector } from 'reselect';
import { actions, selectors } from '../store';
import useAvoidHydrate from '../hooks/useAvoidHydrate';

const Wrapper = styled.div`
  display: flex;
  height: 18px;
  align-items: center;
  padding: 2px 6px;

  cursor: pointer;
`;

const Text = styled.span`
  margin-left: 6px;
`;

const AddToCompares = ({ add, del, id, inCompares }) => {
  const client = useAvoidHydrate();

  if (!client) {
    return null;
  }

  const text = inCompares ? 'In Compares' : 'Add to Compares';
  const action = inCompares ? del : add;
  const Icon = inCompares ? FaToggleOn : FaToggleOff;
  return (
    <Wrapper onClick={() => action(id)}>
      <Icon color="#2962FF" />
      <Text>{text}</Text>
    </Wrapper>
  );
};

const selector = createStructuredSelector({
  inCompares: selectors.inCompares,
});

const action = {
  add: actions.addToCompares,
  del: actions.deleteFromCompares,
};

const enhance = connect(
  selector,
  action,
);

AddToCompares.propTypes = {
  add: PropTypes.func.isRequired,
  del: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  inCompares: PropTypes.bool.isRequired,
};

export default enhance(AddToCompares);
