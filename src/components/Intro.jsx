import React from "react";

const Intro = ({ title, subTitle }) => {
  return (
    <div>
      <h1 className="text-[1.6rem] md:text-[2rem] text-marineBlue font-bold">
        {title}
      </h1>
      <p className="text-[16px] md:text-[17px] font-normal text-coolGray tracking-wide">
        {subTitle}
      </p>
    </div>
  );
};

export default Intro;
