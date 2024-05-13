import Image from "next/image";
import React from "react";
import "./SideBar.scss";
import Link from "next/link";

const SOCIAL = [
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/mukundmohan22/",
    className: "fa-brands fa-linkedin-in",
  },
  {
    name: "github",
    url: "https://github.com/mukundmohan22",
    className: "fa fa-github",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/_mukund/",
    className: "fa-brands fa-instagram",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/mukundmohan22",
    className: "fa-brands fa-x-twitter",
  },
];

const SideBar = () => {
  return (
    <div className="sidebar box-shadow">
      <div className="sidebar_header">
        <div className="image-container">
          <Image src="/images/my-pic.png" alt="Icon" fill className={"image"} />
        </div>
        <div className="sidebar_header--title">Mukund Mohan</div>
        <div className="sidebar_header--desc">Full-Stack Developer</div>
        <div className="sidebar_header--social">
          <ul className="sidebar_header--social">
            {SOCIAL.map((el, i) => {
              return (
                <Link href={el.url} key={i} target="_blank">
                  <li>
                    <i className={el.className}></i>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="sidebar_content">
        <ul className="sidebar_content--list">
          <li>
            <div className="sidebar_content--list-Item">
              <i className="fa-solid fa-mobile-screen-button mobile"></i>
              <div className="item-container">
                <div className="label">Phone</div>
                <div className="value">+919480191450</div>
              </div>
            </div>
          </li>
          <li>
            <div className="sidebar_content--list-Item">
              <i className="fa-solid fa-envelope-open-text email"></i>
              <div className="item-container">
                <div className="label">Email</div>
                <div className="value">mukundmohan22@gmail.com</div>
              </div>
            </div>
          </li>
          <li>
            <div className="sidebar_content--list-Item">
              <i className="fa-solid fa-location-dot location"></i>
              <div className="item-container">
                <div className="label">Location</div>
                <div className="value">Bangalore, India</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="sidebar_footer">
        <a href="file/Mukund_Mohan.pdf" download>
          <i className="fa-solid fa-download"></i>
          Download CV
        </a>
        <Link href="/contact">
          <i className="fa-regular fa-address-book"></i>
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
