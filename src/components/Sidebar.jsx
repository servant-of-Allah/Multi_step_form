import React, { useEffect, useState } from "react";
import sidebarDesktop from "../constants/images/bg-sidebar-desktop.svg";
import sidebarMobile from "../constants/images/bg-sidebar-mobile.svg";
import Step from "./Step";

const Sidebar = () => {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 800) {
        setIsDesktop(true);
      } else {
        setIsDesktop(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // call the handler once when the component mounts

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative sm:self-center">
      <img
        src={isDesktop ? sidebarDesktop : sidebarMobile}
        alt="sidebar"
        className="w-full max-h-[300px] sm:max-h-full object-cover"
      />
      <div className="absolute flex gap-6 w-full justify-center items-center top-10 sm:w-max sm:left-8 sm:grid sm:gap-6">
        <Step serial={1} name="YOUR INFO" />
        <Step serial={2} name="SELECT PLAN" />
        <Step serial={3} name="ADD-ONS" />
        <Step serial={4} name="SUMMARY" />
      </div>
    </div>
  );
};

export default Sidebar;
