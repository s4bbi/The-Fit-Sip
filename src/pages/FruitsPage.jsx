// src/pages/FruitsPage.jsx
import React from "react";
import { Helmet } from "react-helmet-async"; // ✅ SEO
import FruitsHero from "../components/Fruits/FruitsHero";
import FruitsGrid from "../components/Fruits/FruitsGrid";
import WhyFruits from "../components/Fruits/WhyFruits";
import WeeklyPlans from "../components/HomePage/WeeklyPlans";

const FruitsPage = () => {
  return (
    <main className="w-full">
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>The Fit Sip | Fresh Fruit Bowls in Gurgaon</title>
        <meta
          name="description"
          content="Order healthy, colorful, and wholesome fruit bowls in Gurgaon from The Fit Sip. Freshly cut, nutrient-rich fruits delivered before 8 AM."
        />
        <meta
          name="keywords"
          content="fruit bowls Gurgaon, healthy fruit delivery, fresh fruits Gurgaon, Fit Sip fruits, nutritious fruit bowls, morning fruit delivery Gurgaon"
        />
        <meta property="og:title" content="Fresh Fruit Bowls in Gurgaon | The Fit Sip" />
        <meta
          property="og:description"
          content="Wholesome fruit bowls packed with vitamins & antioxidants. Delivered fresh in Gurgaon every morning."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thefitsip.com/fruits" />
      </Helmet>

      <FruitsHero />
      <FruitsGrid />
      <WhyFruits />
      <WeeklyPlans />
    </main>
  );
};

export default FruitsPage;
