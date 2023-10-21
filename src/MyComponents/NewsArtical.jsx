import React from 'react'
import './NewsArtical.css'
const NewsArtical = () => {

  const apiKey='b23749feb4b644538697f0c565fb2650';

  return (
    <div id='Artical'>
        <div id="title-head">
            <h2>News Article</h2>
        </div>
        <div id="cards">
            <div id="artical-card"></div>
            <div id="artical-card"></div>
            <div id="artical-card"></div>
        </div>
    </div>
  )
}

export default NewsArtical