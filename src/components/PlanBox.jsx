import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

const PlanBox = ({ imgSrc, name, cost }) => {
  const { planYearly, selectedPlan, setSelectedPlan } = useContext(AppContext);

  return (
    <div
      className={`md:w-[150px] flex md:flex-col gap-4 md:gap-11 md:items-start p-4 sm:p-3 md:p-4 rounded-lg border-[1.5px] cursor-pointer transition-all duration-[50ms] ${
        selectedPlan === name
          ? "bg-alabaster border-purplishBlue"
          : "bg-transparent border-lightGray"
      } hover:border-purplishBlue`}
      onClick={() => setSelectedPlan(name)}
    >
      <div>
        <img src={imgSrc} alt="arcade icon" />
      </div>

      <div>
        <h2 className="font-semiBold text-marineBlue text-[16px]">{name}</h2>
        <p className="text-coolGray text-[15px]">${cost}</p>
        {planYearly && (
          <p className="font-normal text-marineBlue text-[13px] tracking-tight">
            2 months free
          </p>
        )}
      </div>
    </div>
  );
};

export default PlanBox;
