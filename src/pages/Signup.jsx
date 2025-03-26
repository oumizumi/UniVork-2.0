import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import SignupNavbar from '../layouts/SignupNavbar';

const Signup = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();


  const handleSelectOption = (option) => {
    if (selectedOption === option) {
      setSelectedOption(null);
    } else {
      setSelectedOption(option);
    }
  };

  const handleCreateAccount = () => {
    if (selectedOption === 'student') {
      navigate('/signup/form');
    } else if (selectedOption === 'company') {
      navigate('/signup/employer');
    }
  };

  return (
    <div className="signup-container">
      <SignupNavbar />
      <div className="signup-box">
        <h1>Join as a student or a company</h1>
        <div className="options">
          <div
            className={`option ${selectedOption === 'student' ? 'selected' : ''}`}
            onClick={() => handleSelectOption('student')}
          >
            <img src="https://placeholder.pics/svg/37.5x41.67" alt="Student" />
            <p>I am a student, looking for work</p>
          </div>
          <div
            className={`option ${selectedOption === 'company' ? 'selected' : ''}`}
            onClick={() => handleSelectOption('company')}
          >
            <img src="https://placeholder.pics/svg/37.5x41.67" alt="Company" />
            <p>I am a company, hiring for a job</p>
          </div>
        </div>
        <button
          className="create-account"
          onClick={handleCreateAccount}
          disabled={!selectedOption}
        >
          Create Account
        </button>
        <p className="login-prompt">
          Already have a UniVork account?{' '}
          <span
            onClick={() => navigate('/login')}
            className="login-link"
          >
            Log In
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;









