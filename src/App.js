import React from 'react';
import './App.css'
import Navbar from './MyComponents/Navbar';
import Homepage from './MyComponents/Homepage';
import FindPet from './MyComponents/FindPet';
import Testimonials from './MyComponents/Testimonials';
import NewsArtical from './MyComponents/NewsArtical';
import Footer from './MyComponents/Footer';
import LoggedIn from './MyComponents/LoggedIn';
import Process from './MyComponents/Process';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Listing from './MyComponents/Listing';
function App() {
  return (
    <>
   <Router>
    {/* <div class="App"> */}
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
      </Routes>
      <Routes>
        <Route path="/loggedin" element={<LoggedIn/>}></Route>
      </Routes>
      <Routes>
        <Route path="/home" element={<Homepage/>}></Route>
      </Routes>
      <Routes>
        <Route path="/Process" element={<Process/>}></Route>
      </Routes>

      <Routes>
        <Route path="/listing" element={<Listing/>}></Route>  
      </Routes>
       
       <Footer/>
        

    {/* </div> */}

   </Router>
    </>
  );
}

export default App;
