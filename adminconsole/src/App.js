import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.js';
import Listings from './Listings.js';

function App() {
  return (
    <div className="App">
      <Header/>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/listings" element={<Listings/>}/>
          </Routes>
        </Router>
        
      <Footer/>
    </div>
  );
}

export default App;
