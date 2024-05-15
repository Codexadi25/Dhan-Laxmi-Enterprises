import { React, useState, useEffect } from 'react';
import './Listings.css';

import AddBoxIcon from '@mui/icons-material/AddBox';


function Listings() {

  

  const [prod, setProd] = useState();


  return (
    <div className='listings'>
      <a className='newbtn' href="/api/v1/listing/new"><AddBoxIcon/>Create New Listing</a>
      <div class="listed">
        <div class="element listHead">
          <span class="elementLeft">
            <span class="title">Title</span>
            <span class="discount">Discount</span>
            <span class="sp">Selling Price</span>
            <span class="rating">Rating</span>
            <span class="mrp">MRP</span>
          </span>
          <span class="elementRight">
            <span>ID</span>
            <a className='newbtn' href="/api/v1/listing/new">Add New Listing</a>
          </span>
        </div>
        {prod?.map((item) => {
            return(
              <div class="element">
                <div class="elementLeft">
                  <span class="title"><a className='prodId' href={`listings/${item.id}`}>{item.title}</a></span>
                  <span class="discount">-{
                  Math.floor(((item.mrp - item.price)/item.mrp)*100)}%</span>
                  <span class="sp">₹{item.price}</span>
                  <span class="rating">{item.rating}</span>
                  <span class="mrp">₹{item.mrp}</span>
                </div>
                <div class="elementRight">
                  <a className='prodId' href={`listings/${item.id}`}>{item.id}</a>
                  <button>Delete</button>
                </div>
              </div>           
            )
        })}
      </div>
    </div>
  )
}

export default Listings