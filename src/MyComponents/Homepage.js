import React from 'react'
import './Homepage.css'
import myImage from './dog1.avif';

const Homepage = () => {
  return (
    <div id='x'>
      <div id="innerx">

        
          
        <div id="img">
          <div id="Webname">
            <h1>Pet Adoption</h1>
          </div>
          
          <img src={myImage} alt="" />
          
        </div>

        

      </div>

    </div>
  )
}

export default Homepage