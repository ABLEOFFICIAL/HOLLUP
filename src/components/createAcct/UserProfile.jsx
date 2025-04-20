import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./logo";

const UserProfile = () => {
  const [profilePhoto, setProfilePhoto] = useState("/src/assets/upload.jpg");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container px-3 h-full flex flex-col justify-between relative">
      <div>
        <div className="mb-8">
          <Logo />
        </div>
        <div className="mb-14">
          <h1 className="text-3xl font-bold py-2">Pick a profile picture</h1>
          <p className="text-neutral-600 text-md">
            have a favourite selfie? Upload it now.
          </p>
        </div>

        <label
          htmlFor="input-file"
          className="flex justify-center items-center mb-10 cursor-pointer relative"
        >
          <input
            onChange={handleImageChange}
            type="file"
            id="input-file"
            accept="image/*"
            hidden
          />
          <img
            src={profilePhoto}
            alt="Profile-photo"
            className="w-44 h-44 rounded-full object-cover cursor-pointer"
          />
        </label>
      </div>
      <NavLink
        to="/Username"
        className="font-bold text-lg w-full text-center text-black rounded-full p-2 bg-white border-[1px] border-neutral-500"
      >
        {profilePhoto !== "/src/assets/upload.jpg" ? "Next" : "Skip for now"}
      </NavLink>
    </div>
  );
};

export default UserProfile;
