import React from "react";
import { Link } from "react-router-dom";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";

const Resetpassword = () => {
  return (
    <>
      <Meta title="Reset Password" />
      <BreadCrumb title="Reset Password" />
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12  ">
              <div className="auth-card">
                <h3 className="align-items-center d-flex justify-content-center">
                  Reset Password
                </h3>
                <form action="" className="">
                  <div>
                    <input
                      type="password"
                      placeholder="password"
                      className="form-control"
                    />
                    <br />
                  </div>
                  <div>
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      className="form-control"
                    />
                    <br />
                  </div>

                  <div className="my-4 d-flex flex-column justify-content-center align-items-center gap-10">
                    <Link to="/" className="button  border-0 fw-bold fs-6">
                      ok
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resetpassword;
