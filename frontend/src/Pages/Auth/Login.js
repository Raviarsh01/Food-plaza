import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { LoginAction } from "../../Redux/Actions/AuthActions";
import { emailVal, passwordVal } from "../../Extra/validations";
import { toast } from "react-toastify";
import Loader from "../../Extra/Loader";

const Login = () => {
  const dispatch = useDispatch();
  const { userData, error } = useSelector((state) => state.LoginReducer);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
        toast.success(userData?.message, {
          autoClose: 2000,
        });
        setEmail("");
        setPassword("");
        setTimeout(() => {
          navigate("/");
        }, 1500);
        return;
      }

      localStorage.setItem("Token", userData?.token);
      localStorage.setItem("UserData", JSON.stringify(userData?.customerData));
      setrender(false);
      toast.success(userData?.message, {
        autoClose: 1500,
      });
      setEmail("");
      setPassword("");
      setTimeout(() => {
        navigate("/admin");
      }, 1500);
    }

    if (error && render) {
      setrender(false);
      toast.error(error?.response?.data?.message);
    }
  }, [userData, error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.error(emailVal(email));
    toast.error(passwordVal(password));

    const tempErrors = {
      emailErr: emailVal(email),
      passErr: passwordVal(password),
    };

    if (Object.values(tempErrors).filter((value) => value).length) {
      return;
    }

    const data = new FormData();
    data.append("email", email);
    data.append("password", password);
    setrender(true);
    console.log("dataa333", data);
    dispatch(LoginAction(data));
  };
  return render ? (
    <Loader />
  ) : (
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
