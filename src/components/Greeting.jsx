import React from "react";
import greeting from "../constants/images/icon-thank-you.svg";

const Greeting = () => {
  return (
    <div className="grid gap-8 place-items-center text-center bg-white px-5 py-7 sm:p-0 rounded-lg shadow mx-4 sm:mx-0 sm:rounded-none sm:shadow-none">
      <div>
        <img src={greeting} alt="thank you icon" />
      </div>

      <div>
        <h1 className="text-[2rem] text-marineBlue font-bold mb-3">
          Thank you!
        </h1>
        <p className="max-w-[45ch] text-coolGray text-[16px] tracking-wide">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
};

export default Greeting;
