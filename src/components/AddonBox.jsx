import React, { useContext } from "react";
import check from "../constants/images/icon-checkmark.svg";
import { AppContext } from "../contexts/AppContext";

const AddonBox = ({ name, title, desc, cost }) => {
  const { addons, setAddons } = useContext(AppContext);

  function handleClick(name, title) {
    setAddons((prev) => ({
      ...prev,
      [name]: addons[name] == "" ? title : "",
    }));
  }

  return (
    <div
      className={`p-4 ss:p-[18px] flex items-center justify-between ss:gap-10 border-[1.5px] border-lightGray hover:border-purplishBlue rounded-lg cursor-pointer ${
        addons[name] == title ? "bg-alabaster border-purplishBlue" : ""
      }`}
    >
      <section className="flex gap-4 ss:gap-6 items-center">
        <div
          className={`w-5 h-5 ss:w-[22px] ss:h-[22px] rounded-md grid place-items-center border-[1.5px] border-lightGray hover:border-purplishBlue ${
            addons[name] == title ? "bg-purplishBlue" : "bg-transparent"
          }`}
          onClick={() => handleClick(name, title)}
        >
          <img src={check} alt="checkmark icon" />
        </div>

        <div>
          <h2 className="font-semiBold text-marineBlue text-[15.5px] sm:text-[16.5px]">
            {title}
          </h2>
          <p className="text-coolGray text-[14.5px] ss:text-[15px]">{desc}</p>
        </div>
      </section>

      <div className="">
        <p className="text-purplishBlue text-[15px] sm:text-[16px] font-normal">
          +${cost}
        </p>
      </div>
    </div>
  );
};

export default AddonBox;
