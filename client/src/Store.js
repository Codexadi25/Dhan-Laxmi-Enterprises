import { React, useEffect, useState } from 'react';
import './Store.css';
import Product from './Product.js';
<<<<<<< HEAD
=======
import data from './assets/productData.json';
import { Link } from 'react-router-dom';
>>>>>>> d35240bf0486abc5f18c616085e9c73e351af7d4
import img1 from './assets/img1.png';

import { db } from './firebase.js'
import { collection, getDocs } from 'firebase/firestore';

function Store() {

<<<<<<< HEAD
  const [prod, setProd] = useState();
  const prodCollectionRef = collection(db, "productsDB")

  useEffect(() => {
    const getProd = async () => {
      const data = await getDocs(prodCollectionRef);
      setProd(data?.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }

    getProd();
  }, [])


  return (
    <div className='store'>      
      <div className='storeRow'>
        {prod?.map((item) => {
          return(
            <Product 
              title={item.title}
              price={item.price} 
              mrp={item.mrp}
              rating={item.rating}
              pimg={`${item.pimg+item.pimgtoken}`}
              
            />
          )
        })}
      </div>
      
=======

  

  return (
    <div className='store'>
      <div className='storeBanner'>
        <img 
          className='storeImage'
          src={banner}
          alt=''
        />
        <Link to='/'>
        </Link>
      </div>
>>>>>>> d35240bf0486abc5f18c616085e9c73e351af7d4
      <div className='storeRow'>
        <Product 
          title='Fexo Super Power Toilet Cleaner 1Liter X 24 Pcs per pack'
          price='750' 
          mrp='800'
          rating={5}
          pimg={img1}
        />
        <Product 
          title='Fexo Super Power Toilet Cleaner 1Liter X 24 Pcs per pack'
          price='750' 
          mrp='800'
          rating={5}
          pimg={img1}
        />
        <Product 
          title='Fexo Super Power Toilet Cleaner 1Liter X 24 Pcs per pack'
          price='750' 
          mrp='800'
          rating={5}
          pimg={img1}
        />
      </div>
    </div>
  )
}

export default Store