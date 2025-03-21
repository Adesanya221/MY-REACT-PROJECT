import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import plants from '../data/plants';
import './Home.css';

const Home = () => {
  // Get unique categories
  const categories = [...new Set(plants.map(plant => plant.category))];

  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to GreenThumb</h1>
          <p>Find the perfect houseplant for your space</p>
          <Link to="/products" className="get-started-btn">Get Started</Link>
        </div>
      </div>
      
      <div className="products-section">
        <h2>Our Plants</h2>
        
        {categories.map(category => (
          <div key={category} className="category-section">
            <h3 className="category-title">{category}</h3>
            <div className="products-grid">
              {plants
                .filter(plant => plant.category === category)
                .map(plant => (
                  <ProductCard key={plant.id} plant={plant} />
                ))
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home; 