import React, { useState } from 'react';
import './Home.css';
import aa from './assets/defbanner.jpg'
import { ReactTyped } from "react-typed";




function Home() {



  const [banner, setBanner] = useState(aa);

  return (
    <div className='home'>
      <img src={banner} className='homeBanner' alt='DhanLaxmiEnterprise-banner'/>
      <div className='bannerText'>
        <h1 className='companyHeading'>Dhan Laxmi Enterprises</h1>
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
          /> Environment
        </p>
      </div>
    </div>
  )
}

export default Home