import { useState, useContext } from "react";
import { Context } from "./Context.js";
import { Header, Footer } from "./HeaderFooter";
import DisplayMatrix from "./DisplayMatrix";

function SetObsScreen() {
  const [context, setContext] = useContext(Context);

  return (
    <div>
      <Header message="Set Obstacles" />
      <div style={{ justifyContent: "space-between" }}>
        ROW:{context.rows}
        COL:{context.cols}
        OBS:{context.obs}
        <div>
          <div
            style={{ fontStyle: "italic", color: "green", fontWeight: "bold" }}
          >
            Click to set Obstacles
          </div>

          <div>
            <DisplayMatrix
              displayArray={context.displayArray}
              buttonDisabled={false}
              matrixType="obsMatrix"
            />
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            setContext({
              ...context,
              step: 1,
            });
          }}
        >
          Back
        </button>
        <button
          onClick={() => {
            setContext({
              ...context,
              step: 3,
            });
          }}
        >
          Next
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default SetObsScreen;
