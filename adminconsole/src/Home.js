import { React, useState, useEffect } from 'react';
import './Home.css';

function Home() { const [today, setToday ] = useState(new Date())

   useEffect(() => {
      const interval = setInterval(() => {
         setToday(new Date());
      }, 1000);

      return () => clearInterval(interval);
   }, []);

  return (
    <div className='home'>
      <div class="headStrip">
         <span class="headStripLeft">
            <h3>Dashboard</h3>
            <p></p>
         </span>

      </div>
      <hr/>
      <div class="statusGrid">
         <div class="statusBlock">
            <h5>Current Stock</h5>
            <p>1000</p>
         </div>
         <div class="statusBlock">
            <h5>Net Sale</h5>
            <p>534</p>
         </div>
         <div class="statusBlock">
            <h5>This Month</h5>
            <p>341</p>
         </div>
      </div>
    </div>
   )
}

export default Home