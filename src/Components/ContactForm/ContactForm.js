"use client";
import React, { useState } from "react";
import "./ContactForm.scss";
import ToastMessage from "../Notification/ToastMessage";

const ContactForm = () => {
  const [formValues, setFormValues] = useState({ name: "", email: "", message: "" });

  const onChangeInputFields = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const notify = React.useCallback((type, message) => {
    ToastMessage({ type, message });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("form", formValues);
    const { name, subject = `${formValues.name} - Contacted You`, email, message } = formValues;
    let result;
    try {
      let data = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({ name, subject, email, message }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      result = await data.json();
      notify("success", result.message);
    } catch (error) {
      notify("error", `Failed: ${error.message}`);
    } finally {
      setFormValues({ name: "", email: "", message: "" });
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="contact-form">
        <div className="contact-form--row">
          <input
            type="text"
            placeholder="Name *"
            name="name"
            required
            value={formValues.name}
            onChange={onChangeInputFields}
          />
        </div>
        <div className="contact-form--row">
          <input
            type="email"
            placeholder="Email Address *"
            value={formValues.email}
            name="email"
            required
            onChange={onChangeInputFields}
          />
        </div>
        <div className="contact-form--row">
          <textarea
            type="text"
            placeholder="Your Message *"
            value={formValues.message}
            rows={4}
            onChange={onChangeInputFields}
            name="message"
            required
          />
        </div>
        <div className="contact-form--row">
          <button type="submit">
            <i className="fa-regular fa-paper-plane"></i>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
