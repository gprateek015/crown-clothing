export const addItemToCart = (cartItems, itemToAdd) => {
  const existing = cartItems.find(item => item.id === itemToAdd.id);

  if (existing) {
    return cartItems.map(item =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
  return cartItems.filter(cartItem => cartItem.id != itemToRemove.id);
};

export const decreaseQuantityFromCart = (cartItems, item) => {
  const itemToModify = cartItems.find(cartItem => cartItem.id == item.id);

  if (itemToModify.quantity == 1) {
    return removeItemFromCart(cartItems, item);
  }

  return cartItems.map(cartItem =>
    cartItem.id == item.id
      ? { ...item, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
