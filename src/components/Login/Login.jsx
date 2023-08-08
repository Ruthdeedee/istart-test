import React, { useState } from 'react';
import './login.css';
import google from '../../assets/images/google.png'
import group from '../../assets/images/Group.png'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here...
  };

  return (
    
      <div className="container">
        <button className='logo-container'>
          <img className="logo" src={google} alt='google-logo' />
          <span> Sign In with Google</span></button>
        <form onSubmit={handleSubmit}>
          <label className='label'>Email Address</label>
          <input
            className='input'
            type="email"
            placeholder="Insert your email"
            value={email}
            onChange={handleEmailChange}
          />
          <label className='label'>Password</label>
          <input
            type="password"
            className='input' placeholder="Insert your password"
            value={password}
            onChange={handlePasswordChange}
          />
        
            <div className='check-container'>
            <span><input type="checkbox" /> Keep me logged in</span>
              <a href="#">Forgot password?</a>
            </div>
          
          <button type='submit' className='sign-in'>Sign In</button>
        </form>
      </div>
    
   
   

  );
};

export default Login;