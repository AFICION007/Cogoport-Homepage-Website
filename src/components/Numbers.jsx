import React from "react";
import "./Numbers.css";

const numArr = [
  {
    num: "180+",
    text: "Countries Served",
  },
  {
    num: "10,000",
    text: "Ports Pairs Served",
  },
  {
    num: "30,000+",
    text: "Tons of Air Cargo Moved",
  },
  {
    num: "700,000",
    text: "Containers Moved",
  },
];

const Numbers = () => {
  return (
    <div className="numbers-main-container">
      {numArr.map(({ num, text }) => (
        <div className="numbers-subcontainer">
          <h2 className="numbers-number">{num}</h2>
          <h4 className="numbers-text">{text}</h4>
        </div>
      ))}
    </div>
  );
};

export default Numbers;
