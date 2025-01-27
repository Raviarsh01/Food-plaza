import React, { useEffect, useRef, useState } from "react";
import {
  useGetUserProfileQuery,
  useUpdatePasswordMutation,
  useUpdateProfileMutation,
} from "../../../redux/redux-toolkit-query/auth";
import {
  confirmPasswordVal,
  emailVal,
  firstNameVal,
  lastNameVal,
  passwordVal,
  phoneVal,
} from "../../../utils/validations";
import { toast } from "react-toastify";

const Profile = () => {
  const fileInputRef = useRef(null);
  const [tabs, setTabs] = useState(1);
  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setphone] = useState("");
  const [profileImage, setProfileImage] = useState();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const { data } = useGetUserProfileQuery();
  const [updateProfile, { data: postData, error: postError }] =
    useUpdateProfileMutation();
  const [updatePassword, { data: post2, error: error2 }] =
    useUpdatePasswordMutation();

  useEffect(() => {
    if (data) {
      setfName(data?.UserData?.firstName);
      setlName(data?.UserData?.lastName);
      setEmail(data?.UserData?.email);
      setphone(data?.UserData?.phoneNumber);
    }
  }, [data]);

  useEffect(() => {
    if (postData) {
      setProfileImage();
      toast.success(postData?.message);
    }
    if (postError) {
      toast.error(postError?.data?.errors);
    }
  }, [postData, postError]);

  useEffect(() => {
    if (post2) {
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
      toast.success(post2?.message);
    }
    if (error2) {
      toast.error(error2?.data?.errors);
      toast.error(error2?.data?.message);
    }
  }, [post2, error2]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tabs === 1) {
      toast.error(firstNameVal(fname));
      toast.error(lastNameVal(lname));
      toast.error(emailVal(email));
      toast.error(phoneVal(phone));

      const tempErrors = {
        fnameErr: firstNameVal(fname),
        lnameErr: lastNameVal(lname),
        emailErr: emailVal(email),
        phoneErr: phoneVal(phone),
      };

      if (Object.values(tempErrors).filter((value) => value).length) {
        return;
      }
      const formValues = new FormData();
      formValues.append("firstName", fname);
      formValues.append("lastName", lname);
      formValues.append("email", email);
      formValues.append("phoneNumber", phone);
      formValues.append("profileimage", profileImage);

      updateProfile(formValues);
    } else if (tabs === 2) {
      toast.error(passwordVal(oldPassword));
      toast.error(passwordVal(newPassword));
      newPassword &&
        toast.error(confirmPasswordVal(newPassword, confirmpassword));

      const tempErrors = {
        oldpass: passwordVal(oldPassword),
        newpass: passwordVal(newPassword),
        cpassErr: confirmPasswordVal(newPassword, confirmpassword),
      };
      if (Object.values(tempErrors).filter((value) => value).length) {
        return;
      }
      const data = {
        password: oldPassword,
        newpassword: newPassword,
      };
      updatePassword(data);
    }
  };

  function handleImageClick() {
    fileInputRef.current.click();
  }

  function handleProfilePic(e) {
    const file = e.target.files[0];
    setProfileImage(file);
  }

  return (
    <div className="main-container py-[50px]">
      <div className="mb-[2rem] flex  gap-12">
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
        <form
          className="max-w-[700px] mx-auto flex flex-col text-secondary"
          onSubmit={handleSubmit}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <img
              className="w-[90px] h-[90px] rounded-full cursor-pointer shadow"
              src={
                profileImage
                  ? URL.createObjectURL(profileImage)
                  : data?.UserData?.profileImage
                  ? `${process.env.REACT_APP_BACKEND_URL}${data?.UserData?.profileImage}`
                  : "/Images/user.png"
              }
              alt="profile-pic"
              onClick={handleImageClick}
            />
            <input
              type="file"
              hidden
              accept="image/*"
              ref={fileInputRef}
              onChange={handleProfilePic}
            />
            {data?.UserData?.profileImage ? (
              <p
                onClick={handleImageClick}
                className="text-primary font-semibold underline cursor-pointer"
              >
                Edit Profile Photo
              </p>
            ) : (
              <p
                onClick={handleImageClick}
                className="text-primary font-semibold underline cursor-pointer"
              >
                Add Profile Photo
              </p>
            )}
          </div>
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
          <button
            type="submit"
            className="mt-4 transition font-medium px-[38px] py-[14px] border rounded-lg  text-primary bg-white hover:text-white hover:bg-primary"
          >
            Update
          </button>
        </form>
      )}

      {tabs === 2 && (
        <form
          className="max-w-[700px] mx-4 md:mx-auto flex flex-col text-secondary pb-6"
          onSubmit={handleSubmit}
        >
          <div className="mb-[1rem]">
            <label className="font-semibold" htmlFor="currentpass">
              Current password
            </label>
            <input
              type="password"
              id="currentpass"
              className="w-full p-[10px] rounded-lg  border-[#DBDFD0] border-[1px] text-secondary focus:outline-primary mt-[6px]"
              placeholder="Enter current password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-3 md:gap-6 mb-[1rem]">
            <div className="mb-[1rem] w-full md:w-[50%]">
              <label className="font-semibold" htmlFor="newpassword">
                New Password
              </label>
              <input
                type="password"
                id="newpassword"
                className="w-full p-[10px] rounded-lg  border-[#DBDFD0] border-[1px] text-secondary focus:outline-primary mt-[6px]"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className="mb-[1rem] w-full md:w-[50%]">
              <label className="font-semibold" htmlFor="confirmnewpassword">
                Confirm New Password
              </label>
              <input
                type="password"
                id="confirmnewpassword"
                className="w-full p-[10px] rounded-lg  border-[#DBDFD0] border-[1px] text-secondary focus:outline-primary mt-[6px]"
                placeholder="Enter confirm password"
                value={confirmpassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
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
