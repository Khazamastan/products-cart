import { fromJS } from 'immutable';
import data  from "../../data";
const { List, Map, setIn, toJS } = require('immutable')
import _ from "lodash";

import { 
  QTY_DECREMENT,
  QTY_INCREMENT,
  REMOVE_ITEM,
  CHANGE_QTY
} from './constants';
var cartItems = JSON.parse(localStorage.getItem('cartItems'));
const initialState =  fromJS({'data' : List(data), 'cartItems' : List(cartItems)});

export default function authentication(state = initialState, action) {
  var updatedState = state;
  switch (action.type) {
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
    case REMOVE_ITEM:
      return  state
            .set('modalIsOpen', false)
            .set('currentAlbum', null);
      break;
    default:
      return state
  }
}



function getInCremented(action, state, factor, value){
      factor = parseInt(factor);
      const  { productId } = action;
      var cartList = state.get('cartItems'), updatedState;
      const products = state.get('data');
      const index = products.findIndex(i => i._id === productId);
      const currentProd = products.get(index);
      const cartindex = cartList.findIndex(i => i.id === productId);
      const cartiItem = cartList.get(cartindex);
      var qty = 0;
      if(cartindex > -1 && cartiItem){
        qty = parseInt(value || (parseInt(cartiItem.qty) || 0) + (factor || 1));
        if(!qty){
          updatedState = state.update('cartItems',
              (list) => (list.splice(cartindex, 1))
          );
        }else{
          cartList = cartList.update((cartItem) => {
            // avengers is a Map, so we need to return the value from set() to change
            // its values
            // updatedState =  state.setIn('cartItems', cartindex, { id : productId, qty : qty});
            updatedState = state.update('cartItems',
              (list) => (list.set(cartindex, {id : productId, qty : qty}))
            );
          });
        }
      }else{
        updatedState = state.update('cartItems',
            (list) => (list.push({id : productId, qty : 1}))
        );
      }

      localStorage.setItem('cartItems',JSON.stringify(updatedState.get('cartItems').toArray()));

      return updatedState;
}