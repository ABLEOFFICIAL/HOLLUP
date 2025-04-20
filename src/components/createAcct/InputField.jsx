import React from "react";

const InputField = ({ type, name, onChange, placeholder }) => {
  return (
    <div>
      {/* <label>{label}</label> */}
      <input
        type={type}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        className="input-field w-full border-[1px] p-4 rounded border-neutral-300 focus:border-[#3665f5]  focus:border-2 outline-none mb-6"
      />
    </div>
  );
};

export default InputField;
