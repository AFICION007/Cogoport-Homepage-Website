import React from "react";
import './css/NextLevel.css';
import ArrowButton from "../helper functions/ArrowButton";

const NextLevel = () => {
  return (
    <div className="next-level-container">
      <h3 className="next-level-heading">
        Ready to take your Supply Chain to the Next Level?
      </h3>
      <ArrowButton text={"Get Started"} fontColor={"white"} backgroundColor={"#ee3425"}/>
    </div>
  );
};

export default NextLevel;
