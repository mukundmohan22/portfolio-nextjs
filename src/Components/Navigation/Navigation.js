"use client";
import React, { useState } from "react";
import "./Navigation.scss";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const renderNavigationLinks = (mobileMenu = false) => {
    return (
      <div className="navigation_container">
        <ul>
          <li className={`navigation_container--item selected ${mobileMenu ? "flex-direction-row" : ""}`}>
            <i className="fa-regular fa-user"></i>
            <span>About</span>
          </li>
          <li className={`navigation_container--item selected ${mobileMenu ? "flex-direction-row" : ""}`}>
            <i className="fa-regular fa-file-lines"></i>
            <span>Resume</span>
          </li>
          <li className={`navigation_container--item selected ${mobileMenu ? "flex-direction-row" : ""}`}>
            <i className="fa-solid fa-briefcase"></i>
            <span>Works</span>
          </li>
          <li className={`navigation_container--item selected ${mobileMenu ? "flex-direction-row" : ""}`}>
            <i className="fa-regular fa-address-book"></i>
            <span>Contact</span>
          </li>
        </ul>
      </div>
    );
  };
  return (
    <>
      <div className="mobile-menu">
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <i className="fa-solid fa-x"></i> : <i className="fa-solid fa-bars"></i>}
        </button>
      </div>
      <div className="navigation box-shadow">{renderNavigationLinks()}</div>
      <div className="popup">
        <div className="popup-overlay">
          <div className="popup-content">{renderNavigationLinks(true)}</div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
