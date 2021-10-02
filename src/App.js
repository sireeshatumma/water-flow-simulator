import "./App.css";
import StartScreen from "./StartScreen";
import React from "react";
import { Context } from "./Context.js";
import { useState } from "react";

function App() {
  const [context, setContext] = useState({
    step: 1,
  });
  return (
    <Context.Provider value={[context, setContext]}>
      <div className="App">
        <StartScreen />
      </div>
    </Context.Provider>
  );
}

export default App;
