// userUtils.js

export const addToCart = (item) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const updatedUser = { ...user, cart: [...user.cart, item] };
  localStorage.setItem('user', JSON.stringify(updatedUser));
};

export const placeOrder = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const newOrder = [...user.cart];
  const updatedUser = { ...user, orders: [...user.orders, ...newOrder], cart: [] };
  localStorage.setItem('user', JSON.stringify(updatedUser));
};
