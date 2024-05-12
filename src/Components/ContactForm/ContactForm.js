"use client";
import React from "react";
import "./ContactForm.scss";

const ContactForm = () => {
  return (
    <div className="contact-form">
      <div className="contact-form--row">
        <input type="text" placeholder="Name" />
      </div>
      <div className="contact-form--row">
        <input type="text" placeholder="Email Address" />
      </div>
      <div className="contact-form--row">
        <input type="text" placeholder="Your Message" aria-rowspan={5} aria-colspan={50} />
      </div>
      <div className="contact-form--row">
        <button type="submit">
          <i class="fa-regular fa-paper-plane"></i>
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
