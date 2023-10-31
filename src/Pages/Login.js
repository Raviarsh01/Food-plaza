import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [EPError, setEPError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(false);
  const [data, setData] = useState({
    name: "",
    city: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    window.scroll(0, 0);
    const userDataJSON = localStorage.getItem("userData");

    if (userDataJSON) {
      const userData = JSON.parse(userDataJSON);
      setData(userData[0]);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      if (email === data.email && password === data.password) {
        localStorage.setItem("login", "true");

        navigate("/");
      } else {
        setEPError("Email and Password are invalid");
      }
    } else {
      setErrors(true);
    }
  };
  return (
    <div className="login-container">
      <h2>Login</h2>
      {/* <div>{EPError && <span className="error-msg">{EPError}</span>}</div> */}

      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          {errors && !email && <span className="error-msg">*Required</span>}
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          {errors && !password && <span className="error-msg">*Required</span>}
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn-login">
          Login
        </button>
      </form>
      <p className="forget">Forget Password?</p>
      <hr className="line-er45" />
      <p>
        Donot have account?{" "}
        <Link style={{ color: " rgb(225 29 72)" }} to="/signup">
          Sign Up
        </Link>
      </p>
      <div>
        <button className="btn-34347" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    </div>
  );
};

export default Login;
