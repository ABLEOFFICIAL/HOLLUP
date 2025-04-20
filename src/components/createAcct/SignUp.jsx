import React from "react";
import Create from "./Create";
import PassKey from "./passKey";
import { useState } from "react";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    dob: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (inputField, value) => {
    setForm((prev) => ({
      ...prev,
      [inputField]: value,
    }));
  };

  return (
    <div>
      <Create onChange={handleChange} />
      <PassKey onChange={handleChange} />
    </div>
  );
};

export default SignUp;
