import React from "react";
import "./css/OneStop.css";

const OneStop = () => {
  return (
    <div className="one-stop-main-container">
      <div className="one-stop-left">
        <div className="one-stop-heading-container">
          <h2 className="one-stop-heading">One Stop Solution for Your</h2>
          <h2 className="one-stop-heading">Supply Chain</h2>
        </div>
        <span className="one-stop-subheading">
          Connected Shipping, Finance, and Trade-tech, to Power Global Trade and
          Supply Chains.
        </span>
      </div>
      <div className="one-stop-right">
        <img
          className="one-stop-image"
          src="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fmap-supply-chain.png&w=640&q=75"
        />
      </div>
    </div>
  );
};

export default OneStop;
