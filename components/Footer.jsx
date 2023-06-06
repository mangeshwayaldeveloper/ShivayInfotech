import React from "react";

const Footer = () => {
  const socialIcons = [
    { icon: "fa fa-facebook", link: "#" },
    { icon: "fa fa-twitter", link: "#" },
    { icon: "fa fa-google-plus", link: "#" },
  ];

  const additionalLinks = [
    { label: "About us", link: "it_about.html" },
    { label: "Terms and conditions", link: "it_term_condition.html" },
    { label: "Privacy policy", link: "it_privacy_policy.html" },
    { label: "News", link: "it_news.html" },
    { label: "Contact us", link: "it_contact.html" },
  ];

  const services = [
    { label: "Data recovery", link: "it_data_recovery.html" },
    { label: "Computer repair", link: "it_computer_repair.html" },
    { label: "Mobile service", link: "it_mobile_service.html" },
    { label: "Network solutions", link: "it_network_solution.html" },
    { label: "Technical support", link: "it_techn_support.html" },
  ];

  return (
    <footer className="footer_style_2">
      <div className="container-fuild">
        <div className="row">
          <div className="map_section">
            <div id="map"></div>
          </div>
          <div className="footer_blog">
            <div className="row">
              <div className="col-md-6">
                <div className="main-heading left_text">
                  <h2>It Next Theme</h2>
                </div>

                <ul className="social_icons">
                  {socialIcons.map((icon, index) => (
                    <li key={index} className={`social-icon icon-${index}`}>
                      <a href={icon.link}>
                        <i className={icon.icon} aria-hidden="true"></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-md-6">
                <div className="main-heading left_text">
                  <h2>Additional links</h2>
                </div>
                <ul className="footer-menu">
                  {additionalLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.link}>
                        <i className="fa fa-angle-right"></i> {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-md-6">
                <div className="main-heading left_text">
                  <h2>Services</h2>
                </div>
                <ul className="footer-menu">
                  {services.map((service, index) => (
                    <li key={index}>
                      <a href={service.link}>
                        <i className="fa fa-angle-right"></i> {service.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-md-6">
                <div className="main-heading left_text">
                  <h2>Contact us</h2>
                </div>
                <p>
                  Near D.Y.Patil IMR Pimpri,Pune
                  <span style={{ fontSize: "18px" }}>
                    <a href="tel:+9876543210">+8452619009</a>
                  </span>
                </p>
                <div className="footer_mail-section">
                  <form>
                    <fieldset>
                      <div className="field">
                        <input placeholder="Email" type="text" />
                        <button className="button_custom">
                          <i className="fa fa-envelope" aria-hidden="true"></i>
                        </button>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
