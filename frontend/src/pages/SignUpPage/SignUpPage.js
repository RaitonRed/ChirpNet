import React from 'react';
import { Link } from 'react-router-dom';
import './SignUpPage.css';

function SignUpPage() {
  return (
    <div className="sign-up-page">
      <h1>Create an Account</h1>
      <form className="signup-form">
        <div className="input-group">
          <label>Name</label>
          <input type="text" placeholder="Enter your name" />
        </div>
        <div className="input-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p>You have Account? <Link to="/">login</Link></p>
    </div>
  );
}

export default SignUpPage;
