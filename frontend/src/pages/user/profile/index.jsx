import React, { useEffect, useState } from "react";
import { GetProfileData } from "../../../redux/actions/auth-actions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Profile = () => {
  const dispatch = useDispatch();
  const [tabs, setTabs] = useState(1);
  const [formValues, setFormValues] = useState({
    profileImage: null,
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });
  const { data, loading } = useSelector((state) => state.profileData);
  console.log("formValues", formValues);
  useEffect(() => {
    dispatch(GetProfileData());
  }, []);

  useEffect(() => {
    if (data) {
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
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}auth/user-profile`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
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
              className="w-[140px] h-[140px] rounded-full object-cover mt-3"
              src={
                formValues.profileImage
                  ? `${process.env.REACT_APP_BACKEND_URL}${formValues.profileImage}`
                  : "https://cdn.pixabay.com/photo/2016/03/31/20/37/client-1295901_1280.png"
              }
              alt="profile pic"
            />
            {formValues.profileImage ? (
              <div className="flex gap-4">
                <button
                  className="border border-primary text-primary rounded px-3 py-1"
                  onClick={(e) => e.preventDefault()}
                >
                  Edit image
                </button>
                <button
                  className="border border-primary text-primary rounded px-3 py-1"
                  onClick={(e) => e.preventDefault()}
                >
                  Delete image
                </button>
              </div>
            ) : (
              <>
                <button
                  className="border border-primary text-primary rounded px-3 py-1"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(`upload-image`).click();
                  }}
                >
                  Add image
                </button>
                <input
                  type="file"
                  hidden
                  id="upload-image"
                  accept="image/*"
                  className="w-full p-[10px] rounded-lg  border-[#DBDFD0] border-[1px] text-secondary focus:outline-primary mt-[6px]"
                  name="profileImage"
                  onChange={handleFormChange}
                />
              </>
            )}
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
        <form className="max-w-[360px] mx-4 md:mx-auto flex flex-col text-secondary pb-6">
          <div className="mb-[1rem]">
            <label className="font-semibold" htmlFor="currentpass">
              Current password
            </label>
            <input
              type="password"
              id="currentpass"
              className="w-full p-[10px] rounded-lg  border-[#DBDFD0] border-[1px] text-secondary focus:outline-primary mt-[6px]"
              placeholder="Enter current password"
            />
          </div>
          <div className="mb-[1rem]">
            <label className="font-semibold" htmlFor="newpassword">
              New Password
            </label>
            <input
              type="password"
              id="newpassword"
              className="w-full p-[10px] rounded-lg  border-[#DBDFD0] border-[1px] text-secondary focus:outline-primary mt-[6px]"
              placeholder="Enter new password"
            />
          </div>
          <div className="mb-[2rem]">
            <label className="font-semibold" htmlFor="confirmnewpassword">
              Confirm New Password
            </label>
            <input
              type="password"
              id="confirmnewpassword"
              className="w-full p-[10px] rounded-lg  border-[#DBDFD0] border-[1px] text-secondary focus:outline-primary mt-[6px]"
              placeholder="Enter confirm password"
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
