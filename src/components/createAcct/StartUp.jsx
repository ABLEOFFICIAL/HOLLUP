import React from "react";
import { NavLink } from "react-router-dom";

const StartUp = () => {
  return (
    <div className="flex flex-col justify-between h-auto overflow-y-auto">
      <div className="">
        <img className="w-17" src="/src/assets/logo-black.png" alt="logo" />
      </div>
      <div className="h-60 flex items-center justify-center ">
        <h1 className="text-5xl font-bold w-[90%]">Happening now</h1>
      </div>
      <div className=" p-3 relative">
        <h2 className="text-3xl font-bold pb-5">Join today</h2>
        <button className=" border-[1px] border-neutral-500 w-full rounded-full mb-3 text-xs py-2 cursor-pointer">
          <img
            className="w-6 inline mr-1"
            src="/src/assets/google.png"
            alt=""
          />
          <span className="text-lg">Sign up with Google</span>
        </button>
        <button className=" border-[1px] border-neutral-500 w-full rounded-full text-xs py-1 mb-6 cursor-pointer">
          <img className="w-8 inline" src="/src/assets/apple.png" alt="" />
          <span className="font-bold text-lg">Sign up with Apple</span>
        </button>
        <div className="relative mb-8">
          <hr className="text-neutral-300" />
          <span className="bg-white absolute left-[47%] top-[-10px] text-lg">
            or
          </span>
        </div>
        <NavLink
          to={"/Create"}
          className="font-bold text-lg w-full block text-center bg-[#3665f5] rounded-full p-4 text-white cursor-pointer"
        >
          create account
        </NavLink>
        <p className="text-[11px] py-3">
          By signing up, you agree to our{" "}
          <span className="text-[#2954d6]">Terms of Service</span> and
          <span className="text-[#2954d6]">Privacy</span>
          Policy, including <span className="text-[#2954d6]">cookie use</span>
        </p>
      </div>
      <div className="p-3 mb-7">
        <h2 className="text-lg font-bold mb-4 cursor-pointer">
          Already have an account?
        </h2>
        <button className="font-bold text-lg w-full text-[#3665f5] rounded-full p-2 bg-white border-[1px] border-neutral-500">
          Sign in
        </button>
      </div>
      <footer className=" flex flex-col text-[12px] justify-between items-center flex-wrap p-2">
        <div className="flex flex-row justify-between w-full">
          <a href="#">About</a>
          <a href="#">Download the X app</a>
          <a href="#">Help Center</a>
          <a href="#"> Terms of Servive</a>
        </div>
        <div className="flex flex-row justify-between w-full">
          <a href="#"> Privacy Policy</a>
          <a href="#"> Cookie Policy</a>
          <a href="#"> Accessibility</a>
          <a href="#"> Ads info</a>
          <a href="#"> Blog</a>
        </div>
        <div className="flex flex-row justify-between w-[85%]">
          <a href="#"> Careers</a>
          <a href="#"> Brand Resources</a>
          <a href="#"> Advertising</a>
          <a href="#"> Marketing</a>
        </div>
        <div className="flex flex-row justify-between w-[85%]">
          <a href="#"> x for Business</a>
          <a href="#"> AboDevelopers</a>
          <a href="#"> Directory</a>
          <a href="#"> Setting</a>
        </div>
        <div className="flex flex-row justify-center">
          <a href="#"> @2025 X Corp.</a>
        </div>
      </footer>
      <br />
      <br />
    </div>
  );
};

export default StartUp;
