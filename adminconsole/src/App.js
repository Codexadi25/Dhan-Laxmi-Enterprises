import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.js';
import Listings from './components/Listings.js';
import New from './components/New.js';

function App() {
  return (
    <div className="App">
      <Header/>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/dashboard" element={<Home/>}/>
            <Route path="/dashboard/listings" element={<Listings/>}/>
            <Route path="/api/v1/listing/new" element={<New/>}/>
          </Routes>
        </Router>
        
      <Footer/>
    </div>
  );
}

export default App;
