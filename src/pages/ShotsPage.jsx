// src/pages/ShotsPage.jsx
import React from "react";
import { Helmet } from "react-helmet-async"; // ✅ SEO
import ShotsHero from "../components/Shots/ShotsHero";
import ShotsGrid from "../components/Shots/ShotsGrid";
import WhyShots from "../components/Shots/WhyShots";
import WeeklyPlans from "../components/HomePage/WeeklyPlans";

const ShotsPage = () => {
  return (
    <main className="w-full">
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>The Fit Sip | Cold-Pressed Health Shots in Gurgaon</title>
        <meta
          name="description"
          content="Boost your immunity and energy with cold-pressed health shots from The Fit Sip. Fresh ginger, turmeric, amla, beetroot, and more. Delivered daily in Gurgaon."
        />
        <meta
          name="keywords"
          content="health shots Gurgaon, immunity shots delivery, ginger turmeric shot Gurgaon, amla shots, detox shots Gurgaon, Fit Sip shots"
        />
        <meta property="og:title" content="Cold-Pressed Health Shots in Gurgaon | The Fit Sip" />
        <meta
          property="og:description"
          content="Try our cold-pressed health shots — ginger, turmeric, amla, beetroot & more. Delivered fresh every morning in Gurgaon."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thefitsip.com/shots" />
      </Helmet>

      <ShotsHero />
      <ShotsGrid />
      <WhyShots />
      <WeeklyPlans />
    </main>
  );
};

export default ShotsPage;
