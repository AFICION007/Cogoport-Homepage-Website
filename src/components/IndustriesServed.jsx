import React from "react";
import "./IndustriesServed.css";

const indusArr = [
  {
    source: "https://www.cogoport.com/images/chemical.svg",
    alt: "Chemicals",
  },
  {
    source: "https://www.cogoport.com/images/paracetamol.svg",
    alt: "Pharmaceuticals",
  },
  {
    source: "https://www.cogoport.com/images/electronics.svg",
    alt: "Electronics",
  },
  {
    source: "https://www.cogoport.com/images/whitegoods.svg",
    alt: "White Goods",
  },
  {
    source: "https://www.cogoport.com/images/textiles.svg",
    alt: "Textiles",
  },
  {
    source: "https://www.cogoport.com/images/manufactoring.svg",
    alt: "Manufacturing",
  },
  {
    source: "https://www.cogoport.com/images/agriculture.svg",
    alt: "Agriculture",
  },
];

export default function IndustriesServed() {
  return (
    <div className="industries-served-container">
      <h3 className="industries-served-heading">Industries Served</h3>
      <div className="industries-served-main">
        {indusArr.map(({ source, alt }) => (
          <div className="industries-served-component">
            <img
              src={source}
              style={{ width: "100px" }}
            />
            <div className="industries-served-component-text">{alt}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
