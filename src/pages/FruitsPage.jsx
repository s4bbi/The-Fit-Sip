// src/pages/FruitsPage.jsx
import React from "react";
import { Title, Meta, Link as MetaLink } from "react-head"; // ✅ SEO with react-head
import FruitsHero from "../components/Fruits/FruitsHero";
import FruitsGrid from "../components/Fruits/FruitsGrid";
import WhyFruits from "../components/Fruits/WhyFruits";
import WeeklyPlans from "../components/HomePage/WeeklyPlans";

const FruitsPage = () => {
  return (
    <main className="w-full">
      {/* ✅ SEO Meta Tags */}
      <Title>The Fit Sip | Fresh Fruit Bowls in Gurgaon</Title>
      <Meta
        name="description"
        content="Order healthy, colorful, and wholesome fruit bowls in Gurgaon from The Fit Sip. Freshly cut, nutrient-rich fruits delivered before 8 AM."
      />
      <Meta
        name="keywords"
        content="fruit bowls Gurgaon, healthy fruit delivery, fresh fruits Gurgaon, Fit Sip fruits, nutritious fruit bowls, morning fruit delivery Gurgaon"
      />
      <Meta property="og:title" content="Fresh Fruit Bowls in Gurgaon | The Fit Sip" />
      <Meta
        property="og:description"
        content="Wholesome fruit bowls packed with vitamins & antioxidants. Delivered fresh in Gurgaon every morning."
      />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://thefitsip.com/fruits" />
      <MetaLink rel="canonical" href="https://thefitsip.com/fruits" />

      <FruitsHero />
      <FruitsGrid />
      <WhyFruits />
      <WeeklyPlans />
    </main>
  );
};

export default FruitsPage;
