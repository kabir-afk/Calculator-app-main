import React from "react";
import "./Keypad.css";

function Keypad(props) {
  const { currentTheme, keyPress, resetField, calculate, del } = props;
  function keypress(e) {
    keyPress(e.target.value);
  }
  return (
    <div className={currentTheme}>
      <div className="keypad keypad-bg">
        <button className="key" onClick={keypress} value={"7"}>
          7
        </button>
        <button className="key" onClick={keypress} value={"8"}>
          8
        </button>
        <button className="key" onClick={keypress} value={"9"}>
          9
        </button>
        <button className="key blue-bg" onClick={del}>
          DEL
        </button>
        <button className="key" onClick={keypress} value={"4"}>
          4
        </button>
        <button className="key" onClick={keypress} value={"5"}>
          5
        </button>
        <button className="key" onClick={keypress} value={"6"}>
          6
        </button>
        <button className="key" onClick={keypress} value={"+"}>
          +
        </button>
        <button className="key" onClick={keypress} value={"1"}>
          1
        </button>
        <button className="key" onClick={keypress} value={"2"}>
          2
        </button>
        <button className="key" onClick={keypress} value={"3"}>
          3
        </button>
        <button className="key" onClick={keypress} value={"-"}>
          -
        </button>
        <button className="key" onClick={keypress} value={"."}>
          .
        </button>
        <button className="key" onClick={keypress} value={"0"}>
          0
        </button>
        <button className="key" onClick={keypress} value={"/"}>
          /
        </button>
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
