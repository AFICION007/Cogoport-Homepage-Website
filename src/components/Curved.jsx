import React from "react";
import "./css/Curved.css";

const Curved = ({ borderBottomRadius, color }) => {
  return (
    <div style={{ backgroundColor: color }} className="curved-main-container">
      <div
        className="curved"
        style={{
          borderBottomRightRadius: borderBottomRadius,
          borderBottomLeftRadius: borderBottomRadius,
        }}
      ></div>
    </div>
  );
};

export default Curved;
