import React from "react";
import { Link } from "react-router-dom";

const NavbarMenu = () => {
  const menuItems = [
    {
      label: "Home",
      path: "/",
      subItems: [{ label: "Home Page", path: "/home" }],
    },
    {
      label: "About Us",
      path: "/about",
    },
    {
      label: "Services",
      path: "/services",
      subItems: [{ label: "Services list", path: "/service-list" }],
    },
    {
      label: "Shop",
      path: "/shop",
      subItems: [
        { label: "Shop List", path: "/shop-list" },
        { label: "Shopping Cart", path: "/shopping-cart" },
        { label: "Checkout", path: "/checkout" },
      ],
    },
    {
      label: "Contact",
      path: "/contact",
      subItems: [{ label: "Contact Page 1", path: "/contact-page-1" }],
    },
  ];

  const renderMenuItems = (items) => {
    return items.map((item, index) => (
      <li key={index}>
        <Link to={item.path}>{item.label}</Link>
      </li>
    ));
  };

  return (
    <div id="navbar_menu">
      <ul className="first-ul">{renderMenuItems(menuItems)}</ul>
    </div>
  );
};

export default NavbarMenu;
