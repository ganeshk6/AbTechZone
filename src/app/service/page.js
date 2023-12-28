
import React from "react";
import Header from "../layout/header";
import Footer from "../layout/footer";
import Image from "next/image";
import DigitalMarking from "../../images/icons/e-commerce-business-retail-digital-marketing-computer-icons-business-4b1f54374e08860b5175e16f91e069f2.png";

import "./services.css";

const Service = () => {
  return (
    <>
      <Header />
      <div className="bannerServices">
        <p className="heading">--- Our Services ---</p>
        <h1 className="headingBold">What Solutions We Provide</h1>
        <div className="service-container">
          <div className="service-item" data-wow-delay="0.1s">
            <div className="service-icon">
              <Image src={DigitalMarking} height={80} width={80} alt="" />
            </div>
            <h5>Digital Marketing</h5>
            <p>
              As we are heading towards a high tech world there is a note worthy
              switch in the modes companies sell their products. Digital
              promoting is one of the first steps for each and every micro and
              macro company.. For campaigning, marketing and illustration of any
              product virtual presentation is utmost requirement.
            </p>
          </div>
          <div className="service-item" data-wow-delay="0.3s">
            <div className="service-icon">
              <Image src={DigitalMarking} height={80} width={80} alt="" />
            </div>
            <h5>Web Design</h5>
            <p>
              We put forward a business remedy emphasizing crystal clear ideas
              on the customer’s need all on bargain basement.We are extremely
              peculiar website Development Company presenting leading edge web
              development services to lay out upper level customer service to
              the wide range of our clients.
            </p>
          </div>
          <div className="service-item" data-wow-delay="0.5s">
            <div className="service-icon">
              <Image src={DigitalMarking} height={80} width={80} alt="" />
            </div>
            <h5>Android/IOS Develpoment</h5>
            <p>
              TechJain is an omnibus of multi-skilled mobile application
              benefits in Bhopal. We come up with top grade quality IOS
              applications in short time span and appropriate costs. Our team is
              formed of learned individuals with application creating climate,
              APIs and SDKs.
            </p>
          </div>
          <div className="service-item" data-wow-delay="0.1s">
            <div className="service-icon">
              <Image src={DigitalMarking} height={80} width={80} alt="" />
            </div>
            <h5>Bulk Sms Services</h5>
            <p>
              As it mentions indicatively to the sending of wide ranging number
              of SMS to phones of a prearranged receivers.Tech Jain facilitates
              services like sending and receiving bulk SMS with easy to use web
              portal,comprehensive APIs,plugins and more.
            </p>
          </div>
          <div className="service-item" data-wow-delay="0.3s">
            <div className="service-icon">
              <Image src={DigitalMarking} height={80} width={80} alt="" />
            </div>
            <h5>Consulting Services</h5>
            <p>
              Our intellectual team is excellent in providing consulting
              services to specific organizations, keeping in mind, what they
              need direly. We work with high standards plans and in such a
              strategic way so that one can produce high class products.
            </p>
          </div>
          <div className="service-item" data-wow-delay="0.5s">
            <div className="service-icon">
              <Image src={DigitalMarking} height={80} width={80} alt="" />
            </div>
            <h5>Web Hosting</h5>
            <p>
              Web hosting is a process of hiring and purchasing space to
              accommodate a website on the World Wide Web that permits companies
              and individual to post a website or web page onto the internet.
              Tech Jain provides this service in a budget friendly way.
            </p>
          </div>
          <div className="service-item" data-wow-delay="0.5s">
            <div className="service-icon">
              <Image src={DigitalMarking} height={80} width={80} alt="" />
            </div>
            <h5>Domain Registration</h5>
            <p>
              Domain name is the nucleus of any web project. Your domain name
              represents the important segment of any company’s foundation.
              Domain name registration is the procedure of registering a domain
              name, which pick out one or more IP addresses with a distinct name
              and use in URLs to single out specific websites. Tech Jain offers
              all domain extension in economical pricing.
            </p>
          </div>
          <div className="service-item" data-wow-delay="0.5s">
            <div className="service-icon">
              <Image src={DigitalMarking} height={80} width={80} alt="" />
            </div>
            <h5>Outsourcing</h5>
            <p>
              At TechJain, we offer higher ranking quality business brains that
              qualify to make illuminated conclusions. Our skillful squad
              comprises white collar, technicalprofessionals, with managerial
              traits and available for long term and brief projects
            </p>
          </div>
          <div className="service-item" data-wow-delay="0.5s">
            <div className="service-icon">
              <Image src={DigitalMarking} height={80} width={80} alt="" />
            </div>
            <h5>IT Hardware and Softwarre Support</h5>
            <p>
              TechJain dispense custom IT hardware and software support and
              services to meet the requirements of different companies and
              organizations with calculated and tactical strategies.
            </p>
          </div>
        </div>
      </div>

      <div className="serviceHiring">
        <h1>Why hire us?</h1>
        <div className="serviceHiring-item" data-wow-delay="0.5s">
          <p>
            Working with zeal and collaborating with others is one of our
            greatest strengths. Our team will be equitably helping you to attain
            your desired aim.
          </p>
        </div>
        <div className="serviceHiring-item" data-wow-delay="0.5s">
          <p>
            Hiring us gives you tremendous amount of gains to make you attain
            your specific Goals.
          </p>
        </div>
        <div className="serviceHiring-item" data-wow-delay="0.5s">
          <p>
            We plan each and every aspect beforehand as per requirements and
            needs of our clients. During the process, we provide you daily
            updates through preferred modes of communication.
          </p>
        </div>
        <div className="serviceHiring-item" data-wow-delay="0.5s">
          <p>
            We are exploring new techniques of making the journey of any product
            development trouble free. Our join forces, preservation, and
            reformed services make your journey with us exhilarating.
          </p>
        </div>
      </div>

      <div className="contactBanner">
        <p className="helpHeading">--- Need some more help? ---</p>
        <h1 className="contactUsHeading">Contact us!</h1>
        <div className="mailForm">
          <input
            type="email"
            class="inputText"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Your Email"
          />
          {/* <Link href={} /> */}
          {/* <Image
            className="contactIcon"
            src={ContactIcon}
            height={60}
            width={60}
            alt=""
          /> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Service;
