import React, { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { LoginAction } from "../../Redux/Actions/AuthActions";
import { emailVal, passwordVal } from "../../Extra/validations";
import { toast } from "react-toastify";
import Loader from "../../Components/Loader";
import { FaArrowLeft } from "react-icons/fa";

const Login = () => {
  const [searchParams] = useSearchParams();
  const redirectUrl = searchParams.get("from");
  const dispatch = useDispatch();
  const { user, error,message } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [render, setrender] = useState(false);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  useEffect(() => {
    if (user?.token && render) {
      toast.success(message, {
        autoClose: 2000,
      });
      setEmail("");
      setPassword("");
      setrender(false);
      if (redirectUrl) {
        navigate(`/${redirectUrl}`);
        return;
      }
      navigate("/");
    }

    if (error && render) {
      setrender(false);
      toast.error(error?.response?.data?.message);
    }
  }, [user, error,message]);

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
    dispatch(LoginAction(data));
  };
  return render ? (
    <Loader />
  ) : (
    <div className="w-[100vw] h-[100vh] flex justify-between items-center">
      <div className="w-[400px] md:w-[500px] mx-4 md:mx-auto shadow rounded-lg p-[50px] ">
        <div className="relative">
          <h2 className="text-center text-secondary font-semibold text-4xl">
            Login
          </h2>
          <button onClick={() => navigate("/")}>
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
          <Link to="/forget-password" className="text-right text-sm mb-[14px] font-medium">
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
          <Link className="text-primary font-semibold" to="/signup">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
