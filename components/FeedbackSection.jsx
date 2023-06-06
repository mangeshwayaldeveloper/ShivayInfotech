import React from "react";

const CounterItem = ({ iconClass, heading, count }) => (
  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 margin_bottom_50">
    <div className="text_align_right">
      <i className={iconClass}></i>
    </div>
    <div className="text_align_right">
      <p className="counter-heading">{heading}</p>
    </div>
    <h5 className="counter-count">{count}</h5>
  </div>
);

const FeedbackSection = () => {
  const counterItems = [
    { iconClass: "fa fa-smile-o", heading: "Happy Customers", count: 2150 },
    { iconClass: "fa fa-laptop", heading: "Laptop Repaired", count: 1280 },
    { iconClass: "fa fa-desktop", heading: "Computer Repaired", count: 848 },
    { iconClass: "fa fa-windows", heading: "OS Installed", count: 450 },
  ];

  return (
    <div className="section padding_layout_1 light_silver gross_layout right_gross_layout">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="full">
              <div className="main_heading text_align_right">
                <h2>Our Feedback</h2>
                <p className="large">
                  Easy and effective way to get your device repaired.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row counter">
          <div className="col-md-4"></div>
          <div className="col-md-8">
            <div className="row">
              {counterItems.map((item, index) => (
                <CounterItem
                  key={index}
                  iconClass={item.iconClass}
                  heading={item.heading}
                  count={item.count}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackSection;
