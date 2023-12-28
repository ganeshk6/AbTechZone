import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="footer" data-wow-delay="0.1s">
        <div className="row">
          <div className="col-3">
            <h5 className="section-title">
              ADDRESS ---<span></span>
            </h5>
            <p className="abcd">
              <Image
                src="/images/icons/location.png"
                alt=""
                height={20}
                width={20}
              />{" "}
              In front of state bank of india road branch , above , TVS , Bike
              Agency Pilibhit Road Bosalpur 262201 Uttar Pradesh India 262201{" "}
            </p>
            <p className="abcd">
              <Image
                src="/images/icons/Call-icon-on-transparent-background-PNG.png"
                alt=""
                height={20}
                width={20}
              />
              +91 7505786956
            </p>
            <p className="abcd">
              <Image
                src="/images/icons/Call-icon-on-transparent-background-PNG.png"
                alt=""
                height={20}
                width={20}
              />
              +91 8923361130
            </p>
            <p className="abcd">
              <Image
                src="/images/icons/Call-icon-on-transparent-background-PNG.png"
                alt=""
                height={20}
                width={20}
              />
              +91 7302678148
            </p>
            <p className="abcd">
              <Image
                src="/images/icons/clipart905970.png"
                alt=""
                height={20}
                width={20}
              />
              info@abtechzone.com
            </p>
            <p className="abcd">
              <Image
                src="/images/icons/clipart4360917.png"
                alt=""
                height={20}
                width={20}
              />
              abtechzone84@gmail.com
            </p>

            <div className="row aa">
              {/* <link></link> */}
              <a target="_blank" className="btn btn-social" href="#">
                <Image
                  src="/images/icons/logo-twitter-png-47486.png"
                  alt=""
                  height={20}
                  width={20}
                />
              </a>
              <a target="_blank" className="btn  btn-social" href="#">
                <Image
                  src="/images/icons/5ecec78673e4440004f09e77.png"
                  alt=""
                  height={20}
                  width={20}
                />
              </a>
              <a target="_blank" className="btn btn-social" href="#">
                <Image
                  src="/images/icons/623dd7d270712bdafc63c38a.png"
                  alt=""
                  height={20}
                  width={20}
                />
              </a>
              <a target="_blank" className="btn  btn-social" href="#">
                <Image
                  src="/images/icons/icons8-linkedin-50 (1).png"
                  alt=""
                  height={20}
                  width={20}
                />
              </a>
            </div>
          </div>
          <div className="col-3 abc">
            <h5 className="section-title">
              QUICK LINK ---<span></span>
            </h5>
            <a className=" btn-link" href="#about">
              ▶ About Us
            </a>
            <a className=" btn-link" href="#newsletter">
              ▶ Contact Us
            </a>
            <a className=" btn-link" href="#">
              ▶ Privacy Policy
            </a>
            <a className=" btn-link" href="#">
              ▶ Terms & Condition
            </a>
            <a className=" btn-link" href="#">
              ▶ Career
            </a>
          </div>

          <div className="col-3">
            <div className="bigLogo">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1068949.6265812637!2d79.18571198219423!3d28.351764877908632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sIn%20front%20of%20state%20bank%20of%20india%20road%20branch%20%2C%20above%20%2C%20TVS%20%2C%20Bike%20Agency%20Pilibhit%20Road%20Bosalpur%20262201%20Uttar%20Pradesh%20India%20262201!5e0!3m2!1sen!2sin!4v1703607373764!5m2!1sen!2sin"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <button className="top">
              <a href="#">⬆</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
