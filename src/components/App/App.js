import "./App.css";
import Navbar from "../Navbar/Navbar";
import Screen from "../Screen/Screen";
import Keypad from "../Keypad/Keypad";
import { useState } from "react";

function App() {
  const themes = ["", "theme-2", "theme-3"];
  const [themeIndex, setThemeIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const changeTheme = () => {
    setThemeIndex((themeIndex + 1) % themes.length);
    if (themeIndex == 2) {
      document.body.style.backgroundColor = "hsl(222, 26%, 31%)";
    } else if (themeIndex == 0) {
      document.body.style.backgroundColor = "hsl(0, 0%, 90%)";
    } else if (themeIndex == 1) {
      document.body.style.backgroundColor = "hsl(268, 75%, 9%)";
    }
  };

  const keyPress = (key) => {
    let arr = [];
    arr = inputValue + key;
    let lastChar = arr[arr.length - 1];
    let secLastChar = arr[arr.length - 2];
    if (
      (lastChar == "*" ||
        lastChar == "/" ||
        lastChar == "+" ||
        lastChar == "." ||
        lastChar == "-") &&
      (secLastChar == "*" ||
        secLastChar == "/" ||
        secLastChar == "+" ||
        secLastChar == "." ||
        secLastChar == "-")
    ) {
      handleReset();
    } else {
      const oldValue = (inputValue + key).replace(/,/g, "");
      const formattedValue = oldValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      setInputValue(formattedValue);
    }
  };
  const handleReset = () => {
    setInputValue("");
  };
  const calculate = () => {
    const output = eval(inputValue);
    setInputValue(output);
  };
  const del = () => {
    const output = inputValue.slice(0, inputValue.length - 1);
    setInputValue(output);
  };

  return (
    <>
      <main>
        <div className="hero-container">
          <Navbar changeTheme={changeTheme} currentTheme={themes[themeIndex]} />
          <Screen currentTheme={themes[themeIndex]} inputValue={inputValue} />
          <Keypad
            currentTheme={themes[themeIndex]}
            keyPress={keyPress}
            resetField={handleReset}
            calculate={calculate}
            del={del}
          />
        </div>
      </main>
    </>
  );
}

export default App;
