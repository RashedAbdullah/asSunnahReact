import { IoIosSunny } from "react-icons/io";
import './Navbar.css';
import { NavLink } from "react-router-dom";


function Header() {
  return (
   <div className="MainNavbarDiv">
      <header>
        <div className="logo">
          <a href="">Rashed</a>
        </div>
        <div className="navigations">
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/project">Projects</NavLink></li>
            <li><NavLink to="/blog">Blogs</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </ul>
        </div>
        <div className="LangsAndDarkMode">
            <div className="Languages">
              <div className="english"><a href="">English</a></div>
              <div className="arabic"><a href="">العربية</a></div>
            </div>
            <div className="DarkMode">
              <p><a href=""><IoIosSunny /></a></p>
            </div>
            </div>
      </header>
   </div>
  );
}

export default Header;