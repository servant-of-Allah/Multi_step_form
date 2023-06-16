import React, { useContext } from "react";
import Intro from "./Intro";
import AddonBox from "./AddonBox";
import { AppContext } from "../contexts/AppContext";
import { prices } from "../constants/price";

const Addons = () => {
  const { setStep, planYearly } = useContext(AppContext);

  return (
    <div className="flex flex-col justify-between">
      <div className="grid gap-10 bg-white px-5 py-7 sm:p-0 rounded-lg shadow mx-4 sm:mx-0 sm:rounded-none sm:shadow-none">
        <Intro
          title="Pick add-ons"
          subTitle="Add-ons help enhance your gaming experience"
        />

        <div className="grid gap-4">
          <AddonBox
            name="onlineService"
            title="Online service"
            desc="Access to multiplayer games"
            cost={
              planYearly
                ? `${prices.onlineService.yearly}/yr`
                : `${prices.onlineService.monthly}/mo`
            }
          />
          <AddonBox
            name="largerStorage"
            title="Larger storage"
            desc="Extra 1TB of cloud save"
            cost={
              planYearly
                ? `${prices.largerStorage.yearly}/yr`
                : `${prices.largerStorage.monthly}/mo`
            }
          />
          <AddonBox
            name="customizableProfile"
            title="Customizable profile"
            desc="Custom theme on your profile"
            cost={
              planYearly
                ? `${prices.customizableProfile.yearly}/yr`
                : `${prices.customizableProfile.monthly}/mo`
            }
          />
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
          className="bg-marineBlue rounded-md border-none text-white text-16px px-5 py-[10px] text-semiBold cursor-pointer hover:opacity-[0.89]"
          onClick={() => setStep((s) => s + 1)}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Addons;
