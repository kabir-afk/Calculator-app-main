import "./Screen.css";
import { useState } from "react";

function Screen({ currentTheme, inputValue }) {
  return (
    <div className={`${currentTheme}`}>
      <input
        type="text"
        name="screen"
        id="screen"
        defaultValue={inputValue}
        disabled
      />
    </div>
  );
}

export default Screen;
