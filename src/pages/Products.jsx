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
      <div className="title"><h1>{t("productmenu.products.title")}</h1></div>
      <div className="description">
        <p>{t("productmenu.products.welcome")}</p>
      </div>
      <div className="information">
        <p>{t("productmenu.products.more")}</p>
        <p>{t("productmenu.products.more2")}</p>
      </div>
      <div className="filter-dropdown" style={{ textAlign: "right" }}>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">{t("productmenu.products.filter.all")}</option>
          <option value="A">{t("productmenu.products.filter.productsA")}</option>
          <option value="B">{t("productmenu.products.filter.productsB")}</option>
          <option value="C">{t("productmenu.products.filter.productsC")}</option>
        </select>
      </div>
      <div className="product-grid">
        {filteredProducts.map((product, index) => (
          <div key={index} className="product-card">
            <Link to={`/products/${product.name.toLowerCase().replace(/ /g, "-")}`}>
              <img src={product.img} alt={product.title} className="product-image" />
              <h3>{t(product.title)}</h3>
              <p>{t(product.description)}</p>
              <p>{t("productmenu.products.category")} {product.category}</p>
            </Link>
          </div>
        ))}
      </div>
      <div className="description">
        <p>{t("productmenu.products.foot")}</p>
      </div>
    </div>
  );
};

export default Products;
