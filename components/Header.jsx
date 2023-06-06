import React from "react";
import { Link } from "react-router-dom";
import NavbarMenu from "./NavbarMenu";
import logo from "../assets/images/logos/logo.jpeg";

const TopbarLeft = () => (
  <div className="topbar-left">
    <ul className="list-inline">
      <li>
        <span className="topbar-label">
          <i className="fa  fa-home"></i>
        </span>
        <span className="topbar-hightlight">

          <a href="https://goo.gl/maps/D56x1iW4Dz4P49km9"> Visit our Store</a>
        </span>
      </li>
      <li>
        <span className="topbar-label">
          <i className="fa fa-envelope-o"></i>
        </span>
        <span className="topbar-hightlight">
          <a href="mailto:info@yourdomain.com">ShivaayInfotechPune@gmail.com</a>
        </span>
      </li>
    </ul>
  </div>
);

const SocialIcon = () => {
  const socialIcons = [
    {
      className: "fa fa-facebook",
      href: "https://www.facebook.com/",
      title: "Facebook",
    },
    {
      className: "fa fa-google-plus",
      href: "https://plus.google.com/",
      title: "Google+",
    },
    {
      className: "fa fa-twitter",
      href: "https://twitter.com",
      title: "Twitter",
    },
    {
      className: "fa fa-linkedin",
      href: "https://www.linkedin.com",
      title: "LinkedIn",
    },
    {
      className: "fa fa-instagram",
      href: "https://www.instagram.com",
      title: "Instagram",
    },
  ];

  return (
    <div className="social_icon">
      <ul className="list-inline">
        {socialIcons.map((icon, index) => (
          <li key={index}>
            <a
              className={icon.className}
              href={icon.href}
              title={icon.title}
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const HeaderTop = () => (
  <div className="header_top">
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="full">
            <TopbarLeft />
          </div>
        </div>
        <div className="col-md-4 right_section_header_top">
          <div className="float-left">
            <SocialIcon />
          </div>
          <div className="float-right">
            <div className="make_appo">
              <Link className="btn white_btn" to="/register" target="_blank">
                SIGN IN
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Logo = () => (
  <div className="logo">
    <a href="it_home.html">
      <img src={logo} alt="logo" />
    </a>
  </div>
);

const HeaderComponent = () => (
  <React.Fragment>
    <HeaderTop />
    <div className="header_bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
            <Logo />
          </div>
          <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
            <div className="menu_side">
              <NavbarMenu />
              <div className="search_icon">
                <ul>
                  <li>
                    <a href="#" data-toggle="modal" data-target="#search_bar">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default HeaderComponent;
