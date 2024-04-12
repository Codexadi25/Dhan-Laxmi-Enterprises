import { React, useEffect, useState } from 'react';
import './Store.css';
import Product from './Product.js';

import { db } from './firebase.js'
import { collection, getDocs } from 'firebase/firestore';

function Store() {

  const [prod, setProd] = useState();
  const prodCollectionRef = collection(db, "productsDB")

  useEffect(() => {
    const getProd = async () => {
      const data = await getDocs(prodCollectionRef);
      setProd(data?.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }

    getProd();
  }, [prodCollectionRef])


  return (
    <div className='store'>      
      <div className='storeRow'>
        {prod?.map((item) => {
          return(
            <Product 
              title={item.title}
              desc={item.description}
              price={item.price} 
              mrp={item.mrp}
              rating={item.rating}
              prodImg={item.prodImg}
              
            />
          )
        })}
      </div>
      
    </div>
  )
}

export default Store