// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "./Products.css";
import products from "../components/Products/data";

const Products = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialFilter = queryParams.get("category") || "all";
  const [filter, setFilter] = useState(initialFilter);

  useEffect(() => {
    setFilter(initialFilter);
  }, [initialFilter]);

  const filteredProducts = products.filter(product => {
    if (filter === "all") return true;
    return product.category === filter;
  });

  return (
    <div className="products">
      <h2>Our Products</h2>
      <div className="filter-dropdown">
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="A">Products A</option>
          <option value="B">Products B</option>
          <option value="C">Products C</option>
        </select>
      </div>
      <div className="product-grid">
        {filteredProducts.map((product, index) => (
          <div key={index} className="product-card">
            <Link to={`/products/${product.name.toLowerCase().replace(/ /g, "-")}`}>
              <img src={product.img} alt={product.title} className="product-image" />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>Category: {product.category}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
