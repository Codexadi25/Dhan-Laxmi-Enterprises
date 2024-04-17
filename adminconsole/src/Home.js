import React from 'react';
import './Home.css';
import Skeleton from '@mui/material/Skeleton';


function Home(props) {

   const { loading = false } = props;

  return (
    <div className='home'>
      {
         loading ? (
            <div class="components">
               
            </div>
         ):(
            <Skeleton variant="rectangular" width={210} height={118} />
         )
      }
    </div>
   )
}

export default Home