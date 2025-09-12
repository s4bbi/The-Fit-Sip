import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/Common/ScrollToTop.jsx";
import HomePage from "./pages/HomePage.jsx";
import JuicesPage from "./pages/JuicesPage.jsx";
import ShotsPage from "./pages/ShotsPage.jsx";
import FruitsPage from "./pages/FruitsPage.jsx";
import SaladsPage from "./pages/SaladsPage.jsx";
import OatsPage from "./pages/OatsPage.jsx";
import SmoothiesPage from "./pages/SmoothiesPage.jsx";
import WeeklyPlansPage from "./pages/WeeklyPlansPage.jsx";
import ContactUsPage from "./pages/ContactUsPage.jsx";
import TermsOfService from "./components/Common/TermsOfService.jsx";

const App = () => {
  return (
    <>

    <ScrollToTop /> 
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
      <Route path="/terms" element={<TermsOfService />} />

    </Routes>
    </>
  );
};

export default App;
