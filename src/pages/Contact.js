import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { AiOutlineHome } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { LuMail } from "react-icons/lu";
import { AiOutlineInfo } from "react-icons/ai";

const Contact = () => {
  return (
    <>
      <Meta title="Contact Us" />
      <BreadCrumb title="Contact Us" />
      <div className="contact-wrapper home-wrapper-2 py-5">
        <div className="container-xxl ">
          <div className="row">
            <div className="col-12">
              <iframe
                title="This is a unique title"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.1980456291813!2d-0.1946274240156616!3d5.684493132342138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9c538f466553%3A0x85eda65cc8755a9b!2sReiss%20Jct%20Rd!5e0!3m2!1sen!2sgh!4v1708692040574!5m2!1sen!2sgh"
                width="600"
                height="450"
                className="w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title">Contact us</h3>
                  <form action="" className="d-flex flex-column gap-20">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Password"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="4"
                        type="text"
                        className="w-100 form-control"
                        placeholder="Comments"
                      ></textarea>
                    </div>
                    <div>
                      <button className="button border-0">Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get In Touch With</h3>
                  <ul className="ps-0">
                    <div className="align-items-center">
                      <li className="mb-3  d-flex gap-15">
                        <AiOutlineHome className="fs-5" />
                        <address>
                          Hno:56, Near Palace Church International, Reiss
                          Junction , Madina, Accra.
                        </address>
                      </li>
                    </div>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <BiPhoneCall className="fs-5" />
                      <a href="tel:+233558446518">(+233) 558446518</a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <LuMail className="fs-5" />
                      <a href="mailto:caxinc1@gmail.com">caxinc1@gmail.com</a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiOutlineInfo className="fs-5" />
                      <p className="mb-0">Mon - Sat : 9am to 7pm</p>
                      <p className="mb-0">Sunday : Closed</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
