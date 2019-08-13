import React from 'react';
import styled from 'styled-components';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

import { connect } from 'unistore/react';
import { createStructuredSelector } from 'reselect';
import { actions, selectors } from '../store';
import useAvoidHydrate from '../hooks/useAvoidHydrate';
import { Store } from 'types/Store';

const Wrapper = styled.div`
  display: flex;
  width: 128px;
  height: 18px;
  align-items: center;
  padding: 2px 6px;
  padding-left: 0;

  cursor: pointer;
`;

const Placeholder = styled.div`
  width: 128px;
  height: 18px;
  padding: 2px 6px;
  padding-left: 0;

  cursor: pointer;
`;

const Text = styled.span`
  margin-left: 6px;
`;

interface OwnProps {
  id: string;
}

interface ConnectedStore {
  inFavorites: boolean;
}

interface ConnectedActions {
  add?(id: string): void;
  del?(id: string): void;
}

type Props = OwnProps & ConnectedStore & ConnectedActions;

const AddToFavorites = ({ add, del, id, inFavorites }: Props) => {
  const client = useAvoidHydrate();

  if (!client) {
    return <Placeholder />;
  }

  const text = inFavorites ? 'In favorites' : 'Add to favorites';
  const fn = inFavorites ? del : add;
  const Icon = inFavorites ? FaHeart : FaRegHeart;
  return (
    <Wrapper onClick={() => fn && fn(id)}>
      <Icon color="#d50000" />
      <Text>{text}</Text>
    </Wrapper>
  );
};

const selector = createStructuredSelector<Store, OwnProps, ConnectedStore>({
  inFavorites: selectors.inFavorites,
});

const action = {
  add: actions.addToFavorites,
  del: actions.deleteFromFavorites,
};

const enhance = connect<OwnProps, {}, Store, ConnectedStore>(
  selector,
  action,
);

export default enhance(AddToFavorites);
