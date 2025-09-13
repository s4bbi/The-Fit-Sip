// src/pages/SmoothiesPage.jsx
import React from "react";
import { Title, Meta } from "react-head"; // ✅ SEO with react-head
import SmoothiesHero from "../components/Smoothies/SmoothiesHero";
import SmoothiesGrid from "../components/Smoothies/SmoothiesGrid";
import WhySmoothies from "../components/Smoothies/WhySmoothies";
import WeeklyPlans from "../components/HomePage/WeeklyPlans";

const SmoothiesPage = () => {
  return (
    <main className="w-full">
      {/* ✅ SEO Meta Tags */}
      <Title>The Fit Sip | Fresh Smoothie Bowls in Gurgaon</Title>
      <Meta
        name="description"
        content="Start your mornings with our fresh smoothie bowls made from fruits, oats, and nuts. Delivered daily in Gurgaon with subscription plans."
      />
      <Meta
        name="keywords"
        content="smoothie bowls Gurgaon, fresh smoothies delivery, fruit smoothie subscription, oats smoothies, Fit Sip smoothies, healthy breakfast Gurgaon"
      />
      <Meta
        property="og:title"
        content="Fresh Smoothie Bowls in Gurgaon | The Fit Sip"
      />
      <Meta
        property="og:description"
        content="Wholesome and filling smoothie bowls with fruits, oats, and nuts. Delivered fresh in Gurgaon every morning."
      />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://thefitsip.com/smoothies" />

      {/* Page Sections */}
      <SmoothiesHero />
      <SmoothiesGrid />
      <WhySmoothies />
      <WeeklyPlans />
    </main>
  );
};

export default SmoothiesPage;
