"use client";
import React from "react";

import "./ThemeSwitcher.scss";

const ThemeSwitcher = () => {
  const toggleTheme = (e) => {
    const themeName = "dark-theme";
    const html = document.getElementById("theme-switcher");
    if (e.target.checked) {
      html.classList.remove(themeName);
    } else {
      html.classList.add(themeName);
    }
  };
  return (
    <div className="theme-container">
      {/* <span>Theme Switcher</span> */}
      <label id="switch" className="switch">
        <input type="checkbox" onClick={(e) => toggleTheme(e)} id="slider" />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default ThemeSwitcher;
