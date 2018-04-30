/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest, takeEvery  } from 'redux-saga/effects';
import request from 'utils/request';
import { 
    LOAD_PRODUCTS,
    LOAD_PRODUCTS_SUCCESS,
    LOAD_MORE_PRODUCTS,
    LOAD_MORE_PRODUCTS_SUCCESS
} from './constants';
import { 
    getLoadProducts,
    getLoadProductsSuccess,
    getLoadMoreProducts,
    makeSelectGetSortBy,
    getLoadMoreProductsSuccess,
    setNoMoreProducts
} from './actions';


function* loadMoreProducts(action) {
  // Select username from store
  try {
      //*Move this to actions
      const sortBy = action.sortBy || '';
      const page = action.currentPage || 0;
      var requestURL = `toys/discounts.json`;
      requestURL += "?sort="+sortBy;
      if(page){
        requestURL += "&page="+page;
      }
      var res = yield call(request, requestURL);
            if(res && res[1].data.products.length){
              yield put(getLoadMoreProductsSuccess(res, action.currentPage));
            }else{
              yield put(setNoMoreProducts());
            }
    } catch (err) {
      yield put(searchError(err));
    }
}




function* getProducts(action) {
  // Select username from store
  try {
      //*Move this to actions
      const sortBy = action.sortBy;
      var requestURL = `toys/discounts.json`;
      if(sortBy){
        requestURL += "?sort="+sortBy
      }
      var res = yield call(request, requestURL);
            yield put(getLoadProductsSuccess(res, sortBy));
    } catch (err) {
      yield put(searchError(err));
    }
}


/**
 * Root saga manages watcher lifecycle
 */
 function* products() {
  // Watches for ARTIST_REQUEST actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount.
  yield takeLatest(LOAD_PRODUCTS, getProducts);
  yield takeLatest(LOAD_MORE_PRODUCTS, loadMoreProducts);
}


export default products;