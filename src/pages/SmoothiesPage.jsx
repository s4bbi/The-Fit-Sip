// src/pages/SmoothiesPage.jsx
import React from "react";
import { Helmet } from "react-helmet-async"; // ✅ SEO
import SmoothiesHero from "../components/Smoothies/SmoothiesHero";
import SmoothiesGrid from "../components/Smoothies/SmoothiesGrid";
import WhySmoothies from "../components/Smoothies/WhySmoothies";
import WeeklyPlans from "../components/HomePage/WeeklyPlans";

const SmoothiesPage = () => {
  return (
    <main className="w-full">
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>The Fit Sip | Fresh Smoothie Bowls in Gurgaon</title>
        <meta
          name="description"
          content="Start your mornings with our fresh smoothie bowls made from fruits, oats, and nuts. Delivered daily in Gurgaon with subscription plans."
        />
        <meta
          name="keywords"
          content="smoothie bowls Gurgaon, fresh smoothies delivery, fruit smoothie subscription, oats smoothies, Fit Sip smoothies, healthy breakfast Gurgaon"
        />
        <meta property="og:title" content="Fresh Smoothie Bowls in Gurgaon | The Fit Sip" />
        <meta
          property="og:description"
          content="Wholesome and filling smoothie bowls with fruits, oats, and nuts. Delivered fresh in Gurgaon every morning."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thefitsip.com/smoothies" />
      </Helmet>

      <SmoothiesHero />
      <SmoothiesGrid />
      <WhySmoothies />
      <WeeklyPlans />
    </main>
  );
};

export default SmoothiesPage;
