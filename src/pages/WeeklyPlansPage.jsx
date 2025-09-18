// src/pages/WeeklyPlansPage.jsx
import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Title, Meta } from "react-head"; // ✅ SEO with react-head
import { gsap } from "gsap";
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
  const gridRef = useRef(null);

  // Check for tab passed from navigation
  useEffect(() => {
    if (location.state?.tab) {
      setActiveTab(location.state.tab);
    }
  }, [location.state]);

  // Animate grid on tab change
  useEffect(() => {
    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current.querySelectorAll(".plan-card"),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
        }
      );
    }
  }, [activeTab]);

  return (
    <section className="w-full bg-[#FBFBF4] px-6 md:px-20 py-12">
      {/* ✅ SEO Meta Tags */}
      <Title>The Fit Sip | Weekly Health Plans</Title>
      <Meta
        name="description"
        content="Choose from our 5 weekly subscription plans: Boost Immunity, Weight Management, Skin Glow, Energy Boost, and Nutritious Meals. Fresh delivery daily in Gurgaon."
      />
      <Meta
        name="keywords"
        content="weekly health plans, juice detox subscription, smoothie plan Gurgaon, weight loss drinks, skin glow smoothies, healthy breakfast Gurgaon, Fit Sip"
      />
      <Meta property="og:title" content="Weekly Health Plans | The Fit Sip" />
      <Meta
        property="og:description"
        content="Custom weekly subscription plans with juices, shots, salads, oats & smoothies. Delivered fresh daily in Gurgaon."
      />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://thefitsip.in/weekly-plans" />

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

      {/* Plans Grid with GSAP */}
      <div ref={gridRef}>
        <WeeklyPlansGrid plans={weeklyPlansContent[activeTab] || []} />
      </div>

      <WeeklyReviews />
    </section>
  );
};

export default WeeklyPlansPage;
