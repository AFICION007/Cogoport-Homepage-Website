import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import Numbers from "./components/Numbers";
import Curved from "./components/Curved";
import OneStop from "./components/OneStop";
import OurProducts from "./components/OurProducts";
import TrustedBy from "./components/TrustedBy";
import NextLevel from "./components/NextLevel";
import HowItWorks from "./components/HowItWorks";
import IndustriesServed from "./components/IndustriesServed";
import GetStarted from "./components/GetStarted";
import PlayVideo from "./components/PlayVideo";
import GrowFaster from "./components/GrowFaster";
import Blogs from "./components/Blogs";
import NewsLetter from "./components/NewsLetter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Numbers />
    <Curved />
    <OneStop />
    <OurProducts />
    <TrustedBy />
    <NextLevel />
    <HowItWorks />
    <IndustriesServed />
    <GetStarted />
    <PlayVideo />
    <GrowFaster />
    <Blogs />
    <Curved borderBottomRadius={"100%"} color={"#fbdc00"} />
    <NewsLetter />
  </>
);
