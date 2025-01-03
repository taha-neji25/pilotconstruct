// eslint-disable-next-line no-unused-vars
import React from "react";
import { useTranslation } from "react-i18next";
import "./About.css";

const About = () => {  
  const { t} = useTranslation();

  return (
    <div className="about">
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
        <p><strong>{t("about.visions")}</strong>{t("about.visions")}</p>
      </section>
      <section>
        <h3>{t("about.title.history")}</h3>
        <p>{t("about.history")}</p>
      </section>
      <section>
        <h3>{t("about.title.intro")}</h3>
        <div className="team-member">
          <img src="[path_to_image]" alt="Team Member Name" />
          <p><strong>{t("about.name")}</strong>{t("about.thename1")}</p>
          <p><strong>{t("about.position")}</strong>{t("about.theposition1")}</p>
          <p>{t("about.details1")}</p>
        </div>
        <div className="team-member">
          <img src="[path_to_image]" alt="Team Member Name" />
          <p><strong>{t("about.name")}</strong>{t("about.thename2")}</p>
          <p><strong>{t("about.position")}</strong>{t("about.theposition2")}</p>
          <p>{t("about.details2")}</p>
        </div>
        {/* Add more team members as needed */}
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
