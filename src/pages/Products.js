import React from 'react';
import ProductCard from '../components/ProductCard';
import plants from '../data/plants';
import './Products.css';

const Products = () => {
  // Get unique categories
  const categories = [...new Set(plants.map(plant => plant.category))];

  return (
    <div className="products-container">
      <h1 className="page-title">Our Plants Collection</h1>
      
      {categories.map(category => (
        <div key={category} className="category-section">
          <h2 className="category-title">{category}</h2>
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
  );
};

export default Products; 