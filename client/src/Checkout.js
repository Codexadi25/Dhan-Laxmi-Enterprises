import React from 'react';
import './Checkout.css';
// import adsATD from '';
import Subtotal from './Subtotal';


function Checkout() {
   let adsATD = ''
  return (
   <div className='chechout'>
      <div className="checkoutLeft">
         <img className='checkoutAds' src={adsATD} alt="adsBanner"/>
         <div class="">
            <h2 class="checkoutTitle">
               
            </h2>

         </div>
      </div>
      <div class="checkoutRight">
         <h2 class="">
            <Subtotal/>
         </h2>
      </div>
   </div>
  )
}

export default Checkout