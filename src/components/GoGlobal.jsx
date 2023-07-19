import React from "react";
import "./css/GoGlobal.css";

const GoGlobal = () => {
  return (
    <div className="go-global-main-container">
      <div className="go-global-left">
        <h1 className="go-global-heading">Grow Faster, Go Global.</h1>
        <p className="go-global-subheading">
          Strengthen your Supply Chain, and Scale your Business
          <br /> with Reliable Shipping and Cashflows.
        </p>
        <div className="go-global-top-text">Talk to us now!</div>
      </div>
      <div className="go-global-right">
        <video autoPlay loop width={"595px"} height={"400px"}>
          <source
            src={
              "https://cdn.cogoport.io/cms-prod/cogo_public/vault/original/cogoverse_desktop_3_webm.webm"
            }
            type="video/webm"
          ></source>
          Your browser doesn't support playing videos!
        </video>
      </div>
    </div>
  );
};

export default GoGlobal;
