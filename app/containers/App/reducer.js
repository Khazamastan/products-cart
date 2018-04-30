import { fromJS } from 'immutable';
const { List, Map, setIn, toJS } = require('immutable')
import _ from "lodash";

import { 
  LOAD_PRODUCTS,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_MORE_PRODUCTS,
  LOAD_MORE_PRODUCTS_SUCCESS,
  CHANGE_DISPLAY_MODE, 
  QTY_DECREMENT,
  QTY_INCREMENT,
  REMOVE_ITEM,
  CHANGE_QTY,
  SET_NO_PRODUCTS
} from './constants';
var cartItems = JSON.parse(localStorage.getItem('cartItems'));
const initialState =  fromJS({
  'data' : { products :  List([])}, 
  "cartItems" : List(cartItems),
  sortBy : "",
  mode : "grid",
  fetchingProducts : true,
  loadProducts : true, 
  currentPage:1
});

export default function authentication(state = initialState, action) {
  var updatedState = state;
  switch (action.type) {
    case LOAD_PRODUCTS:
      return updatedState.
            set('sortBy', action.sortBy);
      break;

    case LOAD_PRODUCTS_SUCCESS:
      const data = action.data[1].data;
      return state.
        set('data', getSortBy(action, data,  action.sortBy)).
        set('filters', action.data[2].data);
      break;

    case LOAD_MORE_PRODUCTS:
      debugger;
      return updatedState
            set('fetchingProducts', true)
      break;

    case LOAD_MORE_PRODUCTS_SUCCESS:
      var data = state.get('data');
          data.products = data.products.concat(action.products[1].data.products);
      const sortedProducts = getSortBy(action, data,  action.sortBy);
      return state.
            set('data', sortedProducts).
            set('currentPage', action.currentPage).
            set('fetchingProducts', true)
      break;

    case CHANGE_DISPLAY_MODE:
      return updatedState.
              set('mode', action.mode)
      break;

    case QTY_INCREMENT:
      updatedState = getInCremented(action, state, 1)
      return updatedState;
      break;

    case QTY_DECREMENT:
      updatedState = getInCremented(action, state, -1)
      return updatedState;
      break;

    case CHANGE_QTY:
      updatedState = getInCremented(action, state, null, action.qty)
      return updatedState;
      break;
      break;
    case SET_NO_PRODUCTS:
        return  state
        .set('loadProducts', false)
        break;
    default:
      return state
  }
}

function getPrice(item){
  item = item.defaultVariant;
  return Math.round(item.mrp*(100/item.discount), 2);
}

function getSortBy(action, data, sortBy){
  var products = data.products;
  var sortedProducts = products;
  switch(sortBy) {
    case 'price_desc':
      sortedProducts = products.sort((a, b) => {
          const prevItemPrice = getPrice(a);
          const nextItemPrice =  getPrice(b);
          console.log(prevItemPrice, nextItemPrice)
          return prevItemPrice-nextItemPrice;
      })
      break;
    case 'price_asc':
        sortedProducts = products.sort((a, b) => {
          const prevItemPrice = getPrice(a);
          const nextItemPrice =  getPrice(b);
          console.log(nextItemPrice, prevItemPrice)
          return prevItemPrice-nextItemPrice;
      }).reverse()
      break;
  }
  
  return { products : sortedProducts, sort : data.sort};
}


function getInCremented(action, state, factor, value){
      factor = parseInt(factor);
      const  { productId } = action;
      var cartList = state.get('cartItems'), updatedState;
      const products = state.get('data').products;
      const index = products.findIndex(i => i.id === productId);
      const currentProd = products[index];
      const cartindex = cartList.findIndex(i => i.id === productId);
      const cartiItem = cartList.get(cartindex);
      var qty = 0;

      if(cartindex > -1 && cartiItem){
        qty = parseInt(value || (parseInt(cartiItem.qty) || 0) + (factor || 1));
        if(value == 0){
          qty = 0;
        }
        if(!qty){
          updatedState = state.update('cartItems',
              (list) => (list.splice(cartindex, 1))
          );
        }else{
          cartList = cartList.update((cartItem) => {
            updatedState = state.update('cartItems',
              (list) => (list.set(cartindex, {id : productId, qty : qty, ...currentProd}))
            );
          });
        }
      }else{
        updatedState = state.update('cartItems',
            (list) => (list.push({id : productId, qty : 1, ...currentProd}))
        );
      }

      localStorage.setItem('cartItems',JSON.stringify(updatedState.get('cartItems').toArray()));

      return updatedState;
}