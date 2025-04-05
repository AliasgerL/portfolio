import React, { useEffect, useState } from "react";
import "./darkmode.css";

const DarkMode = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);
  return (
    <div>
      <button className="darkmode" onClick={toggleTheme}>
        <i
          className={
            theme === "light"
              ? "uil uil-moon darkmode__icon"
              : "uil uil-sun darkmode__icon"
          }
        ></i>
      </button>
    </div>
  );
};

export default DarkMode;
