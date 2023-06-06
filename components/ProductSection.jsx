import React from "react";

import icon1 from "../assets/images/it_service/1.jpg";
import icon2 from "../assets/images/it_service/2.jpg";
import icon3 from "../assets/images/it_service/3.jpg";
import icon4 from "../assets/images/it_service/4.jpg";
import icon5 from "../assets/images/it_service/5.jpg";
import icon6 from "../assets/images/it_service/6.jpg";
import icon7 from "../assets/images/it_service/7.jpg";
import icon8 from "../assets/images/it_service/8.jpg";

const products = [
  {
    id: 1,
    imageSrc: icon1,
    title: "Dell Lattitude 5490 i5-8th Gen 8GB RAM 256GB SSD",
    rating: 4,
    oldPrice: "Rs.1500",
    newPrice: "Rs.2500",
  },
  {
    id: 2,
    imageSrc: icon2,
    title: "HP Prebook 440 G4 I5-8th Gen 8GB RAM 256GB SSD",
    rating: 4,
    oldPrice: "Rs.2499",
    newPrice: "Rs.1249",
  },
  {
    id: 3,
    imageSrc: icon3,
    title: "HP Prebook 430 G5 I7 8th Gen 8GB RAM 256GB SSD",
    rating: 4,
    oldPrice: "Rs.2499",
    newPrice: "Rs.1249",
  },

  {
    id: 4,
    imageSrc: icon4,
    title: "HP Elitebook 840 G5 I5 8th Gen 8GB RAM 256GB SSD",
    rating: 4,
    oldPrice: "Rs.1500",
    newPrice: "$25.00",
  },
  {
    id: 5,
    imageSrc: icon5,
    title: "Apple Mackbook Air, 2017 A1466",
    rating: 4,
    oldPrice: "Rs.1500",
    newPrice: "Rs.2500",
  },
  {
    id: 6,
    imageSrc: icon6,
    title: "Dell Latitude 7480 I7 6th Gen 8GB RAM 256GB SSD",
    rating: 4,
    oldPrice: "Rs.2499",
    newPrice: "Rs.1249",
  },
  {
    id: 7,
    imageSrc: icon7,
    title: "Dell Latitude",
    rating: 4,
    oldPrice: "Rs.2499",
    newPrice: "Rs.1249",
  },
  {
    id: 8,
    imageSrc: icon8,
    title: "HP",
    rating: 4,
    oldPrice: "Rs.1500",
    newPrice: "Rs.2500",
  },
];

const ProductList = () => {
  return (
    <div className="section padding_layout_1">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="full">
              <div className="main_heading text_align_center">
                <h2>Our Products</h2>
                <p className="large">
                  We package the products with best services to make you a happy
                  customer.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {products.map((product) => (
            <div
              key={product.id}
              className="col-lg-3 col-md-6 col-sm-6 col-xs-12 margin_bottom_30_all"
            >
              <div className="product_list">
                <div className="product_img">
                  <img
                    className="img-responsive"
                    src={product.imageSrc}
                    alt=""
                  />
                </div>
                <div className="product_detail_btm">
                  <div className="center">
                    <h4>
                      <a href="it_shop_detail.html">{product.title}</a>
                    </h4>
                  </div>
                  <div className="starratin">
                    <div className="center">
                      {[...Array(product.rating)].map((_, index) => (
                        <i
                          key={index}
                          className="fa fa-star"
                          aria-hidden="true"
                        ></i>
                      ))}
                      {[...Array(5 - product.rating)].map((_, index) => (
                        <i
                          key={index}
                          className="fa fa-star-o"
                          aria-hidden="true"
                        ></i>
                      ))}
                    </div>
                  </div>
                  <div className="product_price">
                    <p>
                      <span className="old_price">{product.oldPrice}</span> –{" "}
                      <span className="new_price">{product.newPrice}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
