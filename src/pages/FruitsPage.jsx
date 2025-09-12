import React from "react";
import FruitsHero from "../components/Fruits/FruitsHero";
import FruitsGrid from "../components/Fruits/FruitsGrid";
import WhyFruits from "../components/Fruits/WhyFruits";
import WeaklyPlans from "../components/HomePage/WeeklyPlans";

const FruitsPage = () => {
  return (
    <main className="w-full">
      <FruitsHero />
      <FruitsGrid />
      <WhyFruits />
      <WeaklyPlans />
    </main>
  );
};

export default FruitsPage;
