/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('App');

const makeSelectGetProducts = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('data')
);

const makeSelectGetCartItems = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('cartItems')
);




export {
  makeSelectGetProducts,
  makeSelectGetCartItems
};
