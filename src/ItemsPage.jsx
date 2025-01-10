import React from "react";
import "./App.css";

const products = [
  { id: 1, name: "Red Rose", type: "Bouquets", price: 20, image: "rose.png", badge: "" },
  { id: 2, name: "Echeveria", type: "Indoor Plants", price: 18, image: "echeveria.png", badge: "" },
  { id: 3, name: "Yellow Tulips", type: "Tulips", price: 20, image: "tulips.png", badge: "Sales 10%" },
  { id: 4, name: "Bright Gerbera Daisy", type: "Congratulations", price: 12, image: "daisy.png", badge: "Sales" },
  { id: 5, name: "Eucalyptus", type: "Bouquets", price: 21, image: "eucalyptus.png", badge: "" },
  { id: 6, name: "Mini Sunflowers", type: "Sunflowers", price: 34, image: "sunflowers.png", badge: "Sales 30%" },
];

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Items</h1>
        <button className="add-item">+ Add Item</button>
      </header>
      <input type="text" placeholder="Search Flower Types" className="search-bar" />
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={`images/${product.image}`} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-type">{product.type}</p>
            <p className="product-price">${product.price}</p>
            {product.badge && <span className="product-badge">{product.badge}</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
