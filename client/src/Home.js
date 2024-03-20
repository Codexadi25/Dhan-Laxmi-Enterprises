import React from 'react';
import './Home.css';
import banner from './assets/defbanner.svg';
import { ReactTyped } from "react-typed";
import qright from './assets/qright.png';
import Intro from './Intro.js';
import { Skeleton } from '@mui/material';

import fimg from './assets/C0014.png'



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
          <b className='designation'>Rahul Gupta</b>
          <i className='author'>CEO, Founder</i>
        </div>
      </div>
      <div className='homeBody'>
        <Intro/>
        <div className='leadContainer'>
          <img className='leadImg' src={fimg} alt='Rahul Gupta'/>
          <div className='leadPara'>
            We take our every decisions with the inspiration from our vision that aims to build a healthy, clean & green environment and and enhance people’s lives with our products.
          </div>
          <span className=''>
            <b className='designation'>Rahul Gupta</b>
            <i className='author'> CEO, Founder</i>
          </span>
        </div>
      </div>
      
    </div>
  )
}

export default Home