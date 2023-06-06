import React from "react";
import ServiceSection from "./ServiceSection";
import ServiceProcess from "./ServiceProcessSection";
import ProductList from "./ProductSection";
import FeedbackSection from "./FeedbackSection";
import LoadingComponent from "./Loader";
import QuoteSection from "./QuoteSection";
import InnerBanner from "./Banner";

const Body = () => {
  return (
    <>
      <LoadingComponent />
      <InnerBanner text={"Home"} />
      <ServiceSection />
      <ServiceProcess />
      <ProductList />
      <FeedbackSection />
      <QuoteSection />
    </>
  );
};

export default Body;
