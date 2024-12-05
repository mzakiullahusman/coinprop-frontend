import React, { useState } from "react";
import Name from "./assets/Name";
import Username from "./assets/Username";
import Mail from "./assets/Mail";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row gap-5 mt-12">
        <div className="w-full md:w-1/2">
          <label
            htmlFor="firstName"
            className="block text-lg lg:text-[20px] my-2 font-medium text-white"
          >
            First Name
          </label>
          <div className="relative flex items-center">
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full p-5 pl-10 border border-white border-opacity-20 text-sm font-poppins font-normal rounded-md bg-white bg-opacity-[2%] text-white placeholder:text-white focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your First Name"
            />

            <div className="absolute left-3">
              <Name />
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <label
            htmlFor="lastName"
            className="block text-lg lg:text-[20px] my-2 font-medium text-white"
          >
            Last Name
          </label>
          <div className="relative flex items-center">
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full p-5 pl-10 border border-white border-opacity-20 text-sm font-poppins font-normal rounded-md bg-white bg-opacity-[2%] text-white placeholder:text-white focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your Last Name"
            />

            <div className="absolute left-3">
              <Name />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-5 mt-3">
        <div className="w-full md:w-1/2">
          <label
            htmlFor="userName"
            className="block text-lg lg:text-[20px] my-2 font-medium text-white"
          >
            Username
          </label>
          <div className="relative flex items-center">
            <input
              type="text"
              id="userName"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              required
              className="w-full p-5 pl-10 border border-white border-opacity-20 text-sm font-poppins font-normal rounded-md bg-white bg-opacity-[2%] text-white placeholder:text-white focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your User Name"
            />

            <div className="absolute left-3">
              <Username />
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <label
            htmlFor="email"
            className="block text-lg lg:text-[20px] my-2 font-medium text-white"
          >
            Email
          </label>
          <div className="relative flex items-center">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-5 pl-10 border border-white border-opacity-20 text-sm font-poppins font-normal rounded-md bg-white bg-opacity-[2%] text-white placeholder:text-white focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your Email"
            />

            <div className="absolute left-3">
              <Mail />
            </div>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-4 rounded-[8px] my-8 font-normal bg-gradient-to-r from-[#00fc9e] to-[#1c7ef0] font-poppins text-base lg:text-[20px] text-[#141414]"
      >
        Sign Up
      </button>
    </form>
  );
};

export default ContactForm;
