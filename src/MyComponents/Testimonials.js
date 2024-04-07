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
      const accessToken="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJnQUJpWE9BWEdzUVVQVlFRYVhJSUJlMkdsNnFvYzlRbXJUbWZET3poNHV4UVJKYU1UTyIsImp0aSI6IjY3NjQwODEyMGRmZTYxMjVjYzM0YjFmODFlZDMyNTg2YTQ4MjAyN2Q5MjA2ZTdjMzg1MDg0MDAwNjBhODY2YzNiOTYxYWMxYTZhYWJmMDZmIiwiaWF0IjoxNjk3ODkwMjA1LCJuYmYiOjE2OTc4OTAyMDUsImV4cCI6MTY5Nzg5MzgwNSwic3ViIjoiIiwic2NvcGVzIjpbXX0.N8Pa0EryuNnWWGFNaXKo-f_6cwFh9ucjou_Jj8IGyjvvN0OKozRQTUONto5LFRsusxun5zW2Mg8FHH3qXRVE4ID75apeOaHLBPTYpXinyG_ELSQelR0bm5duzmt3jMw4m0Fcp3vFBoiLitsx5SNKerBeAki9K0MaOLLUQ__bPHWMF10bYcB2iDqOGqO837sctIgKykLeXjA1MDIVevhzr60fzOwmyvkgWjl1YVzfeAzV2ls1vy3UpINMeN8mTmbPuPJA6NYG2G40IRC1KvpPlrkz4s3EDPFSa1lk25kgjqanY3hiVC0ppVNbMsVvuKQFyCBw_-_VBvLUJEQSDxCIbg";
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
