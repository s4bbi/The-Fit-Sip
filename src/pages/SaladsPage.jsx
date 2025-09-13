// src/pages/SaladsPage.jsx
import React from "react";
import { Helmet } from "react-helmet-async"; // ✅ SEO
import SaladsHero from "../components/Salads/SaladsHero";
import SaladsGrid from "../components/Salads/SaladsGrid";
import WhySalads from "../components/Salads/WhySalads";
import WeeklyPlans from "../components/HomePage/WeeklyPlans";

const SaladsPage = () => {
  return (
    <main className="w-full">
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>The Fit Sip | Fresh Salads Delivery in Gurgaon</title>
        <meta
          name="description"
          content="Nutritious and fresh salads made with seasonal veggies and protein-rich toppings. Delivered every morning in Gurgaon by The Fit Sip."
        />
        <meta
          name="keywords"
          content="fresh salads Gurgaon, salad delivery Gurgaon, healthy salads Gurgaon, Fit Sip salads, protein-rich salads"
        />
        <meta property="og:title" content="Fresh Salads Delivery in Gurgaon | The Fit Sip" />
        <meta
          property="og:description"
          content="Wholesome, protein-packed salads delivered fresh every morning in Gurgaon. Power your day with The Fit Sip."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thefitsip.com/salads" />
      </Helmet>

      <SaladsHero />
      <SaladsGrid />
      <WhySalads />
      <WeeklyPlans />
    </main>
  );
};

export default SaladsPage;
