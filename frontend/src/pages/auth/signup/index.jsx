import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../../../components/loader";
import {
  firstNameVal,
  lastNameVal,
  emailVal,
  phoneVal,
  passwordVal,
  confirmPasswordVal,
} from "../../../utils/validations";
import { paths } from "../../../utils/paths";
import { FaArrowLeft } from "react-icons/fa";
import { useUserSignupMutation } from "../../../redux/redux-toolkit-query/auth";

const Signup = () => {
  const navigate = useNavigate();

  const [userSignup, { data, error, isLoading }] = useUserSignupMutation();

  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setphone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  useEffect(() => {
    if (data) {
      toast.success(data?.message);
      setPassword("");
      setConfirmPassword("");
      setfName("");
      setlName("");
      setEmail("");
      setphone("");
      navigate(`${paths.login}`);
    }
    if (error) {
      toast.error(error?.data?.message);
    }
  }, [data, error, navigate]);

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
    const data = {
      firstName: fname,
      lastName: lname,
      email,
      phoneNumber: phone,
      password,
    };
    userSignup(data);
  };
  return isLoading ? (
    <Loader />
  ) : (
    <div className="w-full my-8 h-auto md:h-screen flex justify-between items-center">
      <div className="w-[400px] md:w-[860px] mx-4 md:mx-auto shadow rounded-lg p-[50px]">
        <div className="relative">
          <h2 className="text-center text-secondary font-semibold text-4xl">
            Sign Up
          </h2>
          <button onClick={() => navigate(`${paths.login}`)}>
            <FaArrowLeft className="absolute top-[10px] cursor-pointer text-secondary" />
          </button>
        </div>
        <form className="flex flex-col text-secondary" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-3 md:gap-6">
            <div className="mb-[1rem] w-full md:w-[50%]">
              <label className="font-semibold" htmlFor="firstname">
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                className="w-full p-[10px] rounded-lg  border-[#DBDFD0] border-[1px] text-secondary focus:outline-primary mt-[6px]"
                placeholder="Enter first name"
                value={fname}
                onChange={(e) => setfName(e.target.value)}
              />
            </div>
            <div className="mb-[1rem] w-full md:w-[50%]">
              <label className="font-semibold" htmlFor="lastname">
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                className="w-full p-[10px] rounded-lg  border-[#DBDFD0] border-[1px] text-secondary focus:outline-primary mt-[6px]"
                placeholder="Enter last name"
                value={lname}
                onChange={(e) => setlName(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-3 md:gap-6">
            <div className="mb-[1rem] w-full md:w-[50%]">
              <label className="font-semibold" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-[10px] rounded-lg  border-[#DBDFD0] border-[1px] text-secondary focus:outline-primary mt-[6px]"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-[1rem] w-full md:w-[50%]">
              <label className="font-semibold" htmlFor="phonenumber">
                Phone Number
              </label>
              <input
                type="text"
                id="phonenumber"
                className="w-full p-[10px] rounded-lg  border-[#DBDFD0] border-[1px] text-secondary focus:outline-primary mt-[6px]"
                placeholder="Enter phone number"
                value={phone}
                onChange={(e) => setphone(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-3 md:gap-6">
            <div className="mb-[1rem] w-full md:w-[50%]">
              <label className="font-semibold" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-[10px] rounded-lg  border-[#DBDFD0] border-[1px] text-secondary focus:outline-primary mt-[6px]"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-[1rem] w-full md:w-[50%]">
              <label className="font-semibold" htmlFor="cpassword">
                Confirm Password
              </label>
              <input
                type="password"
                id="cpassword"
                className="w-full p-[10px] rounded-lg  border-[#DBDFD0] border-[1px] text-secondary focus:outline-primary mt-[6px]"
                placeholder="Enter confirm password"
                value={confirmpassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 transition font-medium px-[38px] py-[14px] border rounded-lg  text-primary bg-white hover:text-white hover:bg-primary"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
