// @flow

import { createYield, type BasketAction } from 'react-adone';

type State = {
  data: string[],
  loading: boolean,
};

const defaultState: State = {
  data: [],
  loading: false,
};

const actions = {
  add: (message: string): BasketAction<State> => produce => {
    produce(draft => {
      draft.data.push(message);
    });
  },
};

const basket = {
  key: 'messages',
  defaultState,
  actions,
};

export const MessagesYield = createYield<State, typeof actions>(
  'MessagesYield',
  basket
);

export default basket;
