import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Header.css';
import Home from './Home.js';

import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InfoIcon from '@mui/icons-material/Info';
import { Avatar } from '@mui/material';



function Header() {

   const [user, useUser ] = useState('User');
   const [goto, useGoto ] = useState('Login');

  return (
    <div className='header'>
      <div className='logo'>
         Dhan Laxmi Enterprises
      </div>
      <div className='nav'>
         <a href='/'><HomeIcon className='navIcon'/>
            <lable id='navLable'>Home</lable>
         </a>
         <a href='/'><StoreIcon className='navIcon'/>
            <label id='navLable'>Store</label>
         </a>
         <a href='/'><InfoIcon className='navIcon'/>
            <label id='navLable'>About</label>
         </a>
         <div className='profile'>
            <Avatar/>
            <span className='ac'>
               <a href='/'>
                  <div className='l1'>Hi, {user}</div>
                  <div className='l2'>{goto}</div>
               </a>
            </span>
         </div>
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