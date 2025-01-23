// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom"; // Add useNavigate
import products from "./data"; // Import the products array
import "./ProductDetail.css";
import { useTranslation } from "react-i18next";

const ProductDetail = () => {
  const { t } = useTranslation();
  const { productName } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(true); // Add loading state

  const product = products.find(
    (p) => p.name.toLowerCase().replace(/ /g, "-") === productName
  );

  useEffect(() => {
    if (!product) {
      navigate("/products");
    } else {
      setIsLoading(false); // Set loading to false when the product is found
    }
  }, [product, navigate]);

  if (!product) {
    return null;
  }

  if (isLoading) {
    return <div>Loading...</div>; // Display a loading message
  }
  return (
    <div className="product-page">
      <section
        className="hero"
        style={{ backgroundImage: `url(${product.img})` }}
      >
        <div className="title-welcome">{t(product.title)}</div>
        <Link to="/contact" className="cta-btn">
          {t("productmenu.product.contact")}
        </Link>
        <div className="welcome-paragraph">{t(product.tagline)}</div>
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
              <li key={index}>
                <p>{t(item.useCase)}</p>
              </li>
            ))}
          </ul>
        </section>
        <section className="faq">
          <h3>{t("productmenu.product.frequent")}</h3>
          {product.faq.map((item, index) => (
            <div key={index}>
              <strong>
                {t("productmenu.product.question")} {t(item.question)}
              </strong>
              <p>
                {t("productmenu.product.answer")} {t(item.answer)}
              </p>
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