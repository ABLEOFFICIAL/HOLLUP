import React from "react";
import InputField from "./inputField";
import Logo from "./logo";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const passKey = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  let allInputs = password !== "" && confirmPassword !== "";
  let passwordMatch = password === confirmPassword;
  let passwordLength = password.length >= 8;
  let isValid = allInputs && passwordMatch && passwordLength;

  return (
    <div className="container px-3 h-full flex flex-col justify-between relative">
      <div>
        <Logo />
        <div className="my-7">
          <h1 className="font-bold text-3xl">You'll need a password</h1>
          <p>Make sure it's 8 characters and more</p>
        </div>
        <form className="my-10 ">
          <InputField
            type="password"
            placeholder="Password"
            required
            onChange={handlePassword}
          />
          <InputField
            type="password"
            placeholder="Confirm Password"
            required
            onChange={handleConfirmPassword}
          />
        </form>
      </div>
      <div>
        <p className="text-sm py-4">
          By signing up, you agree to the
          <span className="text-[#2954d6] cursor-pointer">
            Terms of Service
          </span>
          and Privacy Policy, including
          <span className="text-[#2954d6] cursor-pointer">Cookie Use</span>. X
          may use your contact information, including your email address and
          phone number for purposes outlined in our Privacy Policy, like keeping
          your account secure and personalizing our services, including ads.
          <span className="text-[#2954d6] cursor-pointer">Learn more</span>
          .Others will be able to find you by email or phone number, when
          provided, unless you choose otherwise
          <span className="text-[#2954d6] cursor-pointer">here</span>.
        </p>
        <NavLink
          to="/profile"
          className={`font-bold text-lg w-full text-center block text-white rounded-full p-2 cursor-pointer ${
            isValid ? "bg-black" : "bg-neutral-600"
          }`}
        >
          Sign in
        </NavLink>
      </div>
    </div>
  );
};

export default passKey;
