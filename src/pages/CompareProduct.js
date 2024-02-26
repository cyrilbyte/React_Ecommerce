import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";

const CompareProduct = () => (
  <>
    <Meta title="Blog" />
    <BreadCrumb title="Blogs" />
    <div className="compare-product-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-image">
                <img src="images/watch.jpg" alt="watch" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  Honor T1 7.0 1 GB RAM ROM 7 Inch With Wi-Fi+3G
                </h5>
                <h6 className="price">GHC 100</h6>
                <div className="product-detail">
                  <h5>Brand:</h5>
                  <p>Havels</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default CompareProduct;
