"use client";
import React, { useRef, useState } from "react";
import Header from "../layout/header";
import Footer from "../layout/footer";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contact.css";
import CircularProgress from "@mui/material/CircularProgress";

const Contact = () => {
  const form = useRef();
  const [loading, setloading] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    setloading(true);
    emailjs
      .sendForm(
        "service_hxiuckj",
        "template_pjrh1rl",
        form.current,
        "YLAHhVeLScaNC6hTa"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message send ");
          toast.success(
            "Your query has been sent our team will be contact you sortly",
            {
              autoClose: 1000,
            }
          );

          setloading(false);
          setInterval(() => {
            window.location.reload();
          }, 1000);
        },
        (error) => {
          console.log(error.text);
          console.log("Query not sent");
          toast.error(error?.response?.data?.msg, { autoClose: 1000 });
          setloading(false);
        }
      );
  };
  return (
    <>
      <Header />
      <div className="contactPage">
        <p>--- Contact Us ---</p>
        <h1>Contact For Any Query</h1>
        <form ref={form} onSubmit={sendEmail} className="contactForm">
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
                name="to_name"
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                name="from_name"
              />
            </div>
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Your Email"
              name="from_name"
            />
          </div>
          <div className="form-group">
            <textarea
              placeholder="Message"
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="5"
              name="message"
            ></textarea>
          </div>
          <div className="form-group">
            <button className="form-control bg-primary">
              {" "}
              {loading ? <CircularProgress /> : "Send"}
            </button>
          </div>
        </form>
      </div>
      <Footer />
      <ToastContainer position="top-center" />
    </>
  );
};

export default Contact;
