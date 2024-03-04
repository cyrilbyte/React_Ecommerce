import React from "react";
import { Link } from "react-router-dom";
import { IoReturnUpBack } from "react-icons/io5";

const Checkout = () => {
  return (
    <>
      <div className="checkout-wrapper py-5 home-wrapper-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-7">
              <div className="check-left-data">
                <h3 className="website-name">W3-Market</h3>
                <br />
                <nav
                  style={{ "--bs-breadcrumb-divider": ">" }}
                  aria-label="breadcrumb"
                >
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <Link to="/cart ">Cart</Link>
                    </li>
                    &nbsp;/
                    <li class="breadcrumb-item active" aria-current="page">
                      Information
                    </li>
                    &nbsp;/
                    <li class="breadcrumb-item active" aria-current="page">
                      Shipping
                    </li>
                    &nbsp;/
                    <li class="breadcrumb-item active" aria-current="page">
                      Payment
                    </li>
                  </ol>
                </nav>

                <h4 className="title">Contact Information</h4>
                <p className="user-details">Cax Inc (caxinc@gmail.com)</p>
                <form
                  action=""
                  className="d-flex gap-15 flex-wrap justify-content-between"
                >
                  <div className="w-100">
                    <select name="" className="form-control form-select" id="">
                      <option value="" selected disabled>
                        Select Country
                      </option>
                    </select>
                  </div>

                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="form-control"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="form-control"
                    />
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      placeholder="Address"
                      className="form-control"
                    />
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      placeholder="Apartment,suite ,etc."
                      className="form-control"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="City"
                      className="form-control"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <select
                      name=""
                      placeholder=""
                      className="form-control form-select"
                      id=""
                    >
                      <option value="" selected disabled>
                        Select State
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="Zipcode"
                      className="form-control"
                    />
                  </div>
                  <div className="w-100">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex gap-10 fs-4">
                        <IoReturnUpBack />
                        <Link to="/cart" className="text-dark fs-6">
                          Return to Cart
                        </Link>
                      </div>
                      <Link to="/cart" className="button bg-danger">
                        Continue Shipping
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-5 py-4">
              <br />
              <br />
              <div className="border-bottom py-4">
                <div className="d-flex align-items-center py-3 gap-10">
                  <div className="w-75 d-flex gap-10">
                    <div className="w-25 position-relative">
                      <span
                        style={{ top: "-10px", right: "-3px" }}
                        className="badge bg-secondary text-white rounded-circle position-absolute"
                      >
                        1
                      </span>
                      <img
                        src="./images/watch.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div>
                      <h5 className="title">Watch</h5>
                      <p>FHFhGVKJH</p>
                    </div>
                  </div>
                  <div className="flex-group-1">
                    <h5>GHC 100</h5>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <div className="w-75 d-flex gap-10">
                    <div className="w-25 position-relative">
                      <span
                        style={{ top: "-10px", right: "-3px" }}
                        className="badge bg-secondary text-white rounded-circle position-absolute"
                      >
                        1
                      </span>
                      <img
                        src="./images/watch.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div>
                      <h5 className="title">Watch</h5>
                      <p>FHFhGVKJH</p>
                    </div>
                  </div>
                  <div className="flex-group-1">
                    <h5>GHC 100</h5>
                  </div>
                </div>
              </div>
              <div className="border-bottom">
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <p>Shipping</p>
                  <p>GHC 1000</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-0">Sub Total</p>
                  <p className="mb-0">GHC 1000</p>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center border-bottom py-4">
                <h4>Total</h4>
                <p>GHC 1000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
