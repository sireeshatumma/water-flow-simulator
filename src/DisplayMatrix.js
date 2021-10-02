import { useState, useContext } from "react";
import { Context } from "./Context.js";
function DisplayMatrix(props) {
  const [context, setContext] = useContext(Context);
  const [buttonDisabled, setButtonDisabled] = useState(props.buttonDisabled);
  const newNums = context.allNums;
  let obs = parseInt(context.obs);
  let displayArray = props.displayArray;
  let allNums = props.allNums;
  if (allNums === undefined) {
    allNums = context.allNums;
  }

  let blueColorArray = context.blueColorArray;
  const waterClick = context.waterClick;
  let x = 0;
  let matrixType = props.matrixType;
  console.log("matrixType: " + matrixType);
  console.log("displayArray: " + displayArray);
  const handleClick = (rowIndex, colIndex) => {
    if (matrixType === "obsMatrix") {
      obs = obs - 1;
      console.log("obs ", obs);
      if (obs === 0) {
        setButtonDisabled(true);
      }
      let num = parseInt(String(rowIndex) + String(colIndex));
      if (newNums.includes(num)) {
        newNums.splice(newNums.indexOf(num), 1);
      }
      setContext({
        ...context,
        allNums: newNums,
        obs: obs,
      });
    } else if (matrixType === "waterSelect") {
      let w = parseInt(String(rowIndex) + String(colIndex));
      setContext({
        ...context,
        waterClick: w,
        step: 4,
      });
    }
  };
  const handleStyle = (x) => {
    let color = "";
    if (matrixType === "obsMatrix") {
      newNums.includes(x) ? (color = "lightblue") : (color = "pink");
    } else if (matrixType === "waterSelect") {
      color = "blue";
    } else if (matrixType === "waterFlow") {
      x === waterClick
        ? (color = "blue")
        : allNums.includes(x)
        ? (color = "lightblue")
        : (color = "pink");
    } else if (matrixType === "waterSim") {
      blueColorArray.includes(x)
        ? (color = "blue")
        : allNums.includes(x)
        ? (color = "lightblue")
        : (color = "pink");
    }
    return color;
  };

  return displayArray.map((row1, rowIndex) => {
    return (
      <div>
        {row1.map((col1, colIndex) => {
          x = parseInt(String(rowIndex) + String(colIndex));
          return (
            <button
              disabled={buttonDisabled}
              style={{ backgroundColor: handleStyle(x) }}
              className="flip-box-inner"
              key={x}
              onClick={() => {
                handleClick(rowIndex, colIndex);
              }}
            ></button>
          );
        })}
      </div>
    );
  });
}
export default DisplayMatrix;
