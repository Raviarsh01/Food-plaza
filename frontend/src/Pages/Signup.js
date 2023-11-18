import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
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

        const userData = [];
        userData.push({
          name: name,
          city: city,
          email: email,
          password: password,
        });

        const userDataJSON = JSON.stringify(userData);

        localStorage.setItem("userData", userDataJSON);

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
      <h2>Sign Up</h2>
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
          {errors && !confirmpassword &&
            <span className="error-msg">*Required</span>}
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
      <hr className="line-er45" />
      <div>
        <button className="btn-34347" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    </div>
  );
};

export default Signup;
