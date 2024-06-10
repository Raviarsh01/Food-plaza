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
      <div className="w-[500px] mx-auto shadow rounded-lg p-[50px]">
        <div className="relative">
          <h2 className="text-center text-secondary font-semibold text-4xl">
            Forget Password
          </h2>
          <button onClick={() => navigate("/login")}>
            <FaArrowLeft className="absolute top-[10px] cursor-pointer text-secondary" />
          </button>
        </div>

        <form className="flex flex-col text-secondary" onSubmit={handleSubmit}>
          <div className="mb-[1rem]">
            <label className="font-semibold" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-[10px] rounded-lg  border-[#DBDFD0] border-[1px] text-secondary focus:outline-primary mt-[6px]"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="mt-4 transition font-medium px-[38px] py-[14px] border rounded-lg  text-primary bg-white hover:text-white hover:bg-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
