import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import pimg from './assets/img1.png';



function Product({ id, title, pimg, price, mrp, rating }) {
  let discount = (!mrp)?0:((mrp - price)/mrp)*100;
  return (
    <div className='product'>
      <Link to={`/store/${id}`}>
        <div className='productImg'>
          <img src={pimg} id='pImg' alt="" />
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
        </div>
        <div className='productRating'>
          <span>
          {Array(rating)
               .fill()
               .map((i) => (
               <p>⭐</p>
          ))}
          </span>
          <Link to="" className='addCartBtn'><AddShoppingCartIcon/>Add to Cart</Link>
        </div>
      </div>
    </div>
  )
}

export default Product