import React from 'react';
import ReactDOM from 'react-dom/client';

import "./index.css";

import MarqueeCompanies from './components/MarqueeCompanies';
import HowItWorks from './components/HowItWorks';
import NextLevel from './components/NextLevel';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <MarqueeCompanies/>
  <NextLevel />
  <HowItWorks/>
  </>
);