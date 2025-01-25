import React, { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { emailVal } from "../../../utils/validations";
import { toast } from "react-toastify";
import Loader from "../../../components/loader";
import { FaArrowLeft } from "react-icons/fa";
import { paths } from "../../../utils/paths";
import { useUserLoginMutation } from "../../../redux/redux-toolkit-query/auth";

const Login = () => {
  const [searchParams] = useSearchParams();
  const redirectUrl = searchParams.get("from");
  const navigate = useNavigate();
  const [userLogin, { data, error, isLoading }] = useUserLoginMutation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (data?.token) {
      toast.success(data?.message);
      setEmail("");
      setPassword("");
      localStorage.setItem("token", data?.token);
      const url = redirectUrl ? `/${redirectUrl}` : paths.home;
      navigate(url);
    }
    if (error) {
      toast.error(error?.data?.errors);
    }
  }, [data, error, navigate, redirectUrl]);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.error(emailVal(email));
    if (!password) {
      toast.error("Password is required");
    }

    const tempErrors = {
      emailErr: emailVal(email),
      passErr: !password,
    };

    if (Object.values(tempErrors).filter((value) => value).length) {
      return;
    }

    const data = {
      email,
      password,
    };
    userLogin(data);
  };
  return isLoading ? (
    <Loader />
  ) : (
    <div className="w-[100vw] h-[100vh] flex justify-between items-center">
      <div className="w-[400px] md:w-[500px] mx-4 md:mx-auto shadow rounded-lg p-[50px] ">
        <div className="relative">
          <h2 className="text-center text-secondary font-semibold text-4xl">
            Login
          </h2>
          <button onClick={() => navigate(`${paths.home}`)}>
            <FaArrowLeft className="absolute top-[10px] cursor-pointer text-secondary" />
          </button>
        </div>

        <form
          className="flex flex-col text-secondary pb-6 border-b-[1px] border-[#DBDFD0]"
          onSubmit={handleSubmit}
        >
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
          <div className="mb-[1rem]">
            <label className="font-semibold" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-[10px] rounded-lg  border-[#DBDFD0] border-[1px] text-secondary focus:outline-primary mt-[6px]"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link
            to={paths.forgetPassword}
            className="text-right text-sm mb-[14px] font-medium"
          >
            Forget Password?
          </Link>
          <button
            type="submit"
            className="transition font-medium px-[38px] py-[14px] border rounded-lg  text-primary bg-white hover:text-white hover:bg-primary"
          >
            Login
          </button>
        </form>
        <p className="pt-[1rem]">
          Donot have account?{" "}
          <Link className="text-primary font-semibold" to={paths.signup}>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
