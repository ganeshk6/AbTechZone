import React from "react";
import Header from "./header";
import Footer from "./footer";
import Image from "next/image";
import aboutImage from "../../images/Lovepik_com-400252803-attend-a-meeting.png";
import DigitalMarking from "../../images/icons/e-commerce-business-retail-digital-marketing-computer-icons-business-4b1f54374e08860b5175e16f91e069f2.png";
import Website from "../../images/icons/website-icon-29496.png";
import Android from "../../images/icons/android-icon-3088.png";
import Sms from "../../images/icons/h71p9i5006rm97j1n96cahhqcp.png";
import ServiceIcon from "../../images/icons/handshake-icon-35510.png";
import HostingIcon from "../../images/icons/Lovepik_com-450071300-aA web hosting vector illustration .png";
import ContactIcon from "../../images/icons8-sent-48.png";
import Head from "next/head";
import Home from "../../../components/Home";
import Link from 'next/link'
const Banner = () => {
  return (
    <>
      <Header />

      {/* Banner start  */}
      <Home />

      {/* About us Banner start  */}

      <div className="aboutBanner">
        <div className="row">
          <div className="col-6 anima">
            <p className="aboutHeading">ABOUT US--</p>
            <h1 className="headingH1">
              AbTechZone, a native start-up company formed in 2023 based in
              Bareilly(U.P)
            </h1>
            <p>
              AbTechZone unified ingenious technologies consist of trademarked
              devices and operations refined over our extensive experience to
              offer numerous by- products that certify reliability expenditure
              control and business refinement.
            </p>
            <div className="row">
              <div className="col-6">
                <p>Digital Marketing</p>
              </div>
              <div className="col-6">
                <p style={{ display: "flex", justifyContent: "right" }}>85%</p>
              </div>
            </div>
            <p className="progressBar1"></p>
            <div className="row">
              <div className="col-6">
                <p>SEO & Backlinks</p>
              </div>
              <div className="col-6">
                <p style={{ display: "flex", justifyContent: "right" }}>90%</p>
              </div>
            </div>
            <p className="progressBar2"></p>
            <div className="row">
              <div className="col-6">
                <p>Design & Development</p>
              </div>
              <div className="col-6">
                <p style={{ display: "flex", justifyContent: "right" }}>95%</p>
              </div>
            </div>
            <p className="progressBar3"></p>
            <button className="button">
              <a href="#">Read More</a>
            </button>
          </div>
          <div className="col-6 col-md-6 bannerAboutImage">
            <Image
              className="aboutImage"
              src={aboutImage}
              alt=""
              height={600}
              width={500}
            />
          </div>
        </div>
      </div>

      {/* Our Services Start  */}

      <div className="bannerServices">
        <p className="heading">--- Our Services ---</p>
        <h1 className="headingBold">What Solutions We Provide</h1>

        <div className="service-container">
          <div className="service-item" data-wow-delay="0.1s">
            <div className="service-icon">
              <Image src={DigitalMarking} height={80} width={80} alt="" />
            </div>
            <h5>Digital Marketing</h5>
            <a className="btn " href="#">
              ➨
            </a>
          </div>

          <div className="service-item" data-wow-delay="0.3s">
            <div className="service-icon">
              <Image src={Website} height={80} width={80} alt="" />
            </div>
            <h5>Web Design</h5>
            <a className="btn" href="#">
              ➨
            </a>
          </div>

          <div className="service-item" data-wow-delay="0.5s">
            <div className="service-icon">
              <Image src={Android} height={80} width={80} alt="" />
            </div>
            <h5>Android/IOS Develpoment</h5>
            <a className="btn" href="#">
              ➨
            </a>
          </div>
          <div className="service-item" data-wow-delay="0.1s">
            <div className="service-icon">
              <Image src={Sms} height={80} width={80} alt="" />
            </div>
            <h5>Bulk Sms Services</h5>
            <a className="btn" href="#">
              ➨
            </a>
          </div>
          <div className="service-item" data-wow-delay="0.3s">
            <div className="service-icon">
              <Image src={ServiceIcon} height={80} width={80} alt="" />
            </div>
            <h5>Consulting Services</h5>
            <a className="btn" href="#">
              ➨
            </a>
          </div>
          <div className="service-item" data-wow-delay="0.5s">
            <div className="service-icon">
              <Image src={HostingIcon} height={80} width={80} alt="" />
            </div>
            <h5>Web Hosting</h5>
            <a className="btn" href="#">
              ➨
            </a>
          </div>
        </div>
      </div>

      {/* Contact us Start  */}

      <div className="contactBanner">
        <p className="helpHeading">--- Need some more help? ---</p>
        <h1 className="contactUsHeading">Contact us!</h1>
        <div className="mailForm">
          <input
            disabled={true}
            type="email"
            class="inputText"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Your Email"
          />
         <Link href='/about'>
         <Image
            className="contactIcon"
            src={ContactIcon}
            height={60}
            width={60}
            alt=""
          />
         </Link>
         
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Banner;
