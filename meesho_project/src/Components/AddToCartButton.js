import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice'; // Ensure this path is correct

const AddToCartButton = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product)); // Dispatch the addToCart action with the product as payload
    alert(`${product.name} has been added to your cart!`);
  };

  return (
    <button onClick={handleAddToCart} className="add-to-cart-btn">
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
