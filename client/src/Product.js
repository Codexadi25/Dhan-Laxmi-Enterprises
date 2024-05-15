import React, { useState, useEffect } from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';



function Product({ id, title, desc, prodImg, price, mrp, rating, user, address, cono }) {

  let discount = Math.floor((!mrp)?0:((mrp - price)/mrp)*100);
  
  const [qty, setQty] = useState(0);
  let sp = Math.ceil((!qty)?price:(price*qty));
  
  function decrease() {
    setQty( qty - 1 );
    if (qty <= 0){
      setQty(0)
    }
  }
  function increase() {
    setQty( qty + 1 );
  }


  return (
    <div className='product'>
      <Link to={`/store/${id}`}>
        <div className='productImg'>
          <img src={prodImg} id='pImg' alt="" />
        </div>
      </Link>
      <div className='productInfo'>
        <p className='productTitle'>{title} {desc}</p>
        <div className='productPrice'>
          <div class="price">
            <span className='small plable'>-{discount}%</span>
            <span className='small'>₹</span>{sp}
          </div>
          <div class="origPrice">
            <p className='mrp'>
              MRP:{mrp}
            </p>
          </div>
          <div class="qtyBtn">
            <btn className='btn' onClick={()=>decrease()} >-
            </btn>
            <span className='qty' >{qty}</span>
            <btn className='btn' onClick={()=>increase()} >+
            </btn>
          </div>
        </div>
        <div className='productRating'>
          <span>
          {Array(Number(rating))
               .fill()
               .map((i) => (
               <p>⭐</p>
          ))}
          </span>
          <Link to={`https://wa.me/+917905282369?text=Order:%20*${title}*%20%20Price:${price*qty}%20%20%20Quantity:*${qty}Unit*%20ordered%20by%20*${user}*:%20Address:${address}%20%20Contact%20no.:%20${cono}%20%20`} target='__blank'  className='addCartBtn'>
            <AddShoppingCartIcon/>Add to Cart
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Product