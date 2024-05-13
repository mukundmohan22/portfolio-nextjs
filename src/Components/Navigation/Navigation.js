"use client";
import React, { useEffect, useState } from "react";
import "./Navigation.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";
const NAV_ROUTES = [
  {
    path: "/",
    displayName: "About",
    class: "fa-regular fa-user",
  },
  {
    path: "/resume",
    displayName: "Resume",
    class: "fa-regular fa-file-lines",
  },
  {
    path: "/works",
    displayName: "Works",
    class: "fa-solid fa-briefcase",
  },
  {
    path: "/contact",
    displayName: "Contact",
    class: "fa-regular fa-address-book",
  },
];

const Navigation = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const renderNavigationLinks = (mobileMenu = false) => {
    return (
      <div className="navigation_container">
        <ul>
          {NAV_ROUTES.map((el, i) => {
            return (
              <Link href={el.path} key={i} onClick={() => setMobileMenuOpen(false)}>
                <li
                  className={`navigation_container--item ${mobileMenu ? "flex-direction-row" : ""} ${
                    pathname === el.path ? "selected" : ""
                  }`}
                >
                  <i className={el.class}></i>
                  <span>{el.displayName}</span>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    );
  };
  return (
    <>
      <div className="mobile-menu">
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
      <div className="navigation box-shadow">{renderNavigationLinks()}</div>
      <div className={`popup-overlay ${mobileMenuOpen ? "showPopup" : "hidePopup"}`}>
        <div className="popup box-shadow">
          <div className="popup-close-btn">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <i className="fa-solid fa-x"></i>
            </button>
          </div>
          <div className="popup-content">{renderNavigationLinks(true)}</div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
