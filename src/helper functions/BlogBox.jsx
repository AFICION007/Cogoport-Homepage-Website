import React from "react";
import "./BlogBox.css";
import TextArrow from "./TextArrow";

const BlogBox = ({ imageSrc, topText, heading, content, date }) => {
  return (
    <div className="blog-box-main-container">
      <div className="blog-box-top">
        <img className="blog-box-image" src={imageSrc} />
      </div>
      <div className="blog-box-bottom">
        <div className="blog-box-top-text">{topText}</div>
        <div className="blog-box-heading">{heading}</div>
        <p className="blog-box-content">{content}</p>
        <div className="blog-box-bottom-container">
          <TextArrow className="blog-box-text-arrow" text={"Read More"} />
          <div className="blog-box-date">{date}</div>
        </div>
      </div>
    </div>
  );
};

export default BlogBox;
