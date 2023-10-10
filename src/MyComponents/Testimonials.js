import React from 'react'
import './Testimonials.css';
import Image from './img.jpg';

const Testimonials = () => {
  return (
    <div id='testi'>
        <div id="innerT">
            <div id="card">
              <img src={Image} alt="" />
              <div id="PetDis">
                <h1>Name : Pairs</h1>
                <br />
                <h2>Age : Puppy</h2>
                <br />
                <h2>Color : Brown</h2>
                <br />
                <h2>Vaccinated : No</h2>
                <br />
                <h2>Breed : Aspin</h2>
                <br />
                <h2>Information : Playful</h2>
                <button>
                  View Post
                </button>
              </div>
            </div>
            <div id="card">Himduyti</div>
            <div id="card">Ajay</div>
            <div id="card">Hello</div>
        </div>
    </div>
  )
}

export default Testimonials
