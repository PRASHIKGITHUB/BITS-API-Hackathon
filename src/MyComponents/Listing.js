import React from 'react'
import './Listing.css';
import myImage from './dog1.avif';
const Listing = () => {
  return (
    <div id='Listing'>
        <div id="Main">
            <div id="cardM">
              <img src={myImage} alt="" />
              <h2>Name : aldsjfaj</h2>
              <h2>Age:33</h2>
              <h2>Breed:skdjf</h2>
              <h2>Color:398ur</h2>
              <button>Adopt</button>
            </div>
            <div id="cardM"></div>
            <div id="cardM"></div>
            <div id="cardM"></div>
            <div id="cardM"></div>
            <div id="cardM"></div>
            <div id="cardM"></div>
            <div id="cardM"></div>
            <div id="cardM"></div>
            <div id="cardM"></div>
            <div id="cardM"></div>
            <div id="cardM"></div>
        </div>
    </div>
  )
}

export default Listing