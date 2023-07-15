import React from "react";
import "./GrowFaster.css";
import ArrowButton from "../buttons/ArrowButton";

const GrowFaster = () => {
  return (
    <div className="grow-faster-main-container">
      <div className="grow-faster-left">
        <h3 className="grow-faster-heading">Grow Faster with Cogoport</h3>
        <p className="grow-faster-subheading">
          Know more about Cogoport’s Global Trade Platform<sup>TM</sup>
        </p>
      </div>
      <ArrowButton
        text={"Know More"}
        fontColor={"#000"}
        backgroundColor={"#fbdc00"}
      />
    </div>
  );
};

export default GrowFaster;
