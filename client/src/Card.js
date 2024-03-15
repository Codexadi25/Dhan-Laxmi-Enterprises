import React from 'react';
import './Card.css';


function Card({ title, price, imglink, plink}) {
  return (
    <div className='card'>
      <img src={imglink} alt='product' />
      <b className='prodTitle'>{title}</b>
      <div className='cardFoot'>
        <span>Price ₹{price}</span>
        <a className='buyLink' href={plink}>
          Order Now
        </a>
      </div>
    </div>
  )
}

export default Card