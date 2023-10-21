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
      const accessToken='eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJuVnNDbU1EUGxXblFNaVlRNEhMYzc4TTFoVG9IT0VsQXliaXRHSmxEVHRYMkc3MzlOOSIsImp0aSI6ImMxYTYyN2E0YTZiYmY2YzA0MGNkZDY4OWViOTNhNDU5YjZjOGQyNmRmY2FhOWViZTc2Njc4YjEwMWM5OGVlYzk3ZTllOTU3ZGJjMzE3ZmFlIiwiaWF0IjoxNjk3ODExOTA5LCJuYmYiOjE2OTc4MTE5MDksImV4cCI6MTY5NzgxNTUwOSwic3ViIjoiIiwic2NvcGVzIjpbXX0.QGE7pM13woIdm3a-EDeEfrtnpqygvtmmFV26V-2Zve9OekOk_K8R1a2-3E5wUoaxDW0oNYtUE4cj5O-zePVNjsnASAdBAXb7KZMoGUks3XUJ8mEGJ-lfmQs1390G3FtVMK6NiQnlNXZOwd2eJ10x-7I3e5NUTA9qk6NKeRWVuf_fsLwkPCI_ohwDde2hBgLb9jnDHSFdvKTKuIZE0-NVofms1NFTmJDq_QMlM1B7gYtUr_KbcWMkFE0A7V7RfljuikEEKzTmRpc70ptm4RlzGWpKZX2WbOerjT-PxMfUSKe0UJ387xNruABM1qRp8KHgOBEGkqEZ61dHRnxFSDd9dw'
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
