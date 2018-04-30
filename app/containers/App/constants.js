/*
 * Search Constants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */


/* product actions */
export const LOAD_PRODUCTS = 'app/App/LOAD_PRODUCTS';
export const LOAD_PRODUCTS_SUCCESS = 'app/App/LOAD_PRODUCTS_SUCCESS';

export const LOAD_MORE_PRODUCTS = 'app/App/LOAD_MORE_PRODUCTS';
export const LOAD_MORE_PRODUCTS_SUCCESS = 'app/App/LOAD_MORE_PRODUCTS_SUCCESS';

export const CHANGE_DISPLAY_MODE = 'app/App/CHANGE_DISPLAY_MODE';

export const SET_NO_PRODUCTS = 'app/App/SET_NO_PRODUCTS';

/* cart actions */
export const QTY_INCREMENT = 'app/App/QTY_INCREMENT';
export const QTY_DECREMENT = 'app/App/QTY_DECREMENT';
export const CHANGE_QTY = 'app/App/CHANGE_QTY';
export const REMOVE_ITEM = 'app/App/REMOVE_ITEM';


