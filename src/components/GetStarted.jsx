import React from "react";
import "./GetStarted.css";
import StandardButton from "../helper functions/StandardButton";

const GetStarted = () => {
  return (
    <div className="get-started-main-container">
      <div className="get-started-left">
        <h2 className="get-started-heading">Get Started Today</h2>
        <p className="get-started-subheading">
          Plan, Book and Finance your shipment in one place.
        </p>
        <p className="get-started-subheading get-started-second-span">
          Experience how Cogoport’s Global Trade Platform can Turbocharge your
          Business.
        </p>
        <StandardButton text={"Get Started"} />
      </div>
      <div className="get-started-right">
        <img
          className="get-started-floating-image"
          src="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Ftrade-tech-home-1.webp&w=640&q=75"
          alt="floating girl with laptop"
        />
      </div>
    </div>
  );
};

export default GetStarted;
