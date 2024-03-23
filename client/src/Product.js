import React from 'react';
import './Product.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import pimg from './assets/img1.png';



function Product({ id, title, pimg, price, rating }) {
  return (
    <div className='product'>
      <div className='productInfo'>
         <p>{title}</p>
         <p className='productPrice'>
            <small>₹</small>
            <strong> {price}</strong>
         </p>
         <div className='productRating'>
            {Array(rating)
               .fill()
               .map((i) => (
               <p>⭐</p>
               ))}
         </div>
      </div>
      <img src={pimg} alt="" />
      <button><AddShoppingCartIcon/>Add to Cart</button>
    </div>
  )
}

export default Product