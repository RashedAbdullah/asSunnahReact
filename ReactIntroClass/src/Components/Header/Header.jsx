import React from 'react'
import './Header.css';

function Header() {


  return (
    <div>
        <header>

    <div class="logo">
        <p>Rashed Abdullah</p>
    </div>

    <input type="checkbox" id='checkbox'/>
    <label for="checkbox" class="icons">
        <i class="fa-solid fa-bars" id="menu-icon"></i>
        <i class="fa-solid fa-xmark" id="close-icon"></i>
    </label>

    <nav class="navbar">
        <ul>
            <li><a href="">Home</a></li>
            <li><a target="_blank" href="https://github.com/RashedAbdullah">Github</a></li>
            <li><a href="">Linkedin</a></li>
            <li><a href="">About us</a></li>
            <li><a href="">Contact</a></li>
        </ul>
    </nav>

    </header>
    </div>
  )
}

export default Header;