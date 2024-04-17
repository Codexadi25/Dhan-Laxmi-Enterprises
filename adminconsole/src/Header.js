import React, { useState, useEffect } from 'react';
import './Header.css';
import AccountMenu from './assets/authentication';

import { Tooltip } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ViewListIcon from '@mui/icons-material/ViewList';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import SearchIcon from '@mui/icons-material/Search';


function Header() {

   const [query, setQ] = useState()

   async function searchFnxn(e, query){
      e.preventDefault();
      const results = await fetch('/api/search?q='+query)

      return results.json();
   }

   useEffect (async () => {
      const results = await searchFnxn(query)
   }, []);
   

  return (
    <div className='header'>
      <nav class="navBar">
         <span class="navLeft">
            <Tooltip title="Dashboard">
               <a className='navElement' href="/"><DashboardIcon/></a>
            </Tooltip>
            <Tooltip title="Listings">
               <a className='navElement' href="/"><ViewListIcon/></a>
            </Tooltip>
         </span>
         <span class="navRight">
            <span class="minHide">
               <span class="searchBar">
                  <input
                     type='text'
                     value={query}
                     placeholder='Invoice ID, Order ID, etc.'/>
                  <SearchIcon onClick={ () => searchFnxn() } />
               </span>
               <Tooltip title="Invoices">
                  <a className='navElement' href="/invoices"><ReceiptLongIcon/></a>
               </Tooltip>
            </span>
            <AccountMenu/>
         </span>
      </nav>
    </div>
  )
}

export default Header