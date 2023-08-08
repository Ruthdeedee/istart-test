import React, { useState } from 'react';
import './signup.css';
import google from '../../assets/images/google.png'


const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  const handleNameChange =(event)=>{
    setName(event.target.value);
  }

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
                    <label className='label'>Full Name</label>
                <input className='input'
                        type="text"
                        placeholder="John Doe"
                        value={name}
                        onChange={handleNameChange}
                        required
                    />
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
                    <p>must be at least 8 character</p>
                <button type='submit' className='sign-in'>Create account</button>
    
                </form>
            </div>

    
    );
};

export default Signup;