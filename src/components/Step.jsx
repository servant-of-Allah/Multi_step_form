import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

const Step = ({ serial, name }) => {
  const { step } = useContext(AppContext);

  return (
    <div className="flex items-center gap-4">
      <div
        className={`text-[15px] px-3 py-[5px] rounded-full font-bold border-2 ${
          step == serial
            ? "text-marineBlue bg-lightBlue  border-lightBlue"
            : "text-white border-coolGray"
        }`}
      >
        {serial}
      </div>
      <div className="hidden sm:grid">
        <p className="text-lightGray text-[15px]">STEP {serial}</p>
        <p className="text-white font-bold text-[16px] tracking-wider">
          {name}
        </p>
      </div>
    </div>
  );
};

export default Step;
