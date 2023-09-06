import React, { useState, useEffect } from "react";
import users from '../json Data/users.json';

const Signup = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("data submit");
  };
  return (
    <div className="login-container">
      <h2>Sign Up</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Name</label>
          <input type="text" 
          id="email" 
          placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input type="text" 
          id="city" 
          placeholder="Enter your city" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="cpassword">Password</label>
          <input
            type="password"
            id="cpassword"
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="btn-login">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
