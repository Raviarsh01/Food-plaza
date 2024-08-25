import React, { useState } from "react";

const Profile = () => {
  const [tabs, setTabs] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tabs === 1) {
      alert("Profile updates");
    } else {
      alert("Password change");
    }
  };

  return (
    <div className="main-container py-[50px]">
  
      <div className="mb-[1rem] flex justify-center gap-12">
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
          className="max-w-[660px] mx-4 md:mx-auto flex flex-col text-secondary"
          onSubmit={handleSubmit}
        >
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
          className="max-w-[360px] mx-4 md:mx-auto flex flex-col text-secondary pb-6"
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
