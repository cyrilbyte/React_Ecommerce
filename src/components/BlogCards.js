import React from "react";
import { Link } from "react-router-dom";

const BlogCards = () => {
  return (
    <div className="blog-card ">
      <div className="card-image">
        <img src="images/blog-1.jpg" className="w-100" alt="" />
      </div>
      <div className="blog-content">
        <p className="date">23 Feb, 2024</p>
        <h5 className="title">A beautiful monday morning renaissance</h5>
        <p className="description">
          Take a step forward into invotion, style and sophistication.
        </p>
        <Link className="button">Read More</Link>
      </div>
    </div>
  );
};

export default BlogCards;
