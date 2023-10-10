import React from 'react';
import './App.css'
import Navbar from './MyComponents/Navbar';
import Homepage from './MyComponents/Homepage';
import FindPet from './MyComponents/FindPet';
import Testimonials from './MyComponents/Testimonials';
function App() {
  return (
    <div class="App">
      <Navbar/>
      <Homepage/>
      <FindPet/>
      <Testimonials/>
    </div>
  );
}

export default App;
