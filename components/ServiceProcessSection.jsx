import React from "react";

import icon1 from "../assets/images/it_service/si1.png";
import icon2 from "../assets/images/it_service/si2.png";
import icon3 from "../assets/images/it_service/si3.png";
import icon4 from "../assets/images/it_service/si4.png";
import icon5 from "../assets/images/it_service/si5.png";
import icon6 from "../assets/images/it_service/si6.png";

const ServiceItem = ({ icon, title, description }) => (
  <div className="col-md-4">
    <div className="full">
      <div className="service_blog_inner">
        <div className="icon text_align_left">
          <img src={icon} alt="#" />
        </div>
        <h4 className="service-heading">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  </div>
);

const ServiceProcess = () => {
  const services = [
    {
      icon: icon1,
      title: "Fast service",
    },
    {
      icon: icon2,
      title: "Secure payments",
    },
    {
      icon: icon3,
      title: "Expert team",
    },
    {
      icon: icon4,
      title: "Affordable services",
    },
    {
      icon: icon5,
      title: "90 Days warranty",
    },
    {
      icon: icon6,
      title: " Best Service Provider",
    },
  ];

  return (
    <div className="section padding_layout_1 light_silver gross_layout">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="full">
              <div className="main_heading text_align_left">
                <h2>Service Process</h2>
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
                <ServiceItem
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceProcess;
