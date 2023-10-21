import "./Screen.css";
import { useState } from "react";

function Screen(props) {
  return (
    <div className={`${props.currentTheme}`}>
      <input
        type="text"
        name="screen"
        id="screen"
        defaultValue={props.inputValue}
        disabled
      />
    </div>
  );
}

export default Screen;
