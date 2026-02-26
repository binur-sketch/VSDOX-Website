import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import {
  Products,
  Solutions,
  Industries,
  Resources,
  Contact,
  Legal,
  About
} from './pages/Pages';

import {
  BankingBFSI,
  Healthcare,
  Corporate,
  Education,
  Government
} from './pages/IndustryPages';

import {
  CaseStudies,
  ContactUs,
  PrivacyPolicy,
  TermsConditions
} from './pages/CompanyPages';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Home */}
          <Route index element={<Home />} />

          {/* Main Nav Pages */}
          <Route path="products" element={<Products />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="industries" element={<Industries />} />
          <Route path="resources" element={<Resources />} />
          <Route path="about" element={<About />} />

          {/* Industry Solution Pages */}
          <Route path="solutions/banking-bfsi" element={<BankingBFSI />} />
          <Route path="solutions/healthcare" element={<Healthcare />} />
          <Route path="solutions/corporate" element={<Corporate />} />
          <Route path="solutions/education" element={<Education />} />
          <Route path="solutions/government" element={<Government />} />

          {/* Company / Utility Pages */}
          <Route path="contact" element={<ContactUs />} />
          <Route path="case-studies" element={<CaseStudies />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<TermsConditions />} />

          {/* Legacy route kept for backward compatibility */}
          <Route path="legal" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
