// src/pages/OatsPage.jsx
import React from "react";
import { Helmet } from "react-helmet-async"; // ✅ SEO
import OatsHero from "../components/Oats/OatsHero";
import OatsGrid from "../components/Oats/OatsGrid";
import WhyOats from "../components/Oats/WhyOats";
import WeeklyPlans from "../components/HomePage/WeeklyPlans";

const OatsPage = () => {
  return (
    <main className="w-full">
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>The Fit Sip | Overnight Oats Delivery in Gurgaon</title>
        <meta
          name="description"
          content="Wholesome, creamy overnight oats delivered fresh every morning in Gurgaon. Packed with nutrition and flavor, perfect to fuel your day."
        />
        <meta
          name="keywords"
          content="overnight oats Gurgaon, oats delivery Gurgaon, Fit Sip oats, healthy breakfast Gurgaon, nutritious oats jars"
        />
        <meta property="og:title" content="Overnight Oats Delivery in Gurgaon | The Fit Sip" />
        <meta
          property="og:description"
          content="Fuel your mornings with nutritious overnight oats jars from The Fit Sip. Delivered fresh before 8 AM in Gurgaon."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thefitsip.com/oats" />
      </Helmet>

      <OatsHero />
      <OatsGrid />
      <WhyOats />
      <WeeklyPlans />
    </main>
  );
};

export default OatsPage;
