import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import Home from './Home.js';
import Store from './Store.js';
import Header from './Header.js';
import Footer from './Footer.js';
import Checkout from './Checkout.js';
import TNC from './TNC';
import Login from './assets/Login.js';
import Signup from './assets/Signup.js';
import Help from './Help.js';



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
            <Route path='/v2/login' element={<Login/>}/>
            <Route path='/v2/signup' element={<Signup/>}/>
            <Route path='/store' element={<Store/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/help' element={<Help/>}/>
            <Route path='/terms-conditions' element={<TNC/>}/>
            <Route path='/t&c' element={<TNC/>}/>
            <Route path='*' element={
                <div className='page404'>
                  <span class="errHead">Oops! <code>Lost on web? </code></span>
                  <Stack className='errStack' spacing={2}>
                    <Alert className='alert' severity="error">
                      <AlertTitle>Error: 404 : Page not found.</AlertTitle>
                      <p class="errPara">
                        You are seeing this because, this page might be removed or moved to another <a href="/t&c#hyperurl">hyperlink</a>.
                      </p>
                    </Alert>
                    <div class="errFoot">
                      {/* <ArrowBackIcon/> */}
                      <div class="btns">
                        <a href="/sitemap" className='errBtn priorL' >Site Map</a>
                        <a href="/home" className='errBtn priorH' >Return Home</a>
                      </div>
                    </div>
                  </Stack>
                </div>
              }
            />
         </Routes>
      </Router>
      <Footer/>
      
    </div>
  );
}

export default App;
