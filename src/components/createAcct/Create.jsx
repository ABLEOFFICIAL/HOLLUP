import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "./InputField";
import Logo from "./LogoIcon";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");

  const inputName = (e) => {
    setName(e.target.value);
  };
  const inputEmail = (e) => {
    setEmail(e.target.value);
  };
  const inputDob = (e) => {
    setDob(e.target.value);
  };
  const navigate = useNavigate();

  let allInputs = name !== "" && email !== "" && dob !== "";

  return (
    <>
      <div className="container px-3 h-full flex flex-col justify-between relative">
        <div>
          <span
            onClick={() => {
              navigate("/");
            }}
            className="absolute cursor-pointer text-3xl"
          >
            x
          </span>
          <Logo />
          <form className="my-10 ">
            <h1 className="header text-2xl font-bold mb-7">
              Create Your Account
            </h1>
            <InputField
              type="text"
              placeholder="Name"
              onChange={inputName}
              required
            />
            <InputField
              type="email"
              placeholder="Email"
              onChange={inputEmail}
              required
            />
          </form>
          <div className="dob">
            <h2 className="dob-header font-bold text-lg mb-2">Date of Birth</h2>
            <p className="dob-text text-neutral-600 text-sm mb-4">
              This will be shown publicly. Confirm your own age even if this
              account is for a business, a pet, or something else.
            </p>
            <InputField type="date" onChange={inputDob} required />
          </div>
        </div>
        <NavLink to={allInputs ? "/PassKey" : ""}>
          <button
            className={`font-bold text-lg w-full text-white rounded-full p-2 cursor-pointer ${
              allInputs ? "bg-black" : "bg-neutral-600"
            }`}
          >
            Next
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default Create;
