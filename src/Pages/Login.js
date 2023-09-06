import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("data submit");
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="btn-login">
          Login
        </button>
        <p className="forget">Forget Password?</p>
        <hr class="line-er45" />
        <p>
          Donot have account?{" "}
          <Link style={{ color: " rgb(225 29 72)"}} to="/signup">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
