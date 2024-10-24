// src/components/AuthPage.js
import React from 'react';
import './AuthPage.css'; // Make sure to import your CSS file

const AuthPage = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        const formData = new FormData(event.target);
        console.log('Form submitted:', Object.fromEntries(formData));
    };

    return (
        <div className="container">
            <div className="card">
                <h3>Login</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <button type="submit" className="btn">Login</button>
                </form>
            </div>
        </div>
    );
};

export default AuthPage;