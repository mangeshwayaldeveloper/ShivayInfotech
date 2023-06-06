import React from "react";
import image from "../assets/images/it_service/post-06.jpg";
import LoadingComponent from "./Loader";
import InnerBanner from "./Banner";
import QuoteSection from "./QuoteSection";

const WhatWeDoList = () => {
  return (
    <ul>
      <li>
        <i className="fa fa-check-circle"></i>Provide Services
      </li>
      <li>
        <i className="fa fa-check-circle"></i>Solve customers' problems
      </li>
      <li>
        <i className="fa fa-check-circle"></i>Provide products at low prices
      </li>
    </ul>
  );
};

const AboutSection = () => {
  return (
    <div className="section padding_layout_1">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="full">
              <div className="main_heading text_align_center">
                <h2>We are Leading Company</h2>
                <p className="large">Fastest repair service with best price!</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row about_blog">
          <div className="col-lg-6 col-md-6 col-sm-12 about_cont_blog">
            <div className="full text_align_left">
              <h3>What we do</h3>
              <WhatWeDoList />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 about_feature_img padding_right_0">
            <div className="full text_align_center">
              <img className="img-responsive" src={image} alt="#" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutServiceSection = () => {
  const services = [
    {
      icon: "fa fa-wrench",
      title: "Honest Services",
    },
    {
      icon: "fa fa-cog",
      title: "Secure Payments",
    },
    {
      icon: "fa fa-history",
      title: "Expert Team",
    },
    {
      icon: "fa fa-heart-o",
      title: "Affordable Services",
    },
  ];

  return (
    <div className="section padding_layout_1 light_silver gross_layout">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="full">
              <div className="main_heading text_align_left">
                <h2>About Service</h2>
                <p className="large">
                  Easy and effective way to get your device repaired.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              {services.map((service, index) => (
                <div className="col-md-6" key={index}>
                  <div className="full">
                    <div className="service_blog_inner2">
                      <div className="icon text_align_left">
                        <i className={service.icon}></i>
                      </div>
                      <h4 className="service-heading">{service.title}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <>
      <LoadingComponent />
      <InnerBanner text={"About Us"} />
      <AboutSection />
      <AboutServiceSection />
      <QuoteSection />
    </>
  );
};

export default About;
