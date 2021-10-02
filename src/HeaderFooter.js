import "./App.css";
import { useContext } from "react";
import { Context } from "./Context.js";
export const Header = (props) => {
  const [context, setContext] = useContext(Context);
  return (
    <div>
      <div className="header">{props.message}</div>
      <div className="homeButton">
        <button
          value="Home"
          onClick={() => {
            setContext({
              ...context,
              step: 1,
              blueColorArray: [],
              waterArray: [],
              allNums: [],
            });
          }}
        >
          Home
        </button>
      </div>
    </div>
  );
};

export const Footer = (props) => {
  return <div className="header">{props.message}</div>;
};
