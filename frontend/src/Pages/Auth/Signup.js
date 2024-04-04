import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RegisterAction } from "../../Redux/Actions/AuthActions";
import { toast } from "react-toastify";
import Loader from "../../Extra/Loader";
import {
  firstNameVal,
  lastNameVal,
  emailVal,
  phoneVal,
  passwordVal,
  confirmPasswordVal,
} from "../../Extra/validations";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userData, error } = useSelector((state) => state.RegisterReducer);
  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setphone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [render, setrender] = useState(false);

  useEffect(() => {
    window.scroll(0, 0);
    if (userData && render) {
      setrender(false);
      toast.success(userData?.message, {
        autoClose: 1500,
      });

      setTimeout(() => {
        navigate("/login");
      }, 1500);
      setPassword("");
      setConfirmPassword("");
      setfName("");
      setlName("");
      setEmail("");
      setphone("");
    }
    if (error && render) {
      setrender(false);
      toast.error(error?.response?.data?.message);
    }
  }, [userData, error]);

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.error(firstNameVal(fname));
    toast.error(lastNameVal(lname));
    toast.error(emailVal(email));
    toast.error(phoneVal(phone));
    toast.error(passwordVal(password));
    password && toast.error(confirmPasswordVal(password, confirmpassword));

    const tempErrors = {
      fnameErr: firstNameVal(fname),
      lnameErr: lastNameVal(lname),
      emailErr: emailVal(email),
      phoneErr: phoneVal(phone),
      passErr: passwordVal(password),
      cpassErr: confirmPasswordVal(password, confirmpassword),
    };

    if (Object.values(tempErrors).filter((value) => value).length) {
      return;
    }

    const data = new FormData();
    data.append("firstName", fname);
    data.append("lastName", lname);
    data.append("email", email);
    data.append("phoneNumber", phone);
    data.append("password", password);
    setrender(true);
    dispatch(RegisterAction(data));
  };
  return render ? (
    <Loader />
  ) : (
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
              <label htmlFor="email">Email</label>
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
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group w-[50%]">
              <label htmlFor="cpassword">Confirm Password</label>
              <input
                type="password"
                id="cpassword"
                placeholder="Enter confirm password"
                value={confirmpassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          <button type="submit" className="btn-login mt-6">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
