import React from "react";
import "./css/TrustedBy.css";

const compArr = [
  "https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fais-logo-1.webp&w=384&q=75",
  "https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fjsw-logo-new.webp&w=384&q=75",
  "https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fbombay-dyeing-logo-1.webp&w=384&q=75",
  "https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fair-asia-logo-1.webp&w=384&q=75",
  "https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Ftvs-logo-1.webp&w=384&q=75",
  "https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fvoltas-logo-1.webp&w=384&q=75",
  "https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Futltratech_logo.png&w=384&q=75",
  "https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fbhilosa_logo.png&w=384&q=75",
  "https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Freliance_logo.png&w=384&q=75",
  "https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fpidilight_logo.png&w=384&q=75",
  "https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fvedanta.png&w=384&q=75",
  "https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fbluestar_logo.png&w=384&q=75",
];

function MarqueeCompanies() {
  return (
    <div className="trust">
      <h3 className="trust-head">Trusted by</h3>
      <div className="companies">
        {compArr.map((company) => (
          <img
            className="comp-logo"
            width="146px"
            height="73px"
            src={company}
          />
        ))}
      </div>
    </div>
  );
}

export default MarqueeCompanies;
