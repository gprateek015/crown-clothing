import CartActionTypes from './cart.types';

export const toggleCartDropdown = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = item => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});

export const decreaseQuantity = item => ({
  type: CartActionTypes.DECREASE_QTY,
  payload: item,
});
