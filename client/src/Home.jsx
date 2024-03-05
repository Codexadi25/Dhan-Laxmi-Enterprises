import React from 'react';
import { Router, Routes, Route } from "react-router-dom";
import Store from './Store.jsx';

function Home() {
  return (
    <div>
      <div className='header'>
         <a href='/'>Home</a>
         <a href='/'>Store</a>
         <a href='/sell'>Join Us</a>
         <a href='/career'>Career</a>
         <a href='#about'>About</a>
      </div>


      <Router>
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/store' element={<Store/>}/>
         </Routes>
      </Router>
    </div>
  )
}

export default Home