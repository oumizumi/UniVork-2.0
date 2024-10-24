// LoginPage.js
import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import './LoginPage.css'
import './AuthPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    // Here you can add your authentication logic (e.g., API call)
  };

  return (
    <Container style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Card style={{ width: "500px"}}>
            <Card.Body>
              <h3 className="text-center">Login</h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="btn-block">
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
    </Container>
  );
};

export default LoginPage;
