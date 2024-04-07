import React from 'react'
import './NewsArtical.css'
import { Card } from './Card';
import { useState } from 'react';
import axios from 'axios';



const NewsArtical = () => {
  let box=document.querySelector('#innerT');
  const btnpressprev=()=>{
   let width=box.clientWidth;
   box.scrollLeft=box.scrollLeft+width;
  }
  const btnpressnext=()=>{
    let width=box.clientWidth;
   box.scrollLeft=box.scrollLeft-width;
  }

  const apiKey='b23749feb4b644538697f0c565fb2650';

  return (
    <div id='testi'>
    <button id='leftbtn' onClick={btnpressprev}>  &lt;</button>
      <div id="innerT">
         <div id="card"></div>
         <div id="card"></div>
         <div id="card"></div>
         <div id="card"></div>
         <div id="card"></div>
         
      </div>
      <button id='rightbtn' onClick={btnpressnext} > &gt; </button>
      
  </div>
  )
}

export default NewsArtical