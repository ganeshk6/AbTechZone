import React from "react";
import Image from "next/image";
import bannerImage from "../public/images/Lovepik_com-400994281-attend-a-meeting.png";
import Link from "next/link";
function Home() {
  return (
    <>
      <div className="banner" data-wow-delay="0.1s">
        <div className="row bannerRes">
          <div className="col-6">
            <h1 className="headingH1">
              Leveraging the Technology to help Communities Flourish more
              Quickly
            </h1>
            <p>
              A worldwide contribution of digital solutions and networks
              proffered alternatives of methodical and structured solutions for
              well-defined development services
            </p>
            <div className="row">
              <div className="col-6 BannerButton">
                <Link href="/about">
                  <button className="button">Read More</button>
                </Link>
              </div>
              <div className="col-6 BannerButton">
                <Link href="/about">
                  <button className="button">Company Profile</button>{" "}
                </Link>
              </div>
            </div>
          </div>
          <div className="col-6 bannerResCol">
            <Image src={bannerImage} alt="" height={500} width={500} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
