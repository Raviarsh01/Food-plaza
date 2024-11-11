import React, { useEffect, useState } from "react";
import { GetProfileData } from "../../../redux/actions/auth-actions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";

const Profile = () => {
  const dispatch = useDispatch();
  const [tabs, setTabs] = useState(1);
  const [render, setRender] = useState(true);
  const [formValues, setFormValues] = useState({
    profileImage: null,
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const [passwordForm, setPasswordForm] = useState({
    oldpassword: "",
    newpassword: "",
    confirmpassword: "",
  });

  const { data } = useSelector((state) => state.profileData);

  useEffect(() => {
    if (render) {
      dispatch(GetProfileData());
    }
  }, [render, dispatch]);

  useEffect(() => {
    if (data) {
      setRender(false);
      setFormValues({
        profileImage: data?.profileImage,
        firstName: data?.firstName,
        lastName: data?.lastName,
        email: data?.email,
        phoneNumber: data?.phoneNumber,
      });
    }
  }, [data]);

  function handleFormChange(e) {
    if (e.target.name === "profileImage") {
      setFormValues({ ...formValues, [e.target.name]: e.target.files[0] });
    } else {
      setFormValues({ ...formValues, [e.target.name]: e.target.value });
    }
  }

  function handlePasswordFormChange(e) {
    setPasswordForm({ ...passwordForm, [e.target.name]: e.target.value });
  }

  async function handleFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("profileimage", formValues.profileImage);
    formData.append("firstName", formValues.firstName);
    formData.append("lastName", formValues.lastName);
    formData.append("email", formValues.email);
    formData.append("phoneNumber", formValues.phoneNumber);

    try {
      const reducer = localStorage.getItem("persist:login");
      const extractToken = JSON.parse(reducer)?.user;
      const token = JSON.parse(extractToken)?.token;
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}auth/user-profile`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Profile updated");
      setRender(true);
    } catch (error) {
      // no code
    }
  }
  const handleImageUpload = (e) => {
    e.preventDefault();
    document.getElementById("upload-image").click();
  };

  async function handlePasswordFormSubmit(e) {
    e.preventDefault();
    if (passwordForm.newpassword !== passwordForm.confirmpassword) {
      toast.error("Confirm password not match");
      return;
    }
    const formData = {
      password: passwordForm.oldpassword,
      newpassword: passwordForm.newpassword,
    };
    try {
      const reducer = localStorage.getItem("persist:login");
      const extractToken = JSON.parse(reducer)?.user;
      const token = JSON.parse(extractToken)?.token;
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}auth/change-password`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Password updated");
      setRender(true);
      setPasswordForm({
        oldpassword: "",
        newpassword: "",
        confirmpassword: "",
      });
    } catch (error) {
      // no code
    }
  }
  return (
    <div className="main-container py-[50px]">
      <div className="mb-[1rem] flex  gap-12">
        <div
          className={`font-medium cursor-pointer pb-[2px] ${
            tabs === 1 ? "border-b-[1px]  border-primary" : ""
          }`}
          onClick={() => setTabs(1)}
        >
          Update profile
        </div>
        <div
          className={`font-medium cursor-pointer pb-[2px] ${
            tabs === 2 ? "border-b-[1px]  border-primary" : ""
          }`}
          onClick={() => setTabs(2)}
        >
          Change password
        </div>
      </div>

      {tabs === 1 && (
        <form className="max-w-[660px] mx-4 md:mx-auto flex flex-col text-secondary">
          <div className="mx-auto w-fit relative flex items-center gap-6">
            <img
              className="w-[160px] h-[160px] rounded-full object-cover mt-3"
              src={
                formValues.profileImage
                  ? typeof formValues.profileImage === "string"
                    ? `${process.env.REACT_APP_BACKEND_URL}${formValues.profileImage}`
                    : URL.createObjectURL(formValues.profileImage)
                  : "https://cdn.pixabay.com/photo/2016/03/31/20/37/client-1295901_1280.png"
              }
              alt="profile pic"
            />

            <div>
              <button
                className="text-primary text-base font-semibold hover:underline"
                onClick={handleImageUpload}
              >
                {formValues.profileImage ? "Edit Image" : "Add Image"}
              </button>
              <br />
              {formValues.profileImage ? (
                <button
                  className="text-primary text-base font-semibold hover:underline mt-1"
                  onClick={(e) => {
                    e.preventDefault();
                    setFormValues({ ...formValues, profileImage: null });
                  }}
                >
                  Delete Image
                </button>
              ) : null}
              <input
                type="file"
                hidden
                id="upload-image"
                accept="image/*"
                className="w-full p-[10px] rounded-lg  border-[#DBDFD0] border-[1px] text-secondary focus:outline-primary mt-[6px]"
                name="profileImage"
                onChange={handleFormChange}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-3 md:gap-6 mt-8">
            <div className="mb-[1rem] w-full md:w-[50%]">
              <label className="font-semibold" htmlFor="firstname">
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                className="w-full p-[10px] rounded-lg  border-[#DBDFD0] border-[1px] text-secondary focus:outline-primary mt-[6px]"
                placeholder="Enter first name"
                name="firstName"
                value={formValues.firstName}
                onChange={handleFormChange}
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
                name="lastName"
                value={formValues.lastName}
                onChange={handleFormChange}
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
                readOnly
                id="email"
                className="w-full p-[10px] rounded-lg  border-[#DBDFD0] border-[1px] text-secondary focus:outline-none mt-[6px]"
                placeholder="Enter email"
                value={formValues.email}
                name="email"
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
                placeholder="Enter email"
                name="phoneNumber"
                value={formValues.phoneNumber}
                onChange={handleFormChange}
              />
            </div>
          </div>

          <button
            type="submit"
            onClick={handleFormSubmit}
            className="mt-4 transition font-medium px-[38px] py-[14px] border rounded-lg  text-primary bg-white hover:text-white hover:bg-primary"
          >
            Update
          </button>
        </form>
      )}

      {tabs === 2 && (
        <form
          className="max-w-[360px] mx-4 md:mx-auto flex flex-col text-secondary pb-6"
          onSubmit={handlePasswordFormSubmit}
        >
          <div className="mb-[1rem]">
            <label className="font-semibold" htmlFor="currentpass">
              Current password
            </label>
            <input
              type="text"
              id="currentpass"
              className="w-full p-[10px] rounded-lg  border-[#DBDFD0] border-[1px] text-secondary focus:outline-primary mt-[6px]"
              placeholder="Enter current password"
              name="oldpassword"
              value={passwordForm.oldpassword}
              onChange={handlePasswordFormChange}
            />
          </div>
          <div className="mb-[1rem]">
            <label className="font-semibold" htmlFor="newpassword">
              New Password
            </label>
            <input
              type="text"
              id="newpassword"
              className="w-full p-[10px] rounded-lg  border-[#DBDFD0] border-[1px] text-secondary focus:outline-primary mt-[6px]"
              placeholder="Enter new password"
              name="newpassword"
              value={passwordForm.newpassword}
              onChange={handlePasswordFormChange}
            />
          </div>
          <div className="mb-[2rem]">
            <label className="font-semibold" htmlFor="confirmnewpassword">
              Confirm New Password
            </label>
            <input
              type="text"
              id="confirmnewpassword"
              className="w-full p-[10px] rounded-lg  border-[#DBDFD0] border-[1px] text-secondary focus:outline-primary mt-[6px]"
              placeholder="Enter confirm password"
              name="confirmpassword"
              value={passwordForm.confirmpassword}
              onChange={handlePasswordFormChange}
            />
          </div>

          <button
            type="submit"
            className="transition font-medium px-[38px] py-[14px] border rounded-lg  text-primary bg-white hover:text-white hover:bg-primary"
          >
            Update
          </button>
        </form>
      )}
    </div>
  );
};

export default Profile;
