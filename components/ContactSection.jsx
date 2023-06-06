import React from "react";

const ContactSection = () => (
  <div className="section padding_layout_1">
    <div className="container">
      <div className="row">
        <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-xs-12"></div>
        <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 adress_cont margin_bottom_30">
              <h4>Address One</h4>
              <div className="information_bottom left-side margin_bottom_20_all"></div>
              <div className="information_bottom left-side margin_bottom_20_all">
                <div className="icon_bottom">
                  <i className="fa fa-user" aria-hidden="true"></i>
                </div>
                <div className="info_cont">
                  <h4>8452619009</h4>
                  <p>Mon-Fri 8:30am-6:30pm</p>
                </div>
              </div>
              <div className="information_bottom left-side">
                <div className="icon_bottom">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </div>
                <div className="info_cont">
                  <h4>dypimr@gmail.com</h4>
                  <p>24/7 online support</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 adress_cont margin_bottom_30_all">
              <h4>Address Two</h4>
              <div className="information_bottom left-side margin_bottom_20_all"></div>
              <div className="information_bottom left-side margin_bottom_20_all">
                <div className="icon_bottom">
                  <i className="fa fa-user" aria-hidden="true"></i>
                </div>
                <div className="info_cont">
                  <h4>8452619009</h4>
                  <p>Mon-Fri 8:30am-6:30pm</p>
                </div>
              </div>
              <div className="information_bottom left-side">
                <div className="icon_bottom">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </div>
                <div className="info_cont">
                  <h4>dypimr@gmail.com</h4>
                  <p>24/7 online support</p>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 contant_form">
              <h4>GET IN TOUCH</h4>
              <p>
                Our goal is to provide the best customer service and to answer
                all of your questions in a timely manner.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ContactSection;
