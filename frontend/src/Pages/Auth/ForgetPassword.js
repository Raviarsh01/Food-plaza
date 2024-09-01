import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../../Components/Loader";
import { FaArrowLeft } from "react-icons/fa";
import { url } from "../../App";
import axios from "axios";
import {
  confirmPasswordVal,
  emailVal,
  OTPVal,
  passwordVal,
} from "../../Extra/validations";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [otpField, setOtpField] = useState(false);
  const [OTP, setOTP] = useState("");
  const [render, setrender] = useState(false);
  const [firstForm, setFirstForm] = useState(true);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSendMail = async (e) => {
    e.preventDefault();
    const tempErrors = {
      emailErr: emailVal(email),
    };
    toast.error(tempErrors?.emailErr);
    if (Object.values(tempErrors).filter((value) => value).length) {
      return;
    }
    try {
      setrender(true);

      const { data } = await axios.post(
        `${url}auth/send-mail`,
        {
          email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setOtpField(true);
      setrender(false);
      toast.success(data?.message);
    } catch (err) {
      setrender(false);
      toast.error(err?.response?.data?.message);
    }
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
    const tempErrors = {
      passErr: OTPVal(OTP),
    };
    toast.error(tempErrors?.passErr);
    if (Object.values(tempErrors).filter((value) => value).length) {
      return;
    }
    try {
      setrender(true);
      const { data } = await axios.post(
        `${url}auth/verify-otp`,
        {
          email,
          otp: OTP,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setrender(false);
      setFirstForm(false);
      toast.success(data?.message);
    } catch (err) {
      setrender(false);
      toast.error(err?.response?.data?.message);
    }
  };

  const handlePassword = async (e) => {
    e.preventDefault();
    const tempErrors = {
      newpass: passwordVal(newPassword),
      confirmpass: confirmPasswordVal(newPassword, confirmPassword),
    };
    toast.error(tempErrors?.newpass);
    toast.error(tempErrors?.confirmpass);
    if (Object.values(tempErrors).filter((value) => value).length) {
      return;
    }
    try {
      setrender(true);
      const { data } = await axios.post(
        `${url}auth/reset-password`,
        {
          email,
          newpassword: newPassword,
          oldpassword: confirmPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setrender(false);
      setFirstForm(true);
      toast.success(data?.message);
      navigate("/login");
    } catch (err) {
      setrender(false);
      toast.error(err?.response?.data?.message);
    }
  };

  return render ? (
    <Loader />
  ) : (
    <div className="w-[100vw] h-[100vh] flex justify-between items-center">
      <div className="w-[400px] md:w-[500px] mx-4 md:mx-auto shadow rounded-lg p-[50px]">
        <div className="relative">
          <h2 className="text-center text-secondary font-semibold text-4xl">
            Forget Password
          </h2>
          <button onClick={() => navigate("/login")}>
            <FaArrowLeft className="absolute top-[10px] cursor-pointer text-secondary" />
          </button>
        </div>

        {firstForm ? (
          <form
            className="flex flex-col text-secondary"
            onSubmit={otpField ? handleSendOtp : handleSendMail}
          >
            <div className="mb-4">
              <label className="font-semibold" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-[10px] rounded-lg  border-[#DBDFD0] border-[1px] text-secondary focus:outline-primary mt-[6px]"
                placeholder="Enter your email"
                disabled={otpField}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {otpField ? (
              <div className="mb-4">
                <p className="mb-2">Kindly check your email inbox</p>
                <label className="font-semibold" htmlFor="otp">
                  Enter OTP
                </label>
                <input
                  type="number"
                  id="otp"
                  className="w-full p-[10px] rounded-lg  border-[#DBDFD0] border-[1px] text-secondary focus:outline-primary mt-[6px]"
                  placeholder="Enter OTP"
                  value={OTP}
                  onChange={(e) => setOTP(e.target.value)}
                />
              </div>
            ) : null}
            <button
              type="submit"
              className="mt-4 transition font-medium px-[38px] py-[14px] border rounded-lg  text-primary bg-white hover:text-white hover:bg-primary"
            >
              Submit
            </button>
          </form>
        ) : (
          <form
            className="flex flex-col text-secondary"
            onSubmit={handlePassword}
          >
            <div className="mb-4">
              <label className="font-semibold" htmlFor="newpass">
                New password
              </label>
              <input
                type="text"
                id="newpass"
                className="w-full p-[10px] rounded-lg border-[#DBDFD0] border-[1px] text-secondary focus:outline-primary mt-[6px]"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="font-semibold" htmlFor="confirmpass">
                Confirm new password
              </label>
              <input
                type="text"
                id="confirmpass"
                className="w-full p-[10px] rounded-lg border-[#DBDFD0] border-[1px] text-secondary focus:outline-primary mt-[6px]"
                placeholder="Enter confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="mt-4 transition font-medium px-[38px] py-[14px] border rounded-lg  text-primary bg-white hover:text-white hover:bg-primary"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgetPassword;
