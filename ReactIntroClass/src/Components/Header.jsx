import React from 'react'
// import React, { Component } from 'react'

// Class component:
class HeaderClass extends Component {
  render() {
    return (
      <div>HeaderClass</div>
    )
  }
};



function Header() {


  return (
    <div>
        <ul className='flex contents'>
            <li>Contact</li>
            <li>About Me</li>
            <li>Projects</li>
            <li>Github</li>
            <li>Linkedin</li>
        </ul>
    </div>
  )
}

export default Header;