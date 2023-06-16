import React, { useContext } from "react";
import Intro from "./Intro";
import { AppContext } from "../contexts/AppContext";
import { prices } from "../constants/price";

const Summary = () => {
  const { setStep, planYearly, selectedPlan, addons } = useContext(AppContext);

  let plan = selectedPlan.toLowerCase();
  let duration = planYearly ? "yearly" : "monthly";
  let planCost = prices[plan][duration];
  let totalCost = prices[plan][duration];

  Object.keys(addons).map((addon) => {
    if (addons[addon] !== "") {
      totalCost += prices[addon][duration];
    }
  });

  return (
    <div className="flex flex-col justify-between">
      <div className="grid gap-7 md:gap-9 bg-white px-5 py-7 sm:p-0 rounded-lg shadow mx-4 sm:mx-0 sm:rounded-none sm:shadow-none">
        <Intro
          title="Finishing up"
          subTitle="Double-check everything looks OK before confirming"
        />

        <section className=" px-4 py-5 bg-magnolia rounded-md grid gap-3">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-[16px] ss:text-[17px] text-marineBlue font-semiBold">
                {selectedPlan} {planYearly ? "(Yearly)" : "(Monthly)"}
              </h2>
              <button
                type="button"
                className="text-coolGray bg-transparent border-none padding-none text-[14.5px] ss:text-[15px] underline hover:text-marineBlue"
                onClick={() => setStep(2)}
              >
                Change
              </button>
            </div>

            <h2 className="text-[16px] ss:text-[17px] text-marineBlue font-semiBold">
              ${`${planCost}${planYearly ? "/yr" : "/mo"}`}
            </h2>
          </div>

          <div className="h-[1px] w-full bg-lightGray my-2"></div>

          {Object.entries(addons).map(([key, value]) => {
            return value !== "" ? (
              <div key={key} className="flex justify-between">
                <p className="text-[15px] text-coolGray">{value}</p>
                <p className="text-marineBlue text-[15px]">
                  +${`${prices[key][duration]}${planYearly ? "/yr" : "/mo"}`}
                </p>
              </div>
            ) : (
              ""
            );
          })}
        </section>

        <div className="flex justify-between px-4">
          <p className="text-[15px] text-coolGray">
            Total {`${planYearly ? "(per year)" : "(per month)"}`}
          </p>
          <p className="text-purplishBlue text[18px] sm:text-[20px] font-bold">
            +${`${totalCost}${planYearly ? "/yr" : "/mo"}`}
          </p>
        </div>
      </div>

      <div className="mt-12 md:mt-16 flex justify-between items-center bg-white ss:bg-transparent p-5 ss:p-0 w-full">
        <button
          className="text-coolGray font-semiBold text-[16px] border-none bg-transparent hover:text-marineBlue"
          type="button"
          onClick={() => setStep((s) => s - 1)}
        >
          Go Back
        </button>
        <button
          type="submit"
          className="bg-purplishBlue rounded-md border-none text-white text-16px px-6 py-[10px] font-semiBold cursor-pointer hover:opacity-[0.78]"
          onClick={() => setStep((s) => s + 1)}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Summary;
