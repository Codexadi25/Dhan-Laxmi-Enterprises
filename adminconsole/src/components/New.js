import { React, useState, useEffect } from 'react';
import './New.css';


function New() {


   const [prodID, setProdID] = useState();
   const [title, setTitle] = useState('');
   const [description, setDescription] = useState('');
   const [mrp, setMrp] = useState(1);
   const [price, setPrice] = useState(1);
   const [prodImg, setProdImg] = useState(); 
   const [imageUpload, setImageUpload] = useState(null);
   const [rating, setRating] = useState();
   const [imagelist, setImageList ] = useState([])
   const [star, setStar] = useState('')
   
   
   let discount = Math.floor((!mrp)?0:((mrp - price)/mrp)*100);


   const submitAction = async () => {
      
   }

  return (
    <div className='listingForm'>
      {/* <form method='POST'> */}
         <span className='listDetails section'>
            <label for="title">Title:</label>
            <textarea
               type="text"
               name="title"
               id="title"
               value={title}
               onChange={(event) => {
                  setTitle(event.target.value)
               }}
               placeholder='Title'
               rows="2" cols="64"
               maxLength="150"
               required='true'
            />
            <lable for="docID">ID:</lable>
            <input 
                  type="text"
                  name="docID"
                  placeholder="Identifier"
                  required="true"
                  onChange={(event) => {
                     setProdID(event.target.value)
                  }}
               />
         </span>
         <span class="desc section">
            <aside class="desc">
               <textarea 
                  type="text"
                  name="prodImg"
                  placeholder='Image Link'
                  rows={2}
                  aria-colspan={64}
                  onChange={(event) => {
                     setProdImg(event.target.value)
                  }}
               />
            </aside>
            <textarea 
               type="text"
               name="description"
               id="description"
               value={description}
               onChange={(event) => {
                  setDescription(event.target.value)
               }}
               placeholder='Description'
               rows="5" cols="64"
            />
         </span>
         <span className='listDetails section'>
            <label for="price">SP: ₹</label>
            <input
               type="number"
               name="price"
               id="price"
               value={price}
               onChange={(event) => {
                  setPrice(event.target.value)
               }}
               placeholder='₹ SP'
               required='true'
            />
            <label for="mrp">MRP: ₹</label>
            <input
               type="number"
               name="mrp"
               id="mrp"
               value={mrp}
               onChange={(event) => {
                  setMrp(event.target.value)
               }}
               placeholder='₹ MRP'
               required='true'
            />
            <span id="discount">{discount}% off</span>
            <label for="rating">Rating:</label>
            <input
               type="number"
               name="rating"
               id="rating"
               value={rating}
               onChange={(event) => {
                  setRating(event.target.value)
               }}
               placeholder='Rating'
               required='true'
            />
            {Array(star)
               .fill()
               .map((i) => (
               <p>⭐</p>
            ))}
         </span>
         <button 
            type="submit"
            onClick={submitAction}
         >
            Submit Lististing
         </button>
      {/* </form> */}
    </div>
  )
}

export default New