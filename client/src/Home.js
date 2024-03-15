import React from 'react';
import './Home.css';
import banner from './assets/defbanner.svg';
import { ReactTyped } from "react-typed";
import qright from './assets/qright.png';
import Intro from './Intro.js';



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
      </div>
      <div className='quotationBox'>
        <img src={qright} alt='quote' className='qicon up'/><span className='quote'>Cleanliness is a necessity, not a luxury.</span><img src={qright} alt='quote' className='qicon down'/>
        <div className='subscript'>
          <i className='author'>---: Rahul Gupta</i>
          <b className='designation'>&nbsp;CEO, Founder</b>
        </div>
      </div>
      <div className='homeBody'>
        <Intro/>
      </div>
      
    </div>
  )
}

export default Home