import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [step, setStep] = useState(1);
  const [planYearly, setPlanYearly] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("Arcade");
  const [addons, setAddons] = useState({
    onlineService: "Online service",
    largerStorage: "Larger storage",
    customizableProfile: "",
  });
  const [formData, setFromData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const contextValue = {
    step,
    setStep,
    formData,
    setFromData,
    planYearly,
    setPlanYearly,
    selectedPlan,
    setSelectedPlan,
    addons,
    setAddons,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
