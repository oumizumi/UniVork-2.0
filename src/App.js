// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AuthPage from './components/AuthPage'; // Import the AuthPage component
import SignUpPage from './components/SignUpPage'; // Import the SignUpPage component
import { Navbar, Nav } from 'react-bootstrap'; // Import Bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const App = () => {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">UniVork</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> {/* Adjusted to use Bootstrap 5 margin utility */}
            <Nav.Link as={Link} to="/">Login</Nav.Link>
            <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/" element={<AuthPage />} /> {/* Ensure AuthPage is the correct component */}
      </Routes>
    </Router>
  );
};

export default App;