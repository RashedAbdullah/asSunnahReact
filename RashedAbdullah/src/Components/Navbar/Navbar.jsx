import { IoIosSunny } from "react-icons/io";
import './Navbar.css';


function Header() {
  return (
   <div className="MainNavbarDiv">
      <header>
        <div className="logo">
          <a href="">Rashed</a>
        </div>
        <div className="navigations">
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Blogs</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">About</a></li>
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