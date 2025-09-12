import React from "react";
import JuicesHero from "../components/Juices/JuicesHero";
import JuicesGrid from "../components/Juices/JuicesGrid";
import WhyJuices from "../components/Juices/WHyJuices";
import WeaklyPlans from "../components/HomePage/WeeklyPlans";

const JuicesPage = () => {
  return (
    <main className="w-full">
      <JuicesHero />
      <JuicesGrid />
      <WhyJuices />
      <WeaklyPlans />
    </main>
  );
};

export default JuicesPage;
