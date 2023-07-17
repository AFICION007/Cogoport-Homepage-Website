import React from "react";
import Arrow from "../helper functions/Arrow";
import "./css/NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="news-letter-main-container">
      <div className="news-letter-left">
        <img
          className="news-letter-image"
          src="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fcogoport-subscribe.png&w=640&q=75"
        />
      </div>
      <div className="news-letter-right">
        <h3 className="news-letter-title">Subscribe to our newsletter now!</h3>
        <span className="news-letter-subtitle">
          Don’t miss out on the latest happenings at Cogoport.
        </span>
        <div className="news-letter-form-container">
          <input
            className="news-letter-input-field"
            type="email"
            placeholder="Enter your email here"
          ></input>
          <div className="news-letter-subscribe-button">
            <span className="news-letter-subscribe">Subscribe</span>
            <Arrow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
