import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RegisterAction } from "../Redux/Actions/AuthActions";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.RegisterReducer);

  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const [city, setCity] = useState("");
  const [dob, setdob] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setphone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState(false);
  const [render, setrender] = useState(false);

  useEffect(() => {
    window.scroll(0, 0);
    if (data?.message && render) {
      setrender(false);
      navigate("/login");
    }
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fname && lname && city && dob && email && phone && password) {
      const data = new FormData();
      data.append("firstName", fname);
      data.append("lastName", lname);
      data.append("city", city);
      data.append("dob", dob);
      data.append("email", email);
      data.append("phoneNumber", phone);
      data.append("password", password);
      setrender(true);
      dispatch(RegisterAction(data));
    } else {
      setErrors(true);
    }
  };
  return (
    <div className="w-[100vw] h-[100vh] flex justify-between items-center">
      <div className="signup-container">
        <div style={{ position: "relative" }}>
          <h2 className="text-center  font-semibold text-2xl">Sign Up</h2>
          <button className="btn-34347" onClick={() => navigate(-1)}>
            <i class="fa-solid fa-arrow-left arrowleft333"></i>
          </button>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="flex gap-6">
            <div className="form-group w-[50%]">
              <label htmlFor="email">First Name</label>
              {errors && !fname && <span className="error-msg">*Required</span>}
              <input
                type="text"
                id="email"
                placeholder="Enter first name"
                value={fname}
                onChange={(e) => setfName(e.target.value)}
              />
            </div>
            <div className="form-group w-[50%]">
              <label htmlFor="email">Last Name</label>
              {/* {errors && !name && <span className="error-msg">*Required</span>} */}
              <input
                type="text"
                id="email"
                placeholder="Enter last name"
                value={lname}
                onChange={(e) => setlName(e.target.value)}
              />
            </div>
          </div>

          <div className="flex gap-6">
            <div className="form-group w-[50%]">
              <label htmlFor="city">City</label>
              {errors && !city && <span className="error-msg">*Required</span>}
              <input
                type="text"
                id="city"
                placeholder="Enter city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="form-group w-[50%]">
              <label htmlFor="city">Date of Birth</label>
              {/* {errors && !city && <span className="error-msg">*Required</span>} */}
              <input
                type="text"
                id="city"
                placeholder="Enter date of birth"
                value={dob}
                onChange={(e) => setdob(e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-6">
            <div className="form-group w-[50%]">
              <label htmlFor="email">Email</label>
              {errors && !email && <span className="error-msg">*Required</span>}
              <input
                type="email"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group w-[50%]">
              <label htmlFor="email">Phone Number</label>
              {/* {errors && !email && <span className="error-msg">*Required</span>} */}
              <input
                type="text"
                id="email"
                placeholder="Enter email"
                value={phone}
                onChange={(e) => setphone(e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-6">
            <div className="form-group w-[50%]">
              <label htmlFor="password">Password</label>
              {errors && !password && (
                <span className="error-msg">*Required</span>
              )}
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group w-[50%]">
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
          </div>
          <button type="submit" className="btn-login">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
