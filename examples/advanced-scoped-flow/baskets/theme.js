// @flow

import { createYield, type BasketAction } from 'react-adone';

type State = {
  color: string,
};

const defaultState: State = {
  color: '#FFF',
};

const actions = {
  change: (value: string): BasketAction<State> => produce => {
    produce(draft => {
      draft.color = value;
    });
  },
};

const basket = {
  key: 'theme',
  defaultState,
  actions,
};

export const ThemeYield = createYield<State, typeof actions>(
  'ThemeYield',
  basket
);

export default basket;
