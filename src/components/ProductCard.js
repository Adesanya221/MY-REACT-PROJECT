import React from 'react';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ plant }) => {
  const { cartItems, addToCart } = useCart();
  
  // Check if this plant is already in the cart
  const isInCart = cartItems.some(item => item.id === plant.id);

  return (
    <div className="product-card">
      <img src={plant.image} alt={plant.name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{plant.name}</h3>
        <p className="product-category">{plant.category}</p>
        <p className="product-price">${plant.price.toFixed(2)}</p>
        <button 
          className="add-to-cart-btn" 
          onClick={() => addToCart(plant)}
          disabled={isInCart}
        >
          {isInCart ? 'Added to Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard; 