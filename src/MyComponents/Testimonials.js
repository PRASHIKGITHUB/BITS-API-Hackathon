import React, { useEffect } from 'react'
import './Testimonials.css';
import Image from './img.jpg';
import { Card } from './Card';
import { useState } from 'react';
import axios from 'axios';


const Testimonials = () => {
  let box=document.querySelector('#innerT');
  const btnpressprev=()=>{
   let width=box.clientWidth;
   box.scrollLeft=box.scrollLeft+width;
  }
  const btnpressnext=()=>{
    let width=box.clientWidth;
   box.scrollLeft=box.scrollLeft-width;
  }
  

  const [pets,setPets]=useState([]);

  useEffect(()=>{
    async function getData(){
      const accessToken="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJnQUJpWE9BWEdzUVVQVlFRYVhJSUJlMkdsNnFvYzlRbXJUbWZET3poNHV4UVJKYU1UTyIsImp0aSI6IjZhMGY1ZTIxODdiNzExODRlOTcyNTJiZDMyNzU3NTM5N2YxZGM0ZjkyOTA3YTA3MDdkZjhhMDFhNjhlYWIxZThlMWZiZmNjZGIxNzkwMzQ1IiwiaWF0IjoxNjk3ODg1OTg1LCJuYmYiOjE2OTc4ODU5ODUsImV4cCI6MTY5Nzg4OTU4NSwic3ViIjoiIiwic2NvcGVzIjpbXX0.ruAJ3cGNhH386EWAnGqkh2tnONVZAWrVW7Ueu1GsaJdxTf5CvrByBYtAUOWRZy6R64TXljl3bhQsfzm8_oQ1NnQuZ8O-D7noVxAkc5fDwH2YTOEucPHVyx70wk39RmsEuw26j0nF1RGGfneVumnfc7G-DEgMnUUkVqlOT1WtI9uqxYRM1hh1lqhUhNojYi9NgZOgVzbzGx6JBwnlEdqfeT3rRCupsGmFzqlQGuVLisjnCiohelwadlNxMJSuFMXFfq8kWoA_HDQ1kB-SO8Yfc7KwwKIRyrazP-96UUStiT8WFleqssSgcVo3k0CDbfxC9FY239FGMZJwTk9Pcj4c5A";
      const instance=axios.create();
      const url='https://api.petfinder.com/v2/animals?type=dog';
      try{
        const response=await instance.get(url,{
          headers:{
            'Authorization':`Bearer ${accessToken}`
          }
        })
        setPets(response.data.animals);
        console.log(pets);
      }
      catch(error){
        console.log(error);
      }
    }

    getData();
  },[])

  return (
    
    <div id='testi'>
      <button id='leftbtn' onClick={btnpressprev}>  &lt;</button>
        <div id="innerT">
            {pets?.map(pet=>(
              <Card
                id={pet.id}
                img={pet.photos[0]?pet.photos[0].small:Image}
                name={pet.name}
                age={pet.age}
                color={pet.colors.primary}
                breed={pet.breeds.primary}
              />
            ))}
        </div>
        <button id='rightbtn' onClick={btnpressnext} > &gt; </button>
        
    </div>

    
  
  )
}

export default Testimonials
