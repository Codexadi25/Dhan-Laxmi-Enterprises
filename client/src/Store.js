import React from 'react';
import './Store.css';
import banner from './assets/img4.jpeg';
import Card from './Card';


function Store() {
  return (
    <div className='store'>
      <div className='banner carousel'>
        <img src={banner} alt='banner' className='storeBanner'/>
      </div>
      <div className='storeProds'>
        <Card imglink={''} title={"Fexo Toilet Cleaner"} price={25}/>
      </div> 
    </div>
  )
}

export default Store