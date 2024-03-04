import React, { useState } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";

const SingleProduct = () => {
  const props = {
    width: 400,
    height: 600,
    zoomWidth: 600,
    img: "https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg?cs=srgb&dl=pexels-joey-nguy%E1%BB%85n-2113994.jpg&fm=jpg",
  };

  const [orderedProduct, setorderedProduct] = useState(true);

  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  return (
    <>
      <Meta title="Products" />
      <BreadCrumb title="Products" />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div className="">
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-15 ">
                <div>
                  <img
                    className="img-fluid"
                    src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                    alt="watch"
                  />
                </div>
                <div>
                  <img
                    className="img-fluid"
                    src="https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?cs=srgb&dl=pexels-pixabay-280250.jpg&fm=jpg"
                    alt="watch"
                  />
                </div>
                <div>
                  <img
                    className="img-fluid"
                    src="https://media.istockphoto.com/id/471712723/photo/watch.jpg?s=612x612&w=0&k=20&c=iMEdtY6uP3iFURngL9qAzzMnWYSkPmHrxIlYIEfduvM="
                    alt="watch"
                  />
                </div>
                <div>
                  <img
                    className="img-fluid"
                    src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw34d84041/images/Titan/Catalog/1698KM02_1.jpg?sw=800&sh=800"
                    alt="watch"
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom py-3">
                  <h3 className="title">
                    Kids Headphones Bulk 10 Pack Multi Colored For Students
                  </h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price">$79.84</p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value="4"
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0 t-review"> (3 reviews)</p>
                  </div>
                  <a className=" mb-0 review-btn" href="#review">
                    Write a Review
                  </a>
                </div>
                <div className="border-bottom py-3">
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Type :</h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Brand :</h3>
                    <p className="product-data">Havels</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Category : </h3>
                    <p className="product-data">Time</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Tags :</h3>
                    <p className="product-data">Watch , Time, Style, Design</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Availability :</h3>
                    <p className="product-data">In Stock</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center mt-2 mb-3">
                    <h3 className="product-heading">Size :</h3>
                    <div className="d-flex flex-wrap gap-10">
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        S
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        L
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        XL
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        XXL
                      </span>
                    </div>
                  </div>
                  <div className="d-flex gap-10 align-items-center mt-2 mb-3">
                    <h3 className="product-heading ">Color :</h3>
                    <Color />
                  </div>
                  <div className="d-flex gap-15  flex-row align-items-center mt-2 mb-3">
                    <h3 className="product-heading ">Quantity :</h3>
                    <div className="">
                      <input
                        type="number"
                        name=""
                        min={1}
                        max={10}
                        className="form-control w-60"
                      />
                    </div>
                    <div className=" d-flex justify-content-center gap-30 align-items-center ms-5">
                      <button className="button border-0">Add To Cart</button>
                      <button to="" className="button bg-success border-0">
                        Buy it Now
                      </button>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-15">
                    <div>
                      <a href="">
                        <TbGitCompare className="fs-5 me-2" />
                        Add to Compare
                      </a>
                    </div>
                    <div>
                      <a href="">
                        <AiOutlineHeart className="fs-5 me-2" />
                        Add to WishList
                      </a>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column  my-3">
                    <h3 className="product-heading">Shipping and Returns :</h3>
                    <p className="product-data">
                      Free shipping and returns available on all orders! <br />
                      Please note that delivery times may vary depending on
                      <br /> your location. we ship all us domestic orders
                      within <b>5-10 business days</b>
                    </p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-3">
                    <h3 className="product-heading">Product Link :</h3>
                    <a
                      href="javascript:void(0);"
                      onClick={() => {
                        copyToClipboard(
                          "https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg?cs=srgb&dl=pexels-joey-nguy%E1%BB%85n-2113994.jpg&fm=jpg"
                        );
                      }}
                    >
                      Copy Product Link
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="description-wrapper py-5 home-wrapper-2">
              <div className="container-xxl">
                <div className="row">
                  <div className="col-12">
                    <h4>Description</h4>
                    <div className="bg-white p-3">
                      <p>
                        lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting,m Ipsum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <section
              id="review"
              className="reviews-wrapper py-5 home-wrapper-2"
            >
              <div className="container-xxl">
                <div className="row">
                  <div className="col-12">
                    <div className="review-inner-wrapper">
                      <div className="review-head d-flex  justify-content-between align-items-end">
                        <div>
                          <h3>Customer Reviews</h3>
                          <div className="d-flex align-items-center gap-10">
                            <ReactStars
                              count={5}
                              size={24}
                              value="4"
                              edit={false}
                              activeColor="#ffd700"
                            />
                            <p className="mb-0">Based on 4 reviews</p>
                          </div>
                        </div>

                        {orderedProduct && (
                          <div>
                            <a
                              className="text-dark text-decoration-underline"
                              href="#"
                            >
                              Write a Review
                            </a>
                          </div>
                        )}
                      </div>
                      <div className="review-form py-4">
                        <h4 id="review">Write a Review</h4>
                        <form action="" className="d-flex flex-column gap-20">
                          <ReactStars
                            count={5}
                            size={24}
                            value=""
                            edit={true}
                            activeColor="#ffd700"
                          />

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
                          <div className="d-flex justify-content-end">
                            <button className="button border-0">
                              Submit Review
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className="reviews mt-3">
                        <div className="review ">
                          <div className="d-flex gap-10 align-items-center">
                            <h6 className="mb-0">Cyril</h6>
                            <ReactStars
                              count={5}
                              size={24}
                              value="4"
                              edit={false}
                              activeColor="#ffd700"
                            />
                          </div>
                          <p className="mt-3">
                            orem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="popular-wrapper py-5 home-wrapper-2">
              <div className="container-xxl">
                <div className="row">
                  <div className="col-12">
                    <h3 className="section-heading">You may also like</h3>
                  </div>
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
