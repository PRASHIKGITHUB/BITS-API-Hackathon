import React from 'react';
import './App.css'

import Navbar from './MyComponents/Navbar';
import Homepage from './MyComponents/Homepage';
import FindPet from './MyComponents/FindPet';
import Testimonials from './MyComponents/Testimonials';
import Footer from './MyComponents/Footer';
import LoggedIn from './MyComponents/LoggedIn';
import Process from './MyComponents/Process';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Listing from './MyComponents/Listing';
import Blogs from './MyComponents/Blogs';
import { ActionCodeURL } from 'firebase/auth';
import AnotherForm from './MyComponents/AnotherForm';
function App() {
  return (
    <>
   <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/Process/:id" element={<Process/>}></Route>
        <Route exact path="/listing" element={<Listing/>}></Route>  
        <Route exact path="/" element={<Homepage/>}></Route>
        <Route exact path="/blogs" element={<Blogs/>}></Route>
        <Route exact path="/Addpet" element={<AnotherForm/>}></Route>
      </Routes>
      <Footer/>
   </Router>
    </>
  );
}

export default App;
