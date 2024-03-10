import React from 'react';
import './Card.css';


function Card({ title, price, imglink, plink}) {
  return (
    <div className='card'>
      <img src={imglink} alt='product' />
      <span className='cardFoot'>
        <h3>Price ₹{price}</h3>
        <a href={plink}>
          <button>Order Now</button>
        </a>
      </span>
    </div>
  )
}

export default Card