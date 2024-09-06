import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id}>
              <h4>{item.name}</h4>
              <p>{item.quantity} x ${item.price}</p>
              <p>Total: ${item.totalPrice}</p>
            </div>
          ))}
          <h3>Total Quantity: {totalQuantity}</h3>
          <h3>Total Amount: ${totalAmount}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
