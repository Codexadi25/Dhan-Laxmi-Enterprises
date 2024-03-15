import React, { useState } from 'react';
import './Header.css';
import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
import InfoIcon from '@mui/icons-material/Info';
import Tooltip from '@mui/material/Tooltip';
import { Avatar } from '@mui/material';



function Header() {

   const [user, useUser ] = useState('User');
   const [goto, useGoto ] = useState('Login');

  return (
    <div className='header'>
      <div className='logo'>
         <a href='/home'>Dhan Laxmi Enterprises</a>
      </div>
      <div className='nav'>
         <a href='/home'><HomeIcon className='navIcon'/>
            <Tooltip id='navLable'>Home</Tooltip>
         </a>
         <a href='/store'><StoreIcon className='navIcon'/>
            <Tooltip id='navLable'>Store</Tooltip>
         </a>
         <a href='#about'><InfoIcon className='navIcon'/>
            <Tooltip id='navLable'>About</Tooltip>
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

    </div>
  )
}

export default Header