import React from 'react'
import './Blogs.css'

import myImage from './logo.png';

const Blogs = () => {
  return (
    <div id='blog'>
        <div id="innerB">
            <div id="Blogs">
                <img src={myImage} alt="" />
                <h2>Animals</h2>
                <p>2022-06-13 | By Ajay</p>
                <a href="#" target='_blanck' >Ajay Bhai Treat dede bohat paise kmaya hai</a>
            </div>
            <div id="Blogs">
                <img src={myImage} alt="" />
            </div>
            <div id="Blogs">
                <img src={myImage} alt="" />
            </div>
            <div id="Blogs">
                <img src={myImage} alt="" />
            </div>
            
        </div>
    </div>
  )
}

export default Blogs