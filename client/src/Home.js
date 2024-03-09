import React from 'react';
import './Home.css';
import banner from './assets/defbanner.jpg';
import { ReactTyped } from "react-typed";
import qright from './assets/qright.png'


function Home() {

  return (
    <div className='home'>
      <img src={banner} className='homeBanner' alt='DhanLaxmiEnterprise-banner'/>
      <div className='bannerText'>
        <h1 className='companyHeading'>Dhan Laxmi Enterprise</h1>
        <p className='tagline'>
          <span className='p1'>
            Visioning for a&nbsp;
          </span>
          <ReactTyped className='typing'
            strings={[
              "Healthy",
              "Sustainable",
              "Clean",
              "Green",
            ]}
            typeSpeed={40}
            backSpeed={30}
            loop
          />&nbsp;Environment
        </p>
        <div className='quotationBox'>
          <img src={qright} alt='quote' className='qicon'/><span className='quote'>Cleanliness is a necessity, not a luxury.</span>
          <div className='subscript'>
            <i className='author'>---: Rahul Gupta</i>
            <b className='designation'>&nbsp;CEO, Founder</b>
          </div>
        </div>
      </div>
      <div className='homeBody'>
        <div className=''>
          <img src={qright} alt='quote' className='qicon'/>
        </div>
      </div>
      <div className='prods'>
        <div className='card'>
          <img src='' alt='Prod1'/>
          <a href='#'>
            Buy Now
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home