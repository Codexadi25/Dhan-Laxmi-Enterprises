import React, { useState } from 'react';
import './Header.css';
import Logo from './assets/DLEP.png'
import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
import Tooltip from '@mui/material/Tooltip';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Avatar } from '@mui/material';



function Header() {

   const [user, useUser ] = useState('User');
   const [goto, useGoto ] = useState('Login');

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
                     <div className='l1'>Hi, {user}</div>
                     <div className='l2'>{goto}</div>
                  </a>
               </span>
            </div>
         </Tooltip>
      </div>

    </div>
  )
}

export default Header