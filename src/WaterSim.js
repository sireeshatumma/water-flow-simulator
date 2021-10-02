import { useContext } from "react";
import { Context } from "./Context.js";
import { Header, Footer } from "./HeaderFooter";
import DisplayMatrix from "./DisplayMatrix";

function WaterSim() {
  const [context, setContext] = useContext(Context);

  let waterArray = context.waterArray;

  return (
    <div>
      <Header message="Water Simulator" />
      <div>
        <DisplayMatrix
          buttonDisabled={true}
          matrixType="waterSim"
          displayArray={waterArray}
        />
      </div>
      <div></div>
      <Footer />
    </div>
  );
}
export default WaterSim;
