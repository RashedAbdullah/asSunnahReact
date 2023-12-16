import { IoIosSunny } from "react-icons/io";
import './Navbar.css';
import { NavLink } from "react-router-dom";
import { createContext, useState } from "react";
import App from "../../App";
import LightAndDark from './../LightDark/LightAndDark';
import { useTranslation } from 'react-i18next';

  export const GlobalContext = createContext();

function Header({setArClass}) {

  const [isLight, setIsLight] = useState(false);

  const handleDarkMode = ()=>{
    setIsLight(false)
  }

  const handleLightMode = ()=>{
    setIsLight(true)
  }

  const lightAndDarkObj = {
    isLight,
    setIsLight
  }

  const {t, i18n} = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const enFunc = ()=>{
    changeLanguage("en");
    setArClass(false);
  }
  const arFunc = ()=>{
    changeLanguage("ar");
    setArClass(true);
  }
  return (
   <div className="MainNavbarDiv">
      <header>
        <div className="logo">
          <a href="">Logo</a>
        </div>
        <div className="navigations">
          <ul>
            <li><NavLink to="/">{t("home")}</NavLink></li>
            <li><NavLink to="/project">{t("projects")}</NavLink></li>
            <li><NavLink to="/blog">{t("blogs")}</NavLink></li>
            <li><NavLink to="/contact">{t("contact")}</NavLink></li>
            <li><NavLink to="/about">{t("about")}</NavLink></li>
          </ul>
        </div>
        <div className="LangsAndDarkMode">
            <div className="Languages">
              <div className="english"><button onClick={enFunc}>English</button></div>
              <div className="arabic"><button onClick={arFunc}>العربية</button></div>
            </div>
            <div className="DarkMode">
              <p onClick={isLight ? handleDarkMode : handleLightMode}><IoIosSunny /></p>
            </div>
            </div>
      </header>

    <GlobalContext.Provider value={lightAndDarkObj}></GlobalContext.Provider>
      <LightAndDark />
   </div>
  );
}

export default Header;