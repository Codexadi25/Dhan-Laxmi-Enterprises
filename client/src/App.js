import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.js';
import Store from './Store.js';
import Header from './Header.js';
import Footer from './Footer.js';
import Checkout from './Checkout.js';
import TNC from './TNC';



function App() {

  
  // useEffect(() => {
  //   axios.get('http://localhost:8080')
  // }, [])

  return (
    <div className="App">
      <Header/>
      <Router>
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/store' element={<Store/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/terms-conditions' element={<TNC/>}/>
         </Routes>
      </Router>
      <Footer/>
      
    </div>
  );
}

export default App;
