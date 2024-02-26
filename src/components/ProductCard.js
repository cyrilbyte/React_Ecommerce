import React from "react";
import { Link, useLocation } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  return (
    <>
      <div
        className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <div className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <img src="images/wish.svg" alt="" />
          </div>
          <div className="product-image">
            <img src="images/watch.jpg" className="img-fluid" alt="" />
            <img src="images/p7.webp" className="img-fluid" alt="" />
          </div>
          <div className="product-details">
            <h6 className="brand">23 Feb, 2024</h6>
            <h5 className="product-title">Classy Wrist Watch</h5>
            <ReactStars
              count={5}
              size={24}
              value="4"
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              ref, but still need the element to resemble a link, use a button
              and change it with appropriate styles. Learn more: valid value to
              be accessible. Provide a valid, navigable address as the href
              value. If you cannot provide a valid href, but still need the
            </p>
            <p className="price">GHC 100.00</p>
          </div>
          <div className="action-bar position-absolute ">
            <div className="d-flex flex-column gap-10">
              <Link>
                <img src="images/prodcompare.svg" alt="compare" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="add-cart" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="add-cart" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
