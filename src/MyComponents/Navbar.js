import React from 'react'
import './Navbar.css'
import image from './logo.png';
const Navbar = () => {
  return (
    <div id='nav'>
        <div id="nav-left"> <a href="/">
          <img src={image} alt="" />
          </a> </div>
        <div id="nav-right">
            <a href="/loggedin">loggedIn</a>
            <a href="/Process">Process</a>
            <a href="/listing">Listing</a>
            <a href="#">Prashik</a>
        </div>
    </div>
  )
}

export default Navbar;