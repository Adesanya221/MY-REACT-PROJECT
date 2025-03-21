import React from 'react';
import { useCart } from '../context/CartContext';
import './CartItem.css';

const CartItem = ({ item }) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h3 className="cart-item-name">{item.name}</h3>
        <p className="cart-item-price">${item.price.toFixed(2)}</p>
      </div>
      <div className="cart-item-actions">
        <div className="quantity-controls">
          <button className="quantity-btn" onClick={() => decreaseQuantity(item.id)}>-</button>
          <span className="quantity">{item.quantity}</span>
          <button className="quantity-btn" onClick={() => increaseQuantity(item.id)}>+</button>
        </div>
        <p className="cart-item-total">${(item.price * item.quantity).toFixed(2)}</p>
        <button className="remove-btn" onClick={() => removeFromCart(item.id)}>🗑️</button>
      </div>
    </div>
  );
};

export default CartItem; 