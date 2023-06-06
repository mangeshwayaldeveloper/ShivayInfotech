import React from "react";
import ProductList from "./ProductSection";
import LoadingComponent from "./Loader";
import InnerBanner from "./Banner";

const Shop = () => {
  return (
    <>
      <LoadingComponent />
      <InnerBanner text={"Products"} />
      <ProductList />
    </>
  );
};

export default Shop;
