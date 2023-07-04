import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { EarthCanvas } from "./canvas";
import { instagram, twitter, linkedin, github } from "../assets";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const formRef = useRef();

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_rmocy67",
        "template_eq1m48b",
        {
          from_name: form.name,
          to_name: "Anthony",
          from_email: form.email,
          to_email: "anthonylopez1230@gmail.com",
          message: form.message,
        },
        "758Y7kb8xelwflYXQ"
      )
      .then(() => {
        setLoading(false);
        alert(
          "Thank you for your message. I will get back to you as soon as possible"
        );
        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        alert("Something went wrong, please try again later");
      });
  };
  return (
    <section id="contact" className="section-contact">
      <div className="earth-wraper">
        <EarthCanvas />
      </div>
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
      <footer>
        You can also find me here:
        <div className="footer-icons">
          <a href="https://github.com/aelt95" target="_blank">
            <img src={github} alt="github" />
          </a>
          <a href="https://www.instagram.com/_aelt/" target="_blank">
            <img src={instagram} alt="instagram" />
          </a>
          <a href="https://twitter.com/_aelt" target="_blank">
            <img src={twitter} alt="twitter" />
          </a>
          <a
            href="https://www.linkedin.com/in/anthonylopeztovar/"
            target="_blank"
          >
            <img src={linkedin} alt="linkedin" />
          </a>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
