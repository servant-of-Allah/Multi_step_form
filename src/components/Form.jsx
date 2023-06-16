import React, { useContext, useState } from "react";
import Intro from "./Intro";
import { AppContext } from "../contexts/AppContext";

const Form = () => {
  const { setStep, formData, setFromData } = useContext(AppContext);
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setFromData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit() {
    let newErrors = {};

    if (formData.name.trim() == "") {
      newErrors.name = "This field is required.";
    }

    if (formData.email.trim() == "") {
      newErrors.email = "This field is required.";
    }

    if (formData.phone.trim() == "") {
      newErrors.phone = "This field is required.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setStep((s) => s + 1);
    }
  }

  return (
    <div className="flex flex-col justify-between">
      <div className="grid gap-4 sm:gap-8 bg-white px-5 py-7 sm:p-0 rounded-lg shadow mx-4 sm:mx-0 sm:rounded-none sm:shadow-none">
        <Intro
          title="Personal info"
          subTitle="Please provide your name, email address and phone number."
        />

        <form action="#">
          <div className="w-full">
            <label
              className="text-[15px] sm:text-[16px] text-marineBlue inline-block mb-1"
              htmlFor="name"
            >
              Name
            </label>

            {errors.name && (
              <span className="text-[14px] sm:text-[16px] font-semiBold sm:font-bold text-red float-right mb-1">
                {errors.name}
              </span>
            )}

            <input
              className={`w-full outline-none text-[15px] sm:text-[16px] border-[1.5px] border-lightGray ${
                errors.name && "border-red"
              } text-marineBlue font-semiBold p-[11px] focus:border-purplishBlue rounded-md`}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Stephen King"
              required
            />
          </div>

          <div className="w-full mt-3 sm:mt-5">
            <label
              className="text-[15px] sm:text-[16px] text-marineBlue mb-1"
              htmlFor="email"
            >
              Email Address
            </label>

            {errors.email && (
              <span className="text-[14px] sm:text-[16px] font-semiBold sm:font-bold text-red float-right mb-1">
                {errors.email}
              </span>
            )}

            <input
              className={`w-full outline-none text-[15px] sm:text-[16px] border-[1.5px] border-lightGray ${
                errors.email && "border-red"
              } text-marineBlue font-semiBold p-[11px] focus:border-purplishBlue rounded-md`}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. stephenking@lorem.com"
              required
            />
          </div>

          <div className="w-full mt-3 sm:mt-5">
            <label
              className="text-[15px] sm:text-[16px] text-marineBlue mb-1"
              htmlFor="phone"
            >
              Phone Number
            </label>

            {errors.phone && (
              <span className="text-[14px] sm:text-[16px] font-semiBold sm:font-bold text-red float-right mb-1">
                {errors.phone}
              </span>
            )}

            <input
              className={`w-full outline-none text-[15px] sm:text-[16px] border-[1.5px] border-lightGray ${
                errors.phone && "border-red"
              } text-marineBlue font-semiBold p-[11px] focus:border-purplishBlue rounded-md`}
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +1 234 567 890"
              required
            />
          </div>
        </form>
      </div>
      <div className="w-full mt-16 md:mt-20 bg-white ss:bg-transparent p-4 sm:p-0">
        <button
          type="button"
          className="float-right bg-marineBlue rounded-md border-none text-white text-[15px] md:text-[16px] px-5 py-[10px] text-semiBold cursor-pointer hover:opacity-[0.89]"
          onClick={handleSubmit}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Form;
