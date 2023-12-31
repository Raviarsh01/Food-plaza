import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { LoginAction } from "../Redux/Actions/AuthActions";

const Login = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.LoginReducer);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(false);
  const [render, setrender] = useState(false);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  useEffect(() => {
    if (userData?.customerData && render) {
      if (userData?.customerData?.Role === 1) {
        localStorage.setItem("Token", userData?.token);
        localStorage.setItem(
          "UserData",
          JSON.stringify(userData?.customerData)
        );
        setrender(false);
        navigate("/");
        return;
      }
      localStorage.setItem("Token", userData?.token);
      localStorage.setItem("UserData", JSON.stringify(userData?.customerData));
      setrender(false);
      navigate("/admin");
    }
  }, [userData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      const data = {
        email,
        password,
      };
      setrender(true);
      dispatch(LoginAction(data));
    } else {
      setErrors(true);
    }
  };
  return (
    <div className="w-[100vw] h-[100vh] flex justify-between items-center">
      <div className="login-container">
        <div style={{ position: "relative" }}>
          <h2 className="text-center font-semibold text-2xl">Login</h2>
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
          <div className="form-group">
            <label htmlFor="password">Password</label>
            {errors && !password && (
              <span className="error-msg">*Required</span>
            )}
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link
            to="/forget-password"
            style={{ color: "#333" }}
            className="forget"
          >
            Forget Password?
          </Link>
          <button type="submit" className="btn-login">
            Login
          </button>
        </form>
        <hr className="line-er45" />
        <p>
          Donot have account?{" "}
          <Link style={{ color: " rgb(225 29 72)" }} to="/signup">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
