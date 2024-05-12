"use client";
import React from "react";
import "./ContactForm.scss";

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log("formData", JSON.stringify(formData));
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="contact-form">
        <div className="contact-form--row">
          <input type="text" placeholder="Name" name="name" required />
        </div>
        <div className="contact-form--row">
          <input type="text" placeholder="Email Address" name="email" required />
        </div>
        <div className="contact-form--row">
          <textarea type="text" placeholder="Your Message" rows={2} name="message" required />
        </div>
        <div className="contact-form--row">
          <button type="submit">
            <i class="fa-regular fa-paper-plane"></i>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
