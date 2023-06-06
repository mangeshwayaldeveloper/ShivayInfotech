import React from "react";
import LoadingComponent from "./Loader";
import InnerBanner from "./Banner";
import ServiceProcess from "./ServiceProcessSection";

const Services = () => {
  return (
    <>
      <LoadingComponent />
      <InnerBanner text={"Services"} />
      <ServiceProcess />
    </>
  );
};

export default Services;
