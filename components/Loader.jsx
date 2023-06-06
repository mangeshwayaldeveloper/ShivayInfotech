import React, { useState, useEffect } from "react";
import loaderImage from "../assets/images/loaders/loader_1.png";

const LoadingComponent = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <div className="bg_load" style={{ display: isLoading ? "flex" : "none" }}>
      <img className="loader_animation" src={loaderImage} alt="#" />
    </div>
  );
};

export default LoadingComponent;
