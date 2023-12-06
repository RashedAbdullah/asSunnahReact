import React from 'react';
import './Footer.css';
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { NavLink } from 'react-router-dom';


const Footer = () => {
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
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/project">Projects</NavLink></li>
                    <li><NavLink to="/blog">Blogs</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
            </div>
            <div className='subFooter'>
                <p>Copyright  &copy;2023 reserved by Rashed Abdullah</p>
            </div>
        </footer>
    </div>
  )
}

export default Footer;