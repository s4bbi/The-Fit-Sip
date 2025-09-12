import React from "react";
import SaladsHero from "../components/Salads/SaladsHero";
import SaladsGrid from "../components/Salads/SaladsGrid";
import WhySalads from "../components/Salads/WhySalads";
import WeaklyPlans from "../components/HomePage/WeeklyPlans";

const SaladsPage = () => {
  return (
    <main className="w-full">
      <SaladsHero />
      <SaladsGrid />
      <WhySalads />
      <WeaklyPlans />
    </main>
  );
};

export default SaladsPage;
