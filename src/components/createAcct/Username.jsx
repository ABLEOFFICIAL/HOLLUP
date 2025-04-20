import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./LogoIcon";
import { useState } from "react";
import InputField from "./InputField";

const Username = () => {
  const [username, setUsername] = useState("");

  let isValid = username !== "";

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div className="container px-3 h-full flex flex-col justify-between relative">
      <div>
        <Logo />
        <div>
          <h1 className="text-3xl font-bold py-4 w-4/5">
            What should we call you?
          </h1>
          <p className="text-neutral-600 text-md">
            Your @username is unique. You can always change it later
          </p>
        </div>
        <form className="my-10 ">
          <InputField
            onChange={handleUsername}
            type="text"
            placeholder="Username"
            required
          />
        </form>
      </div>

      <NavLink
        to="/Notification"
        className={`font-bold text-lg block w-full text-center ${
          isValid ? "text-white bg-black" : "text-white bg-neutral-600"
        } rounded-full p-2  border-[1px] border-neutral-500`}
      >
        Next
      </NavLink>
    </div>
  );
};

export default Username;
