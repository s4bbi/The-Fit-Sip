// src/App.jsx
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { HeadProvider } from "react-head";
import ScrollToTop from "./components/Common/ScrollToTop.jsx";
import Loader from "./components/Common/Loader.jsx"; // ✅ import loader

// Pages
import HomePage from "./pages/HomePage.jsx";
import JuicesPage from "./pages/JuicesPage.jsx";
import ShotsPage from "./pages/ShotsPage.jsx";
import FruitsPage from "./pages/FruitsPage.jsx";
import SaladsPage from "./pages/SaladsPage.jsx";
import OatsPage from "./pages/OatsPage.jsx";
import SmoothiesPage from "./pages/SmoothiesPage.jsx";
import WeeklyPlansPage from "./pages/WeeklyPlansPage.jsx";
import ContactUsPage from "./pages/ContactUsPage.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import TermsOfService from "./components/Common/TermsOfService.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import RefundPolicy from "./pages/RefundPolicy.jsx";
import ShippingPolicy from "./pages/ShippingPolicy.jsx";
import NotFound from "./pages/NotFound.jsx";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <HeadProvider>
      <ScrollToTop />

      {/* ✅ Loader appears before content */}
      {!isLoaded && <Loader onLoaded={() => setIsLoaded(true)} />}

      {/* ✅ Main content fades in after loader */}
      <div
        className={`transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/juices" element={<JuicesPage />} />
          <Route path="/shots" element={<ShotsPage />} />
          <Route path="/fruits" element={<FruitsPage />} />
          <Route path="/salads" element={<SaladsPage />} />
          <Route path="/oats" element={<OatsPage />} />
          <Route path="/smoothies" element={<SmoothiesPage />} />
          <Route path="/weekly-plans" element={<WeeklyPlansPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/refund" element={<RefundPolicy />} />
          <Route path="/shipping" element={<ShippingPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </HeadProvider>
  );
};

export default App;
