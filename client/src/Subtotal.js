import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';

function Subtotal(basket, value) {

   const getBasketTotal = () => {
      if (!basket){
         basket.length = 0;
      }
   }

  return (
    <div className='subtotal'>
      <CurrencyFormat
         renderText={(value) => (
            <>
               <p>
                  Subtotal ({basket.length} items):
                  <strong>{`${value}`}</strong>
               </p>
               <small className='subtotalGift>'>
                  <input type='checkbox'/> This Order Contains a Gift Cupon.
               </small>
            </>
         )}
         decimalScale={2}
         value={getBasketTotal(basket)}
         displayType={"text"}
         thousandSeparator={true}
         prefix={"₹"}
      />
      <button>Order Now</button>
    </div>
  )
}

export default Subtotal