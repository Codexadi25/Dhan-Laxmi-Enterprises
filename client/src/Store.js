import React from 'react';
import slides from './assets/carouselData.json';
import Carousel from './Carousel.js';;


function Store() {
  return (
    <div>
      <div className='banner'>
        <Carousel data={slides} />
      </div>
    </div>
  )
}

export default Store