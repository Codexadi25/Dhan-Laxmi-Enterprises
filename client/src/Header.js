import React from 'react';
import { Router, Routes, Route } from 'react-router-dom';
import Home from './Home.js';

function Header() {
  return (
    <div>
      <div className='nav'>
         <a href='/'>Home</a>
         <a href='/'>Store</a>
         <a href='/'>Account</a>
         <a href='/'>About</a>
      </div>


      <Router>
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            {/* <Route path='/store' element={<Store/>}/> */}
         </Routes>
      </Router>
    </div>
  )
}

export default Header