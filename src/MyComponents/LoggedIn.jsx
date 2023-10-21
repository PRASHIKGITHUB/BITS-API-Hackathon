import React from 'react'
import './LoggedIn.css';

const LoggedIn = () => {
  return (
    <div id='Logged-in'>
        <div id="main">
            <h1>You must be logged in.</h1>
            <p>
            In order to create a new adoption post, you must be registered and logged in.
            </p>
            <p>
                Please click <a href="#">here</a> to authenticate.
            </p>
        </div>
    </div>
  )
}

export default LoggedIn