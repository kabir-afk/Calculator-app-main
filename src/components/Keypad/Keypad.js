import React from "react";
import "./Keypad.css";

function Keypad(props) {
  function keypress(e) {
    props.keyPress(e.target.value);
  }  
  return (
    <div className={props.currentTheme}>
        <div className="keypad keypad-bg">
          <button className="key" onClick={keypress} value = {"7"}>
            7
          </button>
          <button className="key" onClick={keypress} value = {"8"}>
            8
          </button>
          <button className="key" onClick={keypress} value = {"9"}>
            9
          </button>
          <button className="key blue-bg" onClick={props.del}>
            DEL
          </button>
          <button className="key" onClick={keypress} value = {"4"}>
            4
          </button>
          <button className="key" onClick={keypress} value = {"5"}>
            5
          </button>
          <button className="key" onClick={keypress} value = {"6"}>
            6
          </button>
          <button className="key" onClick={keypress} value = {"+"}>
            +
          </button>
          <button className="key" onClick={keypress} value = {"1"}>
            1
          </button>
          <button className="key" onClick={keypress} value = {"2"}>
            2
          </button>
          <button className="key" onClick={keypress} value = {"3"}>
            3
          </button>
          <button className="key" onClick={keypress} value = {"-"}>
            -
          </button>
          <button className="key" onClick={keypress} value = {"."}>
            .
          </button>
          <button className="key" onClick={keypress} value = {"0"}>
            0
          </button>
          <button className="key" onClick={keypress} value = {"/"}>
            /
          </button>
          <button className="key" onClick={keypress} value = {"*"}>
            x
          </button>
          <button className="key reset blue-bg" type="reset" onClick={props.resetField}>
            RESET
          </button>
          <button className="key equal" onClick={props.calculate}>
            =
          </button>
        </div>
    </div>
  );
}
export default Keypad;
