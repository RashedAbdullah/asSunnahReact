import React from 'react'
import { NavLink } from 'react-router-dom';

const Navigations = () => {
  return (
    <div>
        <ul style={{display: "flex", justifyContent: "center", gap: "30px"}}>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/contact'}>Contacts</NavLink></li>
            <li><NavLink to={'/about'}>About</NavLink></li>
            <li><NavLink to={'/info'}>Info</NavLink></li>
            <li><NavLink to={'/posts'}>Posts</NavLink></li>
        </ul>
    </div>
  )
}

export default Navigations;