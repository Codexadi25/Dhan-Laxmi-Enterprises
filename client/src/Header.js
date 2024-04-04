import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Header.css';
import Logo from './assets/DLEP.png'
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
import Tooltip from '@mui/material/Tooltip';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Avatar } from '@mui/material';
// import Listing from './Listing.js';
// import Login from './Login.js';
// import Signup from './Signup.js';

//firebase DB 
import { db } from './firebase.js'
import { collection, getDocs } from 'firebase/firestore';


function Header( cxname, cximg ) {

   const [cxuser, setCxuser ] = useState('User');
   const [goto, useGoto ] = useState('Login');

   useEffect(() => {
      const getUser = async () => {
      const userData = await getDocs(collection(db, "usersDB"))
      }
   })

  return (
    <div className='header'>
      <div className='logo'>
         <a href='/home'><img src={Logo} alt='Logo'/></a>
      </div>
      <div className='nav'>
         <Tooltip title='Home'>
            <a href='/home'>
               <HomeIcon/>
            </a>
         </Tooltip>
         <Tooltip title='Store'>
            <a href='/store'>
               <StoreIcon/>
            </a>
         </Tooltip>
         
         <Tooltip title='Cart'>
            <a href='/checkout'>
               <ShoppingCartIcon/>
            </a>
         </Tooltip>
         <Tooltip title='Account' >
            <div className='profile'>
               <Avatar/>
               <span className='ac'>
                  <a href='/'>
                     <div className='l1'>Hi, {cxuser}</div>
                     <div className='l2'>{goto}</div>
                  </a>
               </span>
            </div>
         </Tooltip>
      </div>

      {/* <Router>
         <Routes>
            <Route path='/user/external/rahul' element={<Listing/>}/>
            <Route path='/user/internal/admin' element={<Login/>}/>
            <Route path={`/login/`+ cxuser} element={<Signup/>}/>
         </Routes>
      </Router> */}

    </div>
  )
}



export default Header