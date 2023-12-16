import React from 'react';
import './About.css';
import { useTranslation } from 'react-i18next';

const About = () => {

  const { t } = useTranslation();
  return (
    <div className='mainAboutDiv'>
      <div className='aboutBox'>
        <h2>{t("aboutMe")}</h2>
        <p>{t("underAbout")}  <span>{t("js")}</span> {t("and")} <span>{t("react")}</span></p>

        <h3>{t("whoIAm")}</h3>
        <p>{t("underWhoIam")}</p>
        <div><button>{t("knowMoreBtn")}</button></div>
      </div>
    </div>
  )
}

export default About;