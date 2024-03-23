import { React, useState } from 'react';
import './Store.css';
import Product from './Product.js';
import { Link } from 'react-router-dom';
import img1 from './assets/img1.png';

function Store() {

  return (
    <div>
      <div className='storeBanner'>
        <Link to='/'>
          <img 
            className='storeImage'
            src=''
            alt=''
          />
        </Link>
      </div>
      <div className='storeRow'>
        <Product title='Fexo Toilet Cleaner 250ml X 24 Pcs Pack' price='750' rating={5} pimg={img1}/>
      </div>
    </div>
  )
}

export default Store