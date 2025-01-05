// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Contact.css";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <div className={`contact ${isRTL ? "rtl" : "ltr"}`}>
      <h2>{t("contact.title")}</h2>
      <p>{t("contact.greeting")}</p>
      <div className="contact-info">
        <h3>{t("contact.info.info")}</h3>
        <a href="mailto:pilotconstract@gmail.com" className="contact-link">{t("contact.info.email1")}</a>
        <a href="nejiabderrahmen@gmail.com" className="contact-link">{t("contact.info.email2")}</a>
        <a href="tel:21 262 771" className="contact-link">{t("contact.info.phone1")}</a>
        <a href="tel:25 778 739" className="contact-link">{t("contact.info.phone2")}</a>
        <p>{t("contact.info.address")}</p>
        <p>{t("contact.info.bussinesshours")}</p>
      </div>
      <div className="social-media">
        <h3>{t("contact.follow")}</h3>
        <a href="https://www.linkedin.com/company/nejigroup" className="social-link">LinkedIn</a>
        <a href="https://twitter.com/nejigroup" className="social-link">Twitter</a>
        <a href="https://instagram.com/nejigroup" className="social-link">Instagram</a>
      </div>
    </div>
  );
};

export default Contact;
