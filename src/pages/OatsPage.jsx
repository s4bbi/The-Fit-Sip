import React from "react";
import OatsHero from "../components/Oats/OatsHero";
import OatsGrid from "../components/Oats/OatsGrid";
import WhyOats from "../components/Oats/WhyOats";
import WeaklyPlans from "../components/HomePage/WeeklyPlans";

const OatsPage = () => {
  return (
    <main className="w-full">
      <OatsHero />
      <OatsGrid />
      <WhyOats />
      <WeaklyPlans />
    </main>
  );
};

export default OatsPage;
