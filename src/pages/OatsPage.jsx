// src/pages/OatsPage.jsx
import React from "react";
import { Title, Meta } from "react-head"; // ✅ SEO with react-head
import OatsHero from "../components/Oats/OatsHero";
import OatsGrid from "../components/Oats/OatsGrid";
import WhyOats from "../components/Oats/WhyOats";
import WeeklyPlans from "../components/HomePage/WeeklyPlans";

const OatsPage = () => {
  return (
    <main className="w-full">
      {/* ✅ SEO Meta Tags */}
      <Title>The Fit Sip | Overnight Oats Delivery in Gurgaon</Title>
      <Meta
        name="description"
        content="Wholesome, creamy overnight oats delivered fresh every morning in Gurgaon. Packed with nutrition and flavor, perfect to fuel your day."
      />
      <Meta
        name="keywords"
        content="overnight oats Gurgaon, oats delivery Gurgaon, Fit Sip oats, healthy breakfast Gurgaon, nutritious oats jars"
      />
      <Meta property="og:title" content="Overnight Oats Delivery in Gurgaon | The Fit Sip" />
      <Meta
        property="og:description"
        content="Fuel your mornings with nutritious overnight oats jars from The Fit Sip. Delivered fresh before 8 AM in Gurgaon."
      />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://thefitsip.in/oats" />

      <OatsHero />
      <OatsGrid />
      <WhyOats />
      <WeeklyPlans />
    </main>
  );
};

export default OatsPage;
