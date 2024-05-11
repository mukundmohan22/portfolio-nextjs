import Image from "next/image";
import React from "react";
import "./SideBar.scss";

const SideBar = () => {
  return (
    <div className="sidebar box-shadow">
      <div className="sidebar_header">
        <div className="image-container">
          <Image src="/images/mukund.png" alt="Icon" fill className={"image"} />
        </div>
        <div className="sidebar_header--title">Mukund Mohan</div>
        <div className="sidebar_header--desc">Full-Stack Developer</div>
        <div className="sidebar_header--social">
          <ul className="sidebar_header--social">
            <li>
              <i class="fa-brands fa-linkedin-in"></i>
            </li>
            <li>
              <i class="fa-brands fa-github"></i>
            </li>
            <li>
              <i class="fa-brands fa-instagram"></i>
            </li>

            <li>
              <i class="fa-brands fa-x-twitter"></i>
            </li>
          </ul>
        </div>
      </div>
      <div className="sidebar_content">
        <ul className="sidebar_content--list">
          <li>
            <div className="sidebar_content--list-Item">
              <i class="fa-solid fa-mobile-screen-button mobile"></i>
              <div className="item-container">
                <div className="label">Phone</div>
                <div className="value">+919480191450</div>
              </div>
            </div>
          </li>
          <li>
            <div className="sidebar_content--list-Item">
              <i class="fa-solid fa-envelope-open-text email"></i>
              <div className="item-container">
                <div className="label">Email</div>
                <div className="value">mukundmohan22@gmail.com</div>
              </div>
            </div>
          </li>
          <li>
            <div className="sidebar_content--list-Item">
              <i class="fa-solid fa-location-dot location"></i>
              <div className="item-container">
                <div className="label">Location</div>
                <div className="value">Bangalore, India</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="sidebar_footer">
        <button>
          <i class="fa-solid fa-download"></i>
          Download CV
        </button>
      </div>
    </div>
  );
};

export default SideBar;
