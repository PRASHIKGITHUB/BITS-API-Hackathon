import React from 'react'
import './Navbar.css'
import image from './logo.png';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div id='nav'>
        <div id="nav-left"> <a href="/">
          <img src={image} alt="" />
          </a> </div>
        <div id="nav-right">
            <Link to="/Process">Process</Link>
            <Link to="/listing">Listing</Link>
            <Link to="#">Prashik</Link>
        </div>
    </div>
  )
}

export default Navbar;