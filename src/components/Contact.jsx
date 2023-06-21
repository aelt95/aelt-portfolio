import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { EarthCanvas } from "./canvas";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const formRef = useRef();

  const submitHandler = () => {};
  const changeHandler = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });

    console.log(form);
  };
  return (
    <section id="contact" className="section-contact">
      <div className="contact-content">
        <p>Get in touch</p>
        <h3>Contact.</h3>
        <form ref={formRef} onSubmit={submitHandler} className="contact-form">
          <label className="contact-label">
            <span>Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={changeHandler}
              placeholder="Andrej Lopez"
            />
          </label>
          <label className="contact-label">
            <span>Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={changeHandler}
              placeholder="a-lopez@example.com"
            />
          </label>
          <label className="contact-label">
            <span>Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={changeHandler}
              placeholder="Leave your message here."
            />
          </label>
          <button type="submit" className="contact-button">
            {loading ? "Sending ..." : "Send"}
          </button>
        </form>
      </div>
      <div className="earth-wraper">
        <EarthCanvas />
      </div>
    </section>
  );
};

export default Contact;
