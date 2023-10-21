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
      <Navbar/>
      <Routes>
        <Route exact path="/home" element={<Homepage/>}></Route>
        <Route exact path="/Process/:id" element={<Process/>}></Route>
        <Route exact path="/listing" element={<Listing/>}></Route>  
        <Route exact path="/" element={<Homepage/>}></Route>
      </Routes>
      <Footer/>
   </Router>
    </>
  );
}

export default App;
