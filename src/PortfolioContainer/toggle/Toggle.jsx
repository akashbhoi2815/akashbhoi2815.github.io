import "./toggle.css";
import Sun from "../img/sun.png";
import Moon from "../img/moon.png";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="t">
     <div>
     <img src={Sun} alt="" className="t-icon" />
      <img src={Moon} alt="" className="t-icon" />
     </div>
      <div
        className="t-button"
        onClick={handleClick}
        style={{ top: theme.state.darkMode ? 0 : 25 }}
      ></div>
    </div>
  );
};

export default Toggle;
