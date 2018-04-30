/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
    LOAD_PRODUCTS,
    LOAD_PRODUCTS_SUCCESS,
    LOAD_MORE_PRODUCTS,
    LOAD_MORE_PRODUCTS_SUCCESS,
    SORT_BY,
    QTY_DECREMENT,
    QTY_INCREMENT,
    CHANGE_DISPLAY_MODE,
    REMOVE_ITEM,
    CHANGE_QTY
  } from './constants';
  
  
  
  /**
   * Add +1 to qunatity
  */
   export function increment(id) {
    return {
      type: QTY_INCREMENT,
      productId : id
    };
  }

  /**
   * Remove item from cart
  */
  export function removeitem(id) {
    return {
      type: REMOVE_ITEM,
      productId : id
    };
  }

  export function changeQunatity(id, qty) {
    return {
      type: CHANGE_QTY,
      productId : id,
      qty : qty
    };
  }
  
  /**
   * Remove +1 to qunatity
  */
  export function decrement(id) {
    return {
      type: QTY_DECREMENT,
      productId : id
    };
  }
  
  /**
   * Load initial products list
  */
  export function getLoadProducts(sortBy){
    return {
      type: LOAD_PRODUCTS,
      sortBy
    };
  }
  

  /**
   * Load initial products list success
  */
  export function getLoadProductsSuccess(data){
    return {
      type: LOAD_PRODUCTS_SUCCESS,
      data
    };
  }
  
  /**
   * Load more products list
  */
  export function getLoadMoreProducts(currentPage){
    return {
      type: LOAD_MORE_PRODUCTS,
      currentPage
    };
  }
  

  /**
   * Load more products list
  */
  export function getLoadMoreProductsSuccess(products, currentPage){
    return {
      type: LOAD_MORE_PRODUCTS_SUCCESS,
      products,
      currentPage
    };
  }


/**
   * set No More Products
  */
 export function setNoMoreProducts(products){
  return {
    type: SET_NO_PRODUCTS,
    products
  };
}


/**
   * set display mode
  */
 export function changeMode(mode){
  return {
    type: CHANGE_DISPLAY_MODE,
    mode
  };
}

