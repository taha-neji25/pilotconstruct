// eslint-disable-next-line no-unused-vars
import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "./data"; // Import the products array
import "./ProductDetail.css";
import { useTranslation } from "react-i18next";

const ProductDetail = () => {
  const { t } = useTranslation();
  const { productName } = useParams(); // Get the product name from the URL
  const product = products.find(
    (p) => p.name.toLowerCase().replace(/ /g, "-") === productName
  ); // Find the product data

  if (!product) {
    return (
      <div>
        <h2>Product Not Found</h2>
        <Link to="/products">Back to Products</Link>
      </div>
    );
  }

  return (
    <div className="product-page">
      <section className="hero" style={{ backgroundImage: `url(${product.img})` }}>
        <h1>{t(product.title)}</h1>
        <Link to="/contact" className="cta-btn">{t("productmenu.product.contact")}</Link>
        <p>{t(product.tagline)}</p>
      </section>
      <div className="details">
      <section className="overview">
        <p>{t(product.overview)}</p>
      </section>
      <section className="features">
        <h3>{t("productmenu.product.feature")}</h3>
        <ul>
          {product.features.map((item, index) => (
            <li key={index}>
              <strong>{t(item.feature)}:</strong> <p>{t(item.benefit)}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="use-cases">
        <h3>{t("productmenu.product.use")}</h3>
        <ul>
          {product.useCases.map((item, index) => (
            <li key={index}><p>{t(item.useCase)}</p></li>
          ))}
        </ul>
      </section>
      <section className="faq">
        <h3>{t("productmenu.product.frequent")}</h3>
        {product.faq.map((item, index) => (
          <div key={index}>
            <strong>{t("productmenu.product.question")} {t(item.question)}</strong>
            <p>{t("productmenu.product.answer")} {t(item.answer)}</p>
          </div>
        ))}
      </section>
      <section className="contact">
        <h3>{t("productmenu.product.info")}</h3>
        <p>{t("productmenu.product.contactus")}</p>
      </section>
      </div>
    </div>
  );
};

export default ProductDetail;
