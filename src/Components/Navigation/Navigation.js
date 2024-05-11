import React from "react";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <>
      <div className="mobile-menu">
        <i class="fa-solid fa-bars"></i>
      </div>
      <div className="navigation box-shadow">
        <div className="navigation_container">
          <ul>
            <li className="navigation_container--item selected">
              <i class="fa-regular fa-user"></i>
              <span>About</span>
            </li>
            <li className="navigation_container--item">
              <i class="fa-regular fa-file-lines"></i>
              <span>Resume</span>
            </li>
            <li className="navigation_container--item">
              <i class="fa-solid fa-briefcase"></i>
              <span>Works</span>
            </li>
            <li className="navigation_container--item">
              <i class="fa-regular fa-address-book"></i>
              <span>Contact</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navigation;
