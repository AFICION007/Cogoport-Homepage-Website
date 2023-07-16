import React from "react";
import BlogBox from "../helper functions/BlogBox";
import StandardButton from "../helper functions/StandardButton";
import "./css/Blogs.css";

const blogsArr = [
  {
    imageSrc:
      "https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2FEnvirotainer_Banner.png&w=828&q=75",
    topText: "Trade News",
    heading:
      "Cogoport Enables Movement of 11 Envirotainer Containers from India to Italy",
    content:
      "Cogoport’s collective logistics and technical expertise came in handy as our operations and technical teams went the extra mile and designed bespoke solutions on the go.",
    date: "05 July 2023",
  },
  {
    imageSrc:
      "https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2FCogoport_Positioning_Banner.png&w=828&q=75",
    topText: "Expert Speak",
    heading: "Cogoport: A Global Trade Platform",
    content:
      "Cogoport leverages technology and caters to enterprises of all sizes. Our solutions improve predictability and enhance human capabilities.",
    date: "03 July 2023",
  },
  {
    imageSrc:
      "https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2FEng_2405_Banner.png&w=828&q=75",
    topText: "Industry Basics",
    heading:
      "Understanding Lean Supply Chain Management: Definition and Considerations",
    content:
      "Lean Supply Chain Management represents the extension of Lean Thinking across the entire supply chain. So, what are the benefits and key components? Read on!",
    date: "24 June 2023",
  },
];

const Blogs = () => {
  return (
    <div className="blogs-main-container">
      <h2 className="blogs-heading">Blogs</h2>
      <div className="blogs-blogs">
        {blogsArr.map(({ imageSrc, topText, heading, content, date }) => (
          <BlogBox
            imageSrc={imageSrc}
            topText={topText}
            heading={heading}
            content={content}
            date={date}
          />
        ))}
      </div>
      <div className="blogs-bottom-container">
        <StandardButton className={"blogs-button"} text={"View All"} />
      </div>
    </div>
  );
};

export default Blogs;
