// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "./Products.css";
import products from "../components/Products/data";
import { useTranslation } from "react-i18next";

const Products = () => {
  const { t } = useTranslation();
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
      <div className="description">
        <p>Welcome to our product page. Here you can find a variety of items categorized for your convenience. Use the filter to narrow down your search.</p>
      </div>
      <div className="information">
        <p>For more information about our products, please contact our support team.</p>
        <p>Our products are sourced from the best suppliers and are guaranteed to meet your expectations. We offer a wide range of categories to choose from.</p>
      </div>
      <div className="filter-dropdown" style={{ textAlign: "right" }}>
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
              <h3>{t(product.title)}</h3>
              <p>{t(product.description)}</p>
              <p>Category: {product.category}</p>
            </Link>
          </div>
        ))}
      </div>
      <div className="footer">
        <p>Thank you for visiting our product page. We hope you find what you are looking for!</p>
      </div>
    </div>
  );
};

export default Products;
