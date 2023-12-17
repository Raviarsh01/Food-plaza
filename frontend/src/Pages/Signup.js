import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RegisterAction } from "../Redux/Actions/AuthActions";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(false);
  const [confirmpassword, setConfirmPassword] = useState("");
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && city && email && password && confirmpassword) {
      if (password === confirmpassword) {
        let data = {
          name,
          city,
          email,
          password,
        };
        dispatch(RegisterAction(data));
        navigate("/login");
      } else {
        setConfirmPassword("Password not match");
      }
    } else {
      setErrors(true);
    }
  };
  return (
    <div className="login-container">
      <div style={{ position: "relative" }}>
        <h2>Sign Up</h2>
        <button className="btn-34347" onClick={() => navigate(-1)}>
          <i class="fa-solid fa-arrow-left arrowleft333"></i>
        </button>
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Name</label>
          {errors && !name && <span className="error-msg">*Required</span>}
          <input
            type="text"
            id="email"
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          {errors && !city && <span className="error-msg">*Required</span>}
          <input
            type="text"
            id="city"
            placeholder="Enter city"
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          {errors && !email && <span className="error-msg">*Required</span>}
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          {errors && !password && <span className="error-msg">*Required</span>}
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cpassword">Confirm Password</label>
          {errors && !confirmpassword && (
            <span className="error-msg">*Required</span>
          )}
          <input
            type="password"
            id="cpassword"
            placeholder="Enter confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
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
