import React, { useEffect, useState } from "react";
import { Link, useFetcher, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { LoginAction } from "../Redux/Actions/AuthActions";

const Login = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.LoginReducer);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(false);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  useEffect(() => {
    if (data?.userData?.authToken) {
      if (data?.userData?.user.role === 1) {
        localStorage.setItem("Token", data?.userData?.authToken);
        localStorage.setItem("Role", data?.userData?.user.role);
        navigate("/");
        return;
      }
      localStorage.setItem("Token", data?.userData?.authToken);
      localStorage.setItem("Role", data?.userData?.user.role);
      navigate("/admin");
    }
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      const data = {
        email,
        password,
      };
      dispatch(LoginAction(data));
    } else {
      setErrors(true);
    }
  };
  return (
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
          {errors && !password && <span className="error-msg">*Required</span>}
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
  );
};

export default Login;
