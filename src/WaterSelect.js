import { useContext } from "react";
import { Context } from "./Context.js";
import DisplayMatrix from "./DisplayMatrix.js";
import { Header, Footer } from "./HeaderFooter";

function WaterSelect() {
  const [context, setContext] = useContext(Context);
  let cols = parseInt(context.cols);
  let waterArray = Array(1)
    .fill(0)
    .map((row1) => new Array(cols).fill(0));

  let w = 0;
  return (
    <div>
      <Header message="Select Water block" />
      <div>
        <DisplayMatrix
          buttonDisabled={false}
          matrixType="waterSelect"
          displayArray={waterArray}
        />
        <DisplayMatrix
          buttonDisabled={true}
          matrixType="obsMatrix"
          displayArray={context.displayArray}
        />
      </div>
      <div>
        <button
          onClick={() => {
            setContext({
              ...context,
              step: 2,
            });
          }}
        >
          Back
        </button>
      </div>
      <Footer />
    </div>
  );
}
export default WaterSelect;
