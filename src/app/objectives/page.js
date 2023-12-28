import React from "react";
import Header from "../layout/header";
import Footer from "../layout/footer";
import Image from "next/image";
import aboutImage from "../../images/Lovepik_com-400252803-attend-a-meeting.png";
import DigitalMarking from "../../images/icons/e-commerce-business-retail-digital-marketing-computer-icons-business-4b1f54374e08860b5175e16f91e069f2.png";
import "./objectives.css";

const Objectives = () => {
  return (
    <>
      <Header />
      <div className="objectiveBanner">
        <p className="objectives">--- OUR OBJECTIVES ---</p>
        <h1 className="headingOnjective">What are our objectives</h1>
        <div className="row responsivCollumn">
          <div className="col-8 anima ">
            <div className="objectives-item" data-wow-delay="0.1s">
              <div className="objectives-icon">
                <Image src={DigitalMarking} height={80} width={80} alt="" />
              </div>
              <h5>AUTHENTICITY</h5>
              <p>
                AbTechZone IT Solutions is a distinguished company. Our belief
                is to fabricate and maintain an everlasting deep-rooted
                relationship with our clients.
              </p>
            </div>
          </div>
          <div className="col-4 ObjectiveImage">
            <Image
              className="imageObject"
              src={aboutImage}
              alt=""
              height={400}
              width={300}
            />
          </div>
        </div>
        <div className="row responsivCollumn">
          <div className="col-4 ObjectiveImage">
            <Image
              className="imageObject"
              src={aboutImage}
              alt=""
              height={400}
              width={300}
            />
          </div>
          <div className="col-8 anima">
            <div className="objectives-item" data-wow-delay="0.1s">
              <div className="objectives-icon">
                <Image src={DigitalMarking} height={80} width={80} alt="" />
              </div>
              <h5>REMEDIAL PROCESS</h5>
              <p>
                We aim to offer prime solutions in order to obtain your utmost
                gratification and contentment.
              </p>
            </div>
          </div>
        </div>
        <div className="row responsivCollumn">
          <div className="col-8 anima">
            <div className="objectives-item" data-wow-delay="0.1s">
              <div className="objectives-icon">
                <Image src={DigitalMarking} height={80} width={80} alt="" />
              </div>
              <h5>EXPERIENCE</h5>
              <p>
                We are pioneer in maneuvering the critical problems like
                software development, web designing, outsourcing etc.
              </p>
            </div>
          </div>
          <div className="col-4 ObjectiveImage">
            <Image
              className="imageObject"
              src={aboutImage}
              alt=""
              height={400}
              width={300}
            />
          </div>
        </div>
        <div className="row responsivCollumn">
          <div className="col-4 ObjectiveImage">
            <Image
              className="imageObject"
              src={aboutImage}
              alt=""
              height={400}
              width={300}
            />
          </div>
          <div className="col-8 anima">
            <div className="objectives-item" data-wow-delay="0.1s">
              <div className="objectives-icon">
                <Image src={DigitalMarking} height={80} width={80} alt="" />
              </div>
              <h5>MODEST APPROACH</h5>
              <p>
                As a critical thinker AbTechZone always provide a modest and
                feasible approach to our web development services to diverse
                entrepreneurs.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Objectives;
