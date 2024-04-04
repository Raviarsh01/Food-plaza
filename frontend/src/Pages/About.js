import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { aboutPostAction } from "../Redux/Actions/PublicActions";
import {
  fullNameVal,
  emailVal,
  phoneVal,
  feedbackVal,
} from "../Extra/validations";

const About = () => {
  const dispatch = useDispatch();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [feedback, setfeedback] = useState("");
  const [render, setrender] = useState(false);

  const { data, error } = useSelector((state) => state.AboutPostReducer);

  useEffect(() => {
    if (data && render) {
      setrender(false);
      toast.success(data?.message, {
        autoClose: 1500,
      });
      setname("");
      setemail("");
      setphone("");
      setfeedback("");
    }
    if (error && render) {
      setrender(false);
      toast.error(error?.response?.data?.message);
    }
  }, [data, error]);
  const handleSubmit = (e) => {
    e.preventDefault();

    toast.error(fullNameVal(name));
    toast.error(emailVal(email));
    toast.error(phoneVal(phone));
    toast.error(feedbackVal(feedback));

    const tempErrors = {
      nameErr: fullNameVal(name),
      emailErr: emailVal(email),
      phoneErr: phoneVal(phone),
      passErr: feedbackVal(feedback),
    };

    if (Object.values(tempErrors).filter((value) => value).length) {
      return;
    }

    const data = new FormData();
    data.append("name", name);
    data.append("lastName", email);
    data.append("email", phone);
    data.append("phoneNumber", feedback);
    setrender(true);
    //  dispatch(RegisterAction(data));
  };
  return (
    <div className="about-container">
      <section className="aboutSec-section">
        <div className="div6565y w-[55%]">
          <p className="info-para">
            Welcome To<span> Fresh Box Restaurant</span>{" "}
          </p>
          <p className="center">Little Story</p>
          <p className="center">
            Lorem placeat a soluta nemo debitis repellat possimus minima nulla,
            sunt quaerat quibusdam! Quos ipsa quam dignissimos, quaerat expedita
            fugiat doloribus itaque, sit molestiae a distinctio modi? Officiis
            iure eligendi porro qui praesentium recusandae, nisi minima
            voluptatem voluptatibus fuga expedita totam quas alias quidem
            reprehenderit laudantium nihil quam. Maxime corporis provident
            asperiores molestias accusantium tempora. Aliquam ea esse ad a enim
            tempora rerum laboriosam quae eligendi!
          </p>

          <p className="center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut soluta
            harum consequuntur nam sed impedit dolore corrupti iste incidunt
            eius perspiciatis deserunt nemo vitae qui illo numquam, corporis
            excepturi voluptatum.
          </p>
        </div>
        <div className="w-[45%]">
          <img className="img6767" src="Images\home-1.jpg"></img>
        </div>
      </section>
      <section className="my-10">
        <h2 className="second-color text-3xl font-semibold text-center">
          Get in Touch
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="my-5">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div className="my-5">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div className="my-5">
            <label>Phone Number</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setphone(e.target.value)}
            />
          </div>
          <div className="my-5">
            <label>Your Feedback</label>
            <textarea
              className="textarea11"
              rows={7}
              value={feedback}
              onChange={(e) => setfeedback(e.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            className="border py-2 px-6 bg-[#e11d48] text-white"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default About;
