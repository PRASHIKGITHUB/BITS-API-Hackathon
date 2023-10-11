import React from 'react'
import './FindPet.css';
const FindPet = () => {
  return (
    <div id='find'>
        <div id="findIn">
        <div id="right">
              <h2>Quote of the Day</h2>
              <h1>"The magic you are looking for is in the work you are avoiding"</h1>
            </div>
            <div id="left">
              <h1>Find Your Pet!</h1>
              <div className="findpet">
                <p>Pet</p>
                <select name="" id="">  
                  <option value="">Select Pet</option>
                  <option value="">Cat</option>
                  <option value="">Dog</option>
                </select>

              </div>
              <div className="location">
                <p>City</p>
                <input type="text" />
              </div>

              <div id="buttons">
                <button>Search</button> 
                <button>Reset</button>
                
              </div>

            </div>
           
        </div>
    </div>
  )
}

export default FindPet