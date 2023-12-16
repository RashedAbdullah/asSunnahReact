import React from 'react';
import './Footer.css';
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const Footer = () => {

    const { t } = useTranslation();
    console.log(t)
  return (
    <div className='footerMainDiv'>
        <footer>
            <div className="footerSocialLinks">
                <ul>
                    <li><a target='_blank' href="https://github.com/RashedAbdullah"><FaGithub /></a></li>
                    <li><a target='_blank' href="https://www.linkedin.com/in/rashed4abdullah"><FaLinkedin /></a></li>
                    <li><a target='_blank' href="https://www.facebook.com/Rashed4Abdullah"><FaFacebook /></a></li>
                    <li><a target='_blank' href="https://www.instagram.com/Rashed4Abdullah"><AiFillInstagram /></a></li>
                </ul>
            </div>
            <div className='footerNavLinks'>
                <ul>
                    <li><NavLink to="/">{t("home")}</NavLink></li>
                    <li><NavLink to="/project">{t("projects")}</NavLink></li>
                    <li><NavLink to="/blog">{t("blogs")}</NavLink></li>
                    <li><NavLink to="/contact">{t("contact")}</NavLink></li>
                    <li><NavLink to="/about">{t("about")}</NavLink></li>
                </ul>
            </div>
            <div className='subFooter'>
                <p>{t("subFooter")}</p>
            </div>
        </footer>
    </div>
  )
}

export default Footer;