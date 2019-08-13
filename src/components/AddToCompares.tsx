import React from 'react';
import styled from 'styled-components';
import { FaToggleOff, FaToggleOn } from 'react-icons/fa';

import { connect } from 'unistore/react';
import { createStructuredSelector } from 'reselect';
import { actions, selectors } from 'store';
import useAvoidHydrate from 'hooks/useAvoidHydrate';
import { Store } from 'types/Store';

const Wrapper = styled.div`
  display: flex;
  height: 18px;
  align-items: center;
  padding: 2px 6px;

  cursor: pointer;
`;

const Placeholder = styled.div`
  height: 18px;
  padding: 2px 6px;

  cursor: pointer;
`;

const Text = styled.span`
  margin-left: 6px;
`;

interface OwnProps {
  id: string;
}

interface ConnectedStore {
  inCompares: boolean;
}

interface ConnectedActions {
  add?(id: string): void;
  del?(id: string): void;
}

type Props = OwnProps & ConnectedStore & ConnectedActions;

const AddToCompares = ({ add, del, id, inCompares }: Props) => {
  const client = useAvoidHydrate();

  if (!client) {
    return <Placeholder />;
  }

  const text = inCompares ? 'In Compares' : 'Add to Compares';
  const fn = inCompares ? del : add;
  const Icon = inCompares ? FaToggleOn : FaToggleOff;
  return (
    <Wrapper onClick={() => fn && fn(id)}>
      <Icon color="#2962FF" />
      <Text>{text}</Text>
    </Wrapper>
  );
};

const selector = createStructuredSelector<Store, OwnProps, ConnectedStore>({
  inCompares: selectors.inCompares,
});

const action = {
  add: actions.addToCompares,
  del: actions.deleteFromCompares,
};

const enhance = connect<OwnProps, {}, Store, ConnectedStore>(
  selector,
  action,
);

export default enhance(AddToCompares);
