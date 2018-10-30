// @flow

import { createYield } from 'react-adone';
import type { State } from './types';

import * as actions from './actions';
import * as selectors from './selectors';

const defaultState: State = {
  selected: null,
  data: null,
  loading: false,
};

const basket = {
  key: 'user',
  defaultState,
  actions,
};

// You can even export ready-to-use components
export const UserState = createYield<State, typeof actions>(
  'UserState',
  basket
);

export const UserSelectedState = createYield<
  State,
  typeof actions,
  $Call<typeof selectors.getSelected, State>
>('UserSelectedState', basket, selectors.getSelected);

export default basket;
