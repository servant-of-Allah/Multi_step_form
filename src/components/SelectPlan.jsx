import React, { useContext } from "react";
import Intro from "./Intro";
import arcade from "../constants/images/icon-arcade.svg";
import advanced from "../constants/images/icon-advanced.svg";
import pro from "../constants/images/icon-pro.svg";
import PlanBox from "./PlanBox";
import { AppContext } from "../contexts/AppContext";
import { prices } from "../constants/price";

const SelectPlan = () => {
  const { setStep, planYearly, setPlanYearly } = useContext(AppContext);

  return (
    <div className="flex flex-col justify-between">
      <div className="grid gap-7 md:gap-10 bg-white px-5 py-7 sm:p-0 rounded-lg shadow mx-4 sm:mx-0 sm:rounded-none sm:shadow-none">
        <Intro
          title="Select your plan"
          subTitle="You have the option of monthly or yearly billing"
        />

        <div className="flex flex-col md:flex-row gap-3 md:gap-4">
          <PlanBox
            imgSrc={arcade}
            name="Arcade"
            cost={
              planYearly
                ? `${prices.arcade.yearly}/yr`
                : `${prices.arcade.monthly}/mo`
            }
          />

          <PlanBox
            imgSrc={advanced}
            name="Advanced"
            cost={
              planYearly
                ? `${prices.advanced.yearly}/yr`
                : `${prices.advanced.monthly}/mo`
            }
          />

          <PlanBox
            imgSrc={pro}
            name="Pro"
            cost={
              planYearly
                ? `${prices.pro.yearly}/yr`
                : `${prices.pro.monthly}/mo`
            }
          />
        </div>

        <div className="bg-magnolia rounded-lg py-3 sm:py-2 md:py-3 flex gap-5 items-center justify-center">
          <h2
            className={`font-semiBold text-[15px] md:text-[16px] transition-colors ${
              planYearly ? "text-coolGray" : "text-marineBlue"
            }`}
          >
            Monthly
          </h2>
          <div
            className="relative w-[40px] bg-marineBlue h-[22px] rounded-full flex items-center px-1 cursor-pointer"
            onClick={() => setPlanYearly((s) => !s)}
          >
            <div
              className={`absolute w-[13px] h-[13px] bg-white rounded-full transition-all ${
                planYearly ? "left-[22px]" : "left-1"
              }`}
            ></div>
          </div>
          <h2
            className={`font-semiBold text-[15px] md:text-[16px] transition-colors ${
              planYearly ? "text-marineBlue" : "text-coolGray"
            }`}
          >
            Yearly
          </h2>
        </div>
      </div>

      <div className="mt-10 md:mt-16 flex justify-between items-center bg-white ss:bg-transparent p-5 ss:p-0 w-full">
        <button
          className="text-coolGray font-semiBold text-[16px] border-none bg-transparent hover:text-marineBlue"
          type="button"
          onClick={() => setStep((s) => s - 1)}
        >
          Go Back
        </button>
        <button
          type="submit"
          className="bg-marineBlue rounded-md border-none text-white text-[15px] md:text-[16px] px-5 py-[10px] text-semiBold cursor-pointer hover:opacity-[0.89]"
          onClick={() => setStep((s) => s + 1)}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default SelectPlan;
