// @flow
import immer from 'immer';
import update from './update';

import type { BasketStore, Middleware } from '../types';

const applyMiddleware = (store: BasketStore<any>, middlewares: Middleware[]) =>
  [...middlewares, update]
    .reverse()
    .reduce((next, mw) => mw(store)(next), immer);

export default applyMiddleware;
