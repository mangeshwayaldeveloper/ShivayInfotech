import React from "react";
import { Link } from "react-router-dom";

import phoneIcon from "../assets/images/it_service/phone_icon.png";

const QuoteSection = () => (
  <div className="section" style={{ marginTop: 125 }}>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="full">
            <div className="contact_us_section">
              <div className="call_icon">
                <img src={phoneIcon} alt="#" />
              </div>
              <div className="inner_cont">
                <h2>REQUEST A FREE QUOTE</h2>
                <p>Get answers and advice from people you want it from.</p>
              </div>
              <div className="button_Section_cont">
                <Link className="btn dark_gray_bt" to="/contact">
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default QuoteSection;
