import React from 'react';
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
    </div>
  );
}

export default SignUpPage;
