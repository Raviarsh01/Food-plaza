import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState(false);

  const handleSubmit = (e) => {
    console.log("submit mail");
  };
  return (
    <div className="login-container">
      <div style={{ position: "relative" }}>
        <h2>Forget Password</h2>
        <button className="btn-34347" onClick={() => navigate(-1)}>
          <i class="fa-solid fa-arrow-left arrowleft333"></i>
        </button>
      </div>

      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          {errors && !email && <span className="error-msg">*Required</span>}
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="btn-login">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ForgetPassword;
