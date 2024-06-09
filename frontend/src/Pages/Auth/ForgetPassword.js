import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../../Components/Loader";
import { FaArrowLeft } from "react-icons/fa";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Email sent", {
      autoClose: 2000,
    });
  };
  return (
    <div className="w-[100vw] h-[100vh] flex justify-between items-center">
      <div className="login-container">
        <div style={{ position: "relative" }}>
          <h2 className="text-center font-semibold text-2xl">
            Forget Password
          </h2>
          <button className="btn-34347" onClick={() => navigate(-1)}>
            <FaArrowLeft className="arrowleft333" />
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
          <button type="submit" className="btn-login mt-6">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
