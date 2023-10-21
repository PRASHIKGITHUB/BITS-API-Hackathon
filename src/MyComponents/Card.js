import React from 'react'
import Image from './img.jpg';

export const Card = ({img,name,age,color,breed}) => {
  return (
    <div id="card">
        <img src={img} alt="" />
        <div id="PetDis">
            <h1>Name : {name}</h1>
            <br />
            <h2>Age : {age}</h2>
            <br />
            <h2>Color : {color}</h2>
            {/* <br />
            <h2>Vaccinated : No</h2> */}
            <br />
            <h2>Breed : {breed}</h2>
            <br />
            {/* <h2>Information : Playful</h2> */}
            <button>
                View Post
            </button>
        </div>
    </div>
  )
}
