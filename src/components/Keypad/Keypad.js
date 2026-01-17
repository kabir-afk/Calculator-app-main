import React from "react";
import "./Keypad.css";

function Keypad(props) {
  const { currentTheme, keyPress, resetField, calculate, del } = props;
  const keys = [
    "7",
    "8",
    "9",
    "DEL",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "-",
    ".",
    "0",
    "/",
  ];
  function keypress(e) {
    keyPress(e.target.value);
  }
  return (
    <div className={currentTheme}>
      <div className="keypad keypad-bg">
        {keys.map((btn) => (
          <button className="key" onClick={keypress} value={btn}>
            {btn}
          </button>
        ))}
        <button className="key" onClick={keypress} value={"*"}>
          x
        </button>
        <button className="key reset blue-bg" type="reset" onClick={resetField}>
          RESET
        </button>
        <button className="key equal" onClick={calculate}>
          =
        </button>
      </div>
    </div>
  );
}
export default Keypad;
