import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newsletter" />
                <h2 className="mb-0 text-white"> Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1 "
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2 " id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                {" "}
                <div className="footer-links d-flex flex-column">
                  <address className="text-white fs-6">
                    W3 Stores <br />
                    off madina express way greater Accra
                    <br /> PinCode: 11223321
                  </address>
                  <a
                    href="tel:+233558446518"
                    className="fs-6 mt-0  mb-3 d-block  text-white"
                  >
                    +233558446518
                  </a>
                  <a
                    href="mailto:caxinc1@gmail.com"
                    className="fs-6 mt-0 mb-3 d-block text-white"
                  >
                    caxinc1@gmail.com
                  </a>
                  <div className="social-icons d-flex align-items-center gap-30 mt-3">
                    <a href="#">
                      <BsGithub className="text-white fs-5" />
                    </a>
                    <a href="#">
                      <BsLinkedin className="text-white fs-6" />
                    </a>
                    <a href="#">
                      <BsYoutube className="text-white fs-5" />
                    </a>
                    <a href="#">
                      <BsInstagram className="text-white fs-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div>
                <div className="footer-links d-flex flex-column">
                  <Link className="text-white py-2 mb-1" to="">
                    Privacy Policy
                  </Link>
                  <Link className="text-white py-2 mb-1" to="">
                    Refund Policy
                  </Link>
                  <Link className="text-white py-2 mb-1" to="">
                    Shipping Policy
                  </Link>
                  <Link className="text-white py-2 mb-1" to="">
                    Terms & Conditions
                  </Link>
                  <Link className="text-white py-2 mb-1" to="">
                    Blogs
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div>
                <div className="footer-links d-flex flex-column">
                  <Link className="text-white py-2 mb-1" to="">
                    Search
                  </Link>
                  <Link className="text-white py-2 mb-1" to="">
                    About us
                  </Link>
                  <Link className="text-white py-2 mb-1" to="">
                    Faq
                  </Link>
                  <Link className="text-white py-2 mb-1" to="">
                    Contact
                  </Link>
                  <Link className="text-white py-2 mb-1" to="">
                    Size Chart
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1" to="">
                  Laptops
                </Link>
                <Link className="text-white py-2 mb-1" to="">
                  Headphones
                </Link>
                <Link className="text-white py-2 mb-1" to="">
                  Tablets
                </Link>
                <Link className="text-white py-2 mb-1" to="">
                  Smart Watches
                </Link>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()} - All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
