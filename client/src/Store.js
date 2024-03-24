import { React, useState } from 'react';
import './Store.css';
import Product from './Product.js';
import { Link } from 'react-router-dom';
import img1 from './assets/img1.png';
import banner from './assets/defbanner.svg';

function Store() {

  return (
    <div className='store'>
      <div className='storeBanner'>
        <img 
          className='storeImage'
          src={banner}
          alt=''
        />
        <Link to='/'>
        </Link>
      </div>
      <div className='storeRow'>
        <Product 
          title='Fexo Super Power Toilet Cleaner 1Liter X 24 Pcs per pack'
          price='750'
          mrp='800'
          rating={5}
          pimg={img1}
        />

        <Product 
          title='Fexo Super Power Toilet Cleaner 1Liter X 24 Pcs per pack'
          price='750' 
          mrp='800'
          rating={5}
          pimg={img1}
        />
        <Product 
          title='Fexo Super Power Toilet Cleaner 1Liter X 24 Pcs per pack'
          price='750' 
          mrp='800'
          rating={5}
          pimg={img1}
        />
        <Product 
          title='Fexo Super Power Toilet Cleaner 1Liter X 24 Pcs per pack'
          price='750' 
          mrp='800'
          rating={5}
          pimg={img1}
        />
      </div>
    </div>
  )
}

export default Store