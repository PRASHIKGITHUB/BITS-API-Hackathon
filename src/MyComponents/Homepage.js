import React from 'react'
import './Homepage.css'
import myImage from './dog1.avif';
import Navbar from './Navbar';
import FindPet from './FindPet';
import Testimonials from './Testimonials';
import NewsArtical from './NewsArtical';
import Footer from './Footer';

const Homepage = () => {
  return (
    <>
    <div id='x'>
      <div id="innerx"> 
        <div id="img">
          <div id="Webname">
            <h1>FurEverHomes</h1>
          </div>
          
          <img src={myImage} alt="" />
          
        </div>
      </div>

    </div>

      <FindPet/>
      <Testimonials/>
      <NewsArtical/>

    </>

  )
}

export default Homepage