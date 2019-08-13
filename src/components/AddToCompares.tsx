import React from 'react';
import styled from 'styled-components';
import { FaToggleOff, FaToggleOn } from 'react-icons/fa';

import { connect } from 'unistore/react';
import { createStructuredSelector, OutputParametricSelector } from 'reselect';
import { actions, selectors } from 'store';
import useAvoidHydrate from 'hooks/useAvoidHydrate';
import { IStore } from 'types/Store';

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

interface IOwnProps {
  id: string;
}

interface IConnectedStore {
  inCompares: boolean;
}

interface IConnectedActions {
  add?(id: string): void;
  del?(id: string): void;
}

type Props = IOwnProps & IConnectedStore & IConnectedActions;

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

const selector = createStructuredSelector<IStore, IOwnProps, IConnectedStore>({
  inCompares: selectors.inCompares,
});

const action = {
  add: actions.addToCompares,
  del: actions.deleteFromCompares,
};

const enhance = connect<IOwnProps, {}, IStore, IConnectedStore>(
  selector,
  action,
);

export default enhance(AddToCompares);
