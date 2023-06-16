import React, { useContext } from "react";
import {
  Sidebar,
  Form,
  SelectPlan,
  Addons,
  Summary,
  Greeting,
} from "./components";
import { AppContext } from "./contexts/AppContext";

function App() {
  const { step } = useContext(AppContext);
  return (
    <div className="w-screen h-screen grid sm:place-items-center bg-magnolia overflow-x-hidden">
      <div className="w-full sm:w-[95%] md:w-[1000px] sm:p-4 rounded-xl sm:bg-white sm:mx-auto sm:my-auto shadow flex flex-col sm:flex-row sm:gap-16 md:gap-28">
        <Sidebar />
        <div className="sm:flex-grow self-center sm:mr-8 md:mr-20 relative top-[-60px] ss:top-[-100px] sm:top-0">
          {step === 1 && <Form />}
          {step === 2 && <SelectPlan />}
          {step === 3 && <Addons />}
          {step === 4 && <Summary />}
          {step === 5 && <Greeting />}
        </div>
      </div>
    </div>
  );
}

export default App;
