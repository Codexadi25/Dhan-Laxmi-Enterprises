import { React, useState }from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase.js';


function Login() {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = e => {
    e.preventDefault();


    auth.signInWithEmailAndPassword(email,password)
      .then((auth) => {
        //redirect
        navigate.push("/")
      }).catch(e => alert(e.message));
  }

  const register = e => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email,password)
      .then((auth) => {
        //redirect
        navigate.push("/")
      }).catch(e => alert(e.message));
  }

  return (
    <div className="login" >
      <Link to='/'>
        <img 
          className='loginLogo'
          src='https://www.dhanlaxmienterprise.in/static/media/DLEP.80a3b913e7067d5802f4.png'
          alt='Dhan Laxmi Enterprise'
        />
      </Link>
      <div className='loginContainer'>
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input value={email} onChange={e => setEmail(e.target.value)} type='email'/>
          <h5>Password</h5>
          <input value={password} onChange={e => setPassword(e.target.value)} type='password'/>
          <button className='loginSigninBtn' onClick={login}>Sign-in</button>
        </form>
        <p>
          By Signing-in you agree to Dhan Laxmi Enterprise's Conditions of Use & Sale. Please see our Privacy Notices, our Cookies and our Ads Notices.
        </p>
        <button className='createAccBtn' onClick={register}>Create your DLEP account</button>
      </div>
    </div>
  )
}

export default Login