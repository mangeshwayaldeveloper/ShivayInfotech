import React from "react";
import InnerBanner from "./Banner";
import LoadingComponent from "./Loader";
import ContactSection from "./ContactSection";
const Contact = () => {
  return (
    <>
      <LoadingComponent />
      <InnerBanner text={"Contact Us"} />
      <ContactSection />
    </>
  );
};

export default Contact;
