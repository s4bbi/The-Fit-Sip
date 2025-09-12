import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { weeklyPlansContent } from "../data/weeklyPlansContent";
import WeeklyHero from "../components/WeeklyPlans/WeeklyHero";
import WeeklyPlansGrid from "../components/WeeklyPlans/WeeklyGrid";
import WeeklyReviews from "../components/WeeklyPlans/WeeklyReviews";

const tabs = [
  { key: "boost-immunity", label: "Boost Immunity & Detox" },
  { key: "weight-management", label: "Weight Management & Control" },
  { key: "skin-glow", label: "Improve Skin & Glow" },
  { key: "energy", label: "Everyday Energy & Freshness" },
  { key: "nutrition", label: "Nutritious Meals & Fitness Fuel" },
];

const WeeklyPlansPage = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("boost-immunity");

  // On mount, check if a tab is passed via state
  useEffect(() => {
    if (location.state?.tab) {
      setActiveTab(location.state.tab);
    }
  }, [location.state]);

  return (
    <section className="w-full bg-[#FBFBF4] px-6 md:px-20 py-12">
      <WeeklyHero />

      {/* Tabs */}
      <div className="flex flex-wrap justify-between border-b pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex-1 text-center text-sm md:text-base font-sB pb-2 cursor-pointer transition-colors ${
              activeTab === tab.key
                ? "text-orange border-b-2 border-orange"
                : "text-gray-700 hover:text-orange"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Plans Grid */}
      <WeeklyPlansGrid plans={weeklyPlansContent[activeTab] || []} />

      <WeeklyReviews />
    </section>
  );
};

export default WeeklyPlansPage;
