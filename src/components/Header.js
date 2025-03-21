import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Header.css';

const Header = () => {
  const { getTotalItems } = useCart();

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">GreenThumb</Link>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/cart" className="cart-icon">
              🛒 <span className="cart-count">{getTotalItems()}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 