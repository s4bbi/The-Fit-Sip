import React from "react";
import ShotsHero from "../components/Shots/ShotsHero";
import ShotsGrid from "../components/Shots/ShotsGrid";
import WhyShots from "../components/Shots/WhyShots";
import WeaklyPlans from "../components/HomePage/WeeklyPlans";

const ShotsPage = () => {
  return (
    <main className="w-full">
      <ShotsHero />
      <ShotsGrid />
      <WhyShots />
      <WeaklyPlans />
    </main>
  );
};

export default ShotsPage;
