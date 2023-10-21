import React from 'react'
import './LoggedIn.css';
import { Link } from 'react-router-dom';
import { db,auth } from '../firebase';

const LoggedIn = () => {

  const handleSignIn=()=>{

  }

  return (
    <div id='Logged-in'>
        <div id="main">
            <h1>You must be logged in.</h1>
            <p>
            In order to create a new adoption post, you must be registered and logged in.
            </p>
            <p>
                Please click <Link onClick={handleSignIn}>here</Link> to authenticate with Google.
            </p>
        </div>
    </div>
  )
}

export default LoggedIn