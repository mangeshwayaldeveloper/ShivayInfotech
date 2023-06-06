import React from 'react';
const InnerBanner = ({ text }) => {
  return (
    <div id="inner_banner" className="section inner_banner_section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="full">
              <div className="title-holder">
                <div className="title-holder-cell text-left">
                  <h1 className="page-title">{text}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerBanner;
