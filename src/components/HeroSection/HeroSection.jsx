// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="titl"><h1>{t("hero.welcome")}  <br /> {t("hero.title")}</h1></div>
      <p>{t("hero.description")}</p>
      <Link to="/products" className="cta-btn">{t("hero.button")}</Link>
    </section>
  );
};

export default HeroSection;