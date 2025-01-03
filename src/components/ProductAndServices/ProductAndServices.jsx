// eslint-disable-next-line no-unused-vars
import React from "react";
import "./ProductsAndServices.css";
import { useTranslation } from "react-i18next";

const ProductAndServices = () => {
  const { t } = useTranslation();

  const productAndServices = [
    {
      name: t("prodserv.prodserv1.name"),
      description: t("prodserv.prodserv1.description"),
      category: "A"
    },
    {
      name: t("prodserv.prodserv2.name"),
      description: t("prodserv.prodserv2.description"),
      category: "B"
    },
    {
      name: t("prodserv.prodserv3.name"),
      description: t("prodserv.prodserv3.description"),
      category: "C"
    },
  ];

  return (
    <section className="products-and-services">
      <h2>{t("prodserv.title")}</h2>
      <div className="products-and-services-grid">
        {productAndServices.map((productAndService, index) => (
          <a key={index} href={`/products?category=${productAndService.category}`} className="product-service-card">
            <h4>{productAndService.name}</h4>
            <p>{productAndService.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProductAndServices;
