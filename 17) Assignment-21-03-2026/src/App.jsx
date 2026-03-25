import { useState } from 'react';
import './App.css';

// The "Model" - Our Product Data
const PRODUCTS = [
  { id: 1, name: 'Minimalist Watch', price: 120, category: 'Accessories', img: '⌚' },
  { id: 2, name: 'Leather Bag', price: 250, category: 'Fashion', img: '💼' },
  { id: 3, name: 'Wireless Earbuds', price: 80, category: 'Electronics', img: '🎧' },
  { id: 4, name: 'Smart Glasses', price: 300, category: 'Electronics', img: '👓' },
];

function App() {
  const [filter, setFilter] = useState('All');

  // Logic to filter products
  const filteredProducts = filter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="app-container">
      <header className="shop-header">
        <h1>Product Listing</h1>
        <div className="filter-group">
          {['All', 'Electronics', 'Fashion', 'Accessories'].map(cat => (
            <button 
              key={cat} 
              onClick={() => setFilter(cat)}
              className={filter === cat ? 'active' : ''}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      <main className="product-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-img">{product.img}</div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="category">{product.category}</p>
              <p className="price">${product.price}</p>
              <button className="add-btn">Add to Cart</button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;