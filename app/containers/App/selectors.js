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

const makeSelectGetSortBy = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('sortBy')
);


const makeSelectGetCurrentPage = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('currentPage')
);

const makeSelectGetLoadMore = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loadProducts')
);

const makeSelectFetchProducts = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('fetchingProducts')
);

const makeSelectGetMode = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('mode')
);




export {
  makeSelectGetProducts,
  makeSelectGetCartItems,
  makeSelectGetSortBy,
  makeSelectGetCurrentPage,
  makeSelectGetLoadMore,
  makeSelectFetchProducts,
  makeSelectGetMode
};
