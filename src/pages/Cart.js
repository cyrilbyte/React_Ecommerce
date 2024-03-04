import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      {" "}
      <Meta title="Cart" />
      <BreadCrumb title="Cart" />
      <div className="cart-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="cart-header py-3 d-flex justify-content-between align-items-center flex-wrap">
                <h4 className="cart-col-1">Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3">Quantity</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>
              <div className="cart-data py-3 mb-3 d-flex justify-content-between align-items-center flex-wrap">
                <div className="cart-col-1 gap-15 d-flex align-items-center ">
                  <div>
                    <img src="./images/watch.jpg" alt="" />
                  </div>
                  <div className="w-75">
                    <p>GDFFDHG</p>
                    <p>Size: </p>
                    <p>Color: </p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="Price">GHC 100</h5>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-15">
                  <div>
                    <input
                      className="form-control"
                      type="number"
                      name=""
                      max={10}
                      min={1}
                      id=""
                    />
                  </div>
                  <div>
                    <AiFillDelete className="text-danger" />
                  </div>
                </div>
                <div className="cart-col-4">GHC 100</div>
              </div>
            </div>
            <div className="col-12 mt-4 py-2">
              <div className="d-flex justify-content-between align-items-baseline">
                <Link to="" className="button ">
                  Continue To Shopping
                </Link>
                <div className="d-flex flex-column align-items-end">
                  <h4>SubTotal: GHC 100</h4>
                  <p>Taxes and shipping will be calculated at checkout.</p>
                  <Link to="/checkout" className="button ">
                    Check Out
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
