import Footer from "../layout/footer";
import Header from "../layout/header";
import Image from "next/image";
import "./about.css";
import aboutImage from "../../images/Lovepik_com-400252803-attend-a-meeting.png";

const About = () => {
  return (
    <>
      <Header />
      <div className="aboutBanner">
        <div className="row">
          <div className="col-6 anima">
            <p className="aboutHeading">ABOUT US--</p>
            <h1 className="headingH1">
              AbTechZone IT Solutions, a native start-up company formed in 2023
            </h1>
            <p>
              Tech Jain&apos;s unified ingenious technologies consist of trademarked
              devices and operations refined over our extensive experience to
              offer numerous by- products that certify reliability expenditure
              control and business refinement
            </p>
            <p>
              Our vision is to provide furnished and customized development
              solutions for esteemed macro firms to a micro-enterprise, with the
              choicest quality products and support services in cloud computing
              devops and IT operations.
            </p>
            <p>
              AbTechZone concentrates on helping small setups to rekindle and
              stimulate their effortsfor the evolution of modern age by offering
              customers, wellplanned, productive services with everlasting
              relations.
            </p>
            <button className="button">
              <a href="#">Our Services</a>
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
      {/* <div className="aboutServices">
        <h1 className="headingProficient">Our proficient squad</h1>
        <div className="aboutServices-container">
          <div className="aboutServices-item" data-wow-delay="0.1s">
            <h1>Mr.Vaibhav</h1>
            <h6>Manager (Administration and Operations)</h6>
            <p>
              Mr.Vaibhav, he has abundance of intellectual knowledge of crystal
              clear business intelligence services and customer gratification.
              He is our Manager (Administration and Operations) with
              considerable experience of 07+ Years, providing distinctive web
              solutions to diverse problems. Mr.vaibhav holds a Masters of
              technology (CSE) and successfully led teams of Developers,
              Designers and QAs, to deliver quality projects on time.
            </p>
          </div>
          <div className="aboutServices-item" data-wow-delay="0.1s">
            <h1>Mrs. Smriti</h1>
            <h6>Technical Head</h6>
            <p>
              Mrs. Smriti, she works as our technical head. She is the true
              personification of innovative brains. She holds a masters degree
              in information technology. With her ample experience of 5 + years,
              gives her the practical and thoroughgoing approach towards life
              and propel her to fabricate and illustrate digital solutions for
              business refinement.
            </p>
          </div>

          <div className="aboutServices-item" data-wow-delay="0.1s">
            <h1>Mrs. Shikha</h1>
            <h6>HR department head</h6>
            <p>
              Mrs. Shikha, a quintessential part of our squad, works as our
              human resource department’s head. She holds a masters degree in
              business administration and marketing and loves reading about
              technical advancements. With experience of 8+ years in respective
              discipline, she provides illuminated conclusions to develop high
              class products.
            </p>
          </div>
          <div className="aboutServices-item" data-wow-delay="0.1s">
            <h1>Mr. Tarun</h1>
            <h6>Buisness Head</h6>
            <p style={{ margintop: "40px" }}>
              Mr. Tarun , is an outstanding figurehead ,with an extensive
              experience of about 10 years. He holds masters in business
              administration and marketing. As a business head in Tech Jain, he
              keeps creating innovative pathways for business assortment and
              extension
            </p>
          </div>
        </div>
      </div> */}
      <Footer />
    </>
  );
};

export default About;
