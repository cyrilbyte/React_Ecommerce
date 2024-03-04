import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";

const vj = () => {
  return (
    <div>
      {" "}
      <Meta title="Dynamic Blog Name" />
      <BreadCrumb title="Dynamic Blog Name" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blog" className="d-flex align-items-center gap-10">
                  <HiOutlineArrowLeft className="fs-4" /> Go Back to Blogs
                </Link>
                <h3 className="title">
                  A Beautiful Sunday Morning Renaissance
                </h3>
                <img src="images/tab1.jpg" alt="blog" />
                <p>
                  you are only as good as your Collection which is an enormous
                  pressure. i think there is something about luxury it;s not
                  something about luxury - it not something people need, but
                  it's what they want. it really pulls at their heart. i have a
                  fantastic relationship with money. The sheer beige chiffon
                  dress is marked by an asymmetrical neckline and shredded
                  tendrils of a hemline, with layers of ruffles over the bust
                  and hips. The spectacular piece, as the archive wrote on
                  Instagram, is considered the “little sister” of McQueen’s
                  oyster dress from the “Irere” collection, which features the
                  same asymmetry and tattered ruffle details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default vj;
