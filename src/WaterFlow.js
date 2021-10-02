import { useContext } from "react";
import { Context } from "./Context.js";
import { Header, Footer } from "./HeaderFooter";
import DisplayMatrix from "./DisplayMatrix";

function WaterFlow() {
  const [context, setContext] = useContext(Context);
  let cols = parseInt(context.cols);
  let rows = parseInt(context.rows);
  let allNums = context.allNums;
  let waterClick = context.waterClick;
  let blueColorArray = [];
  let left = 0;
  let right = 0;
  let waterArray = Array(rows + 1)
    .fill(0)
    .map((row1) => new Array(cols).fill(0));

  let w = 0;
  allNums = allNums.map((num) => {
    return (num = num + 10);
  });
  for (let i = 0; i < cols; i++) {
    allNums.push(i);
  }
  const flowSide = (waterClick) => {
    //go left
    left = waterClick - 1;
    if (allNums.includes(left) && !blueColorArray.includes(left)) {
      blueColorArray.push(left);
      initiateFlow(left);
    }
    right = waterClick + 1;
    if (allNums.includes(right) && !blueColorArray.includes(right)) {
      blueColorArray.push(right);
      initiateFlow(right);
    }
    return waterClick + 1;
  };

  const flowDown = (waterClick) => {
    waterClick += 10;
    if (allNums.includes(waterClick)) {
      blueColorArray.push(waterClick);
    }
    return waterClick;
  };

  const handleFlow = (waterClick) => {
    waterClick = parseInt(waterClick);
    if (String(waterClick).length === 1) {
      blueColorArray.push(waterClick);
      waterClick += 10;
    }
    if (allNums.includes(waterClick)) {
      blueColorArray.push(waterClick);
      //go down
      waterClick = flowDown(waterClick);
      if (maxNum - waterClick > 0 && maxNum - waterClick < 10) {
        if (!allNums.includes(waterClick)) {
          waterClick = flowSide(waterClick - 10);
        }
      }
    } else {
      // go sides
      waterClick = flowSide(waterClick - 10);
    }

    return waterClick;
  };
  let maxNum = Math.max(...allNums);
  const initiateFlow = (wc) => {
    while (wc <= maxNum) {
      let returnedNum = handleFlow(wc);
      if (allNums.includes(returnedNum)) {
        wc = returnedNum + 10;
      } else {
        wc = returnedNum;
      }
    }
  };
  if (waterClick !== undefined) {
    initiateFlow(waterClick);
  }

  return (
    <div>
      <Header message="Water Flow" />
      <div>
        <DisplayMatrix
          buttonDisabled={true}
          matrixType="waterFlow"
          displayArray={waterArray}
          allNums={allNums}
        />
      </div>
      <div>
        <button
          onClick={() => {
            setContext({
              ...context,
              step: 5,
              blueColorArray,
              waterArray,
              allNums: allNums,
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
export default WaterFlow;
