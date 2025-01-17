// eslint-disable-next-line no-unused-vars
import React from "react";
import { useTranslation } from "react-i18next";
import "./About.css";

const About = () => {  
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <div className={`about ${isRTL ? "rtl" : "ltr"}`}>
      <h2>{t("about.title.title")}</h2>
      <section>
        <h3>{t("about.title.overview")}</h3>
        <p>
          {t("about.overview")}
        </p>
      </section>
      <section>
        <h3>{t("about.title.mission")}</h3>
        <p><strong>{t("about.missions")}</strong> {t("about.mission")}</p>
        <p><strong>{t("about.visions")}</strong>{t("about.vision")}</p>
      </section>
      <section>
        <h3>{t("about.title.history")}</h3>
        <p>{t("about.history")}</p>
      </section>
      <section>
        <h3>{t("about.title.values")}</h3>
        <p>{t("about.values")}</p>
      </section>
      <section>
        <h3>{t("about.title.strengths")}</h3>
        <p>{t("about.strengths")}</p>
      </section>
      <section>
        <h3>{t("about.title.efforts")}</h3>
        <p>{t("about.efforts")}</p>
      </section>
      <section>
        <h3>{t("about.title.action")}</h3>
        <p>{t("about.action")}</p>
      </section>
      <section>
        <h3>{t("about.title.addition")}</h3>
        <p>{t("about.addition")}</p>
      </section>
    </div>
  );
};

export default About;
