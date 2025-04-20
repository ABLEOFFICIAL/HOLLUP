import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";

const Notification = () => {
  return (
    <div className="container px-3 h-full flex flex-col justify-center relative">
      <IoIosNotificationsOutline
        size={100}
        className="text-[#3665f5] mx-auto my-6"
      />
      <h1 className="text-3xl font-bold py-4">Turn on notifications</h1>
      <p className="text-neutral-600 text-md pb-6">
        Get the most out of x by staying up to date with what is happening.
      </p>
      <button className="font-bold text-lg w-full text-center text-white rounded-full p-3 bg-black mb-5">
        Allow notifications
      </button>
      <button className="font-bold text-lg w-full text-center text-black rounded-full p-3 bg-white border-[1px] border-neutral-500">
        Skip for now
      </button>
    </div>
  );
};

export default Notification;
