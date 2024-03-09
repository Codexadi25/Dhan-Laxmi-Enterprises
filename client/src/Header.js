import React, { useState } from 'react';

import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
import InfoIcon from '@mui/icons-material/Info';
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
            <lable id='navLable'>Home</lable>
         </a>
         <a href='/store'><StoreIcon className='navIcon'/>
            <label id='navLable'>Store</label>
         </a>
         <a href='#about'><InfoIcon className='navIcon'/>
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

    </div>
  )
}

export default Header