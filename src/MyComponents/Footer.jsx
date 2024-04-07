import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div id='footer'>
        <div id="AboutUs">
            <h1>Pet Adoption</h1>
            <div id="para">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatibus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, consequatur?</p>
            </div>
            
        </div>

        <div id="section">
            <h1>Navigation</h1>
            <div id="as">
                <a href="/">Home</a>
                <a href="#">Adoption listing</a>
                <a href="#">SignUp</a>
            </div>
            
        </div>
        <div id="section">
            <h1>
                Contact Us</h1>
            <div id="as">
                <a href="#">
                <i class="fa-solid fa-location-dot fa-lg"></i>
                Nehru Hall,IIT Kharagpur</a>
                <a href="#">
                <i class="fa-solid fa-envelope fa-lg"></i>
                temp@gmail.com</a>
                <a href="#">
                <i class="fa-solid fa-phone fa-lg"></i>
                +91-7042009790</a>
            </div>
            
        </div>
    </div>
  )
}

export default Footer