import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Meta title="Login" />
      <BreadCrumb title="Login" />
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12  ">
            <div className="auth-card">
              <h3 className="align-items-center d-flex justify-content-center">
                Login
              </h3>
              <form action="" className="">
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="form-control"
                  />
                  <br />
                </div>
                <div>
                  <input
                    type="passwprd"
                    placeholder="Password"
                    className="form-control"
                  />
                  <br />
                </div>
                <div>
                  <Link to="/forgotpassword" className="text-dark">
                    Forgot Password?
                  </Link>
                </div>
                <div className="my-4 d-flex flex-column justify-content-center align-items-center gap-10">
                  <Link to="/" className="button  border-0 fw-bold fs-6">
                    Login
                  </Link>
                  <Link to="/signup" className="signup">
                    Don't have an account? Sign up
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

export default Login;
