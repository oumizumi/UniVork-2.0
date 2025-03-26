import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './LandingPage.css';

function LandingPage() {
  const navigate = useNavigate(); 

  return (
    <div className="app">
      <header className="header">
        <div 
          className="logo" 
          onClick={() => window.location.reload()}  
          style={{ cursor: 'pointer' }}  
        >
          UniVork
        </div>
        <nav className="nav">
          <ul>
            <li>For students</li>
            <li>For employers</li>
            <li>Resources</li>
          </ul>
        </nav>
        <div className="auth">
          <span>EN | FR</span>
          <button className="login" onClick={() => navigate('/login')}>
            Log in
          </button>
          <button className="signup" onClick={() => navigate('/signup')}>
            Sign up
          </button>
        </div>
      </header>
      <main className="main">
        <div className="content">
          <div className="headline">
            <span className="line">Experience starts</span>
            <span className="line">with opportunity</span>
          </div>
          <p className="subtext">No experience? No problem! Start your career today!</p>
          <button className="get-started" onClick={() => navigate('/signup')}>
            Get started
          </button>
        </div>
        <div className="image">
          <img src="https://placeholder.pics/svg/748x425" alt="Illustration" />
        </div>
      </main>
    </div>
  );
}

export default LandingPage;










