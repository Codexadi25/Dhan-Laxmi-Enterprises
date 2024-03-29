import React, { useState, useEffect } from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

import { db } from './firebase.js'
import { collection, getDocs } from 'firebase/firestore';




function Product({ id, title, prodImg, price, mrp, rating, user, address, cono }) {

  let discount = (!mrp)?0:((mrp - price)/mrp)*100;

  const [ qty, setQty ] = useState(1);
  const prodCollectionRef = collection(db, "order")
  
  function decrease() {
    setQty( qty - 1 );
    if (qty <= 0){
      setQty(0)
    }
  }

  function increase() {
    setQty( qty + 1 );
  }

  function addCart() {
    
  }


  return (
    <div className='product'>
      <Link to={`/store/${id}`}>
        <div className='productImg'>
          <img src={prodImg} id='pImg' alt="" />
        </div>
      </Link>
      <div className='productInfo'>
        <p className='productTitle'>{title}</p>
        <div className='productPrice'>
          <div class="price">
            <span className='small plable'>-{discount}%</span>
            <span className='small'>₹</span>{price}
          </div>
          <div class="origPrice">
            <p className='mrp'>
              MRP:{mrp}
            </p>
          </div>
          Qty.<span className='qtyCounter'>
            <btn onClick={()=> increase()}>+</btn><span>{qty}</span><btn onClick={()=> decrease()}>-</btn>
          </span>
        </div>
        <div className='productRating'>
          <span>
          {Array(rating)
               .fill()
               .map((i) => (
               <p>⭐</p>
          ))}
          </span>
          <Link
            to={`https://wa.me/+918081034446?text=Order:%20*${title}*%20%20Price:${price*qty}%20%20%20Quantity:*${qty}Unit*%20ordered%20by%20*${user}*:%20Address:${address}%20%20Contact%20no.:%20${cono}%20%20`} 
            
            target='__blank'
            className='addCartBtn'
            onClick={() => addCart()}
          >
            <AddShoppingCartIcon/>Add to Cart
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Product