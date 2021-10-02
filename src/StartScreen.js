import "./App.css";
import SelectScreen from "./SelectScreen";
import SetObsScreen from "./SetObsScreen";
import WaterFlow from "./WaterFlow";
import WaterSelect from "./WaterSelect";
import WaterSim from "./WaterSim";
import React, { useContext } from "react";
import { Context } from "./Context.js";

function StartScreen() {
  const [context, setContext] = useContext(Context);
  console.log("context Step", context);
  return (
    <div>
      {context.step === 1 && <SelectScreen />}
      {context.step === 2 && <SetObsScreen />}
      {context.step === 3 && <WaterSelect />}
      {context.step === 4 && <WaterFlow />}
      {context.step === 5 && <WaterSim />}
    </div>
  );
}

export default StartScreen;
