import React from "react";
import SmoothiesHero from "../components/Smoothies/SmoothiesHero";
import SmoothiesGrid from "../components/Smoothies/SmoothiesGrid";
import WhySmoothies from "../components/Smoothies/WhySmoothies";
import WeaklyPlans from "../components/HomePage/WeeklyPlans";

const SmoothiesPage = () => {
  return (
    <main className="w-full">
      <SmoothiesHero />
      <SmoothiesGrid />
      <WhySmoothies />
      <WeaklyPlans />
    </main>
  );
};

export default SmoothiesPage;
