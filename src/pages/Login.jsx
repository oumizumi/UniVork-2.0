import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Login.css';
import LoginNavbar from '../layouts/LoginNavbar';

const Login = () => {
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [isButtonDisabled, setIsButtonDisabled] = useState(true); 
  const navigate = useNavigate(); 

  
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

 
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

 
  const checkButtonState = () => {
    if (username.trim() !== '' && password.trim() !== '') {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

 
  React.useEffect(() => {
    checkButtonState();
  }, [username, password]);

  
  const handleLogin = () => {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    console.log('Logged in with:', {
      username: localStorage.getItem('username'),
      password: localStorage.getItem('password'),
    });

 
    navigate('/dashboard'); 
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password'); 
  };

  return (
    <div className="login-container">
      <LoginNavbar />
      <div className="login-box">
        <h1>Log in to a world of opportunities</h1>
        <div className="input-group">
          <label>Email or Username</label>
          <input
            type="text"
            placeholder="Please enter your email or username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
          <span 
            className="forgot-password" 
            onClick={handleForgotPassword}
          >
            Forgot password?
          </span>
        </div>
        <button
          className="login-button"
          disabled={isButtonDisabled}
          onClick={handleLogin}
        >
          Log In
        </button>
        
        <div className="signup-prompt">
          <hr />
          <span>Don’t have an account?</span>
          <hr />
        </div>
        <button
          className="signup-button"
          onClick={() => navigate('/signup')} 
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Login;







