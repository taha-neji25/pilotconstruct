// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="title-welcome">
        {t("hero.welcome")} <br /> {t("hero.title")}
      </div>
      <div>
        <Link to="/products" className="cta-btn">
          {t("hero.button")}
        </Link>
      </div>
      <div className="welcome-paragraph">{t("hero.description")}</div>
    </section>
  );
};

export default HeroSection;
