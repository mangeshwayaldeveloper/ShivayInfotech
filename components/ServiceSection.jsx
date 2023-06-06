import React from "react";
import icon1 from "../assets/images/it_service/i1.png";
import icon2 from "../assets/images/it_service/i2.png";
import icon3 from "../assets/images/it_service/i3.png";
import icon4 from "../assets/images/it_service/i4.png";

const Section = () => {
  const services = [
    { icon: icon1, title: "Refurbished Desktops" },
    { icon: icon2, title: "Refurbished Laptops" },
    { icon: icon3, title: "Computer Services" },
    { icon: icon4, title: "Smart TV" },
  ];

  return (
    <div className="section padding_layout_1">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="full">
              <div className="main_heading text_align_center">
                <h2>Why Choose Us</h2>
                <p className="large">
                  Fastest repair service with the best price!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
              <div className="full text_align_center margin_bottom_30">
                <div className="center">
                  <div className="icon">
                    <img src={service.icon} alt="#" />
                  </div>
                </div>
                <h4 className="theme_color">{service.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section;
