import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <>
      <Meta title="Forget Password" />
      <BreadCrumb title="Forget Password" />
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12  ">
            <div className="forgotpassword-card">
              <h3 className="align-items-center d-flex justify-content-center mb- 3">
                Reset Your Password
              </h3>
              <h4 className="mb-3 mt-2">
                we will send you an email to reset your password
              </h4>
              <form action="" className="">
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="form-control"
                  />
                  <br />
                </div>

                <div></div>
                <div className="my-4 d-flex flex-column justify-content-center align-items-center gap-10">
                  <button
                    className="button  border-0 fw-bold fs-6"
                    type="submit"
                  >
                    Submit
                  </button>
                  <Link to="/login" className="text-dark">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
