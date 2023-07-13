import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import TrustedBy from "./components/TrustedBy";
import NextLevel from "./components/NextLevel";
import HowItWorks from "./components/HowItWorks";
import IndustriesServed from "./components/IndustriesServed";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <TrustedBy />
    <NextLevel />
    <HowItWorks />
    <IndustriesServed />
  </>
);
