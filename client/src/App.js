import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Header.css';
import Home from './Home.js';
import Store from './Store.js';
import Header from './Header.js';
import Footer from './Footer.js';


function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/store' element={<Store/>}/>
         </Routes>
      </Router>
      <Footer/>
      
    </div>
  );
}

export default App;
