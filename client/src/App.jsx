import './App.css';
import { Router, Routes, Route } from "react-router-dom";
import Home from './Home.jsx';
import Err from './Err.jsx';
import Store from './Store.jsx';

function App() {
  return (
    <div className="App">
      <Home/>


      <Router>
         <Routes>
            <Route path='*' element={<Err/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/store' element={<Store/>}/>
         </Routes>
      </Router>
    </div>
  );
}

export default App;
