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
  { key: "all-plans", label: "All Plans" },
  { key: "boost-immunity", label: "Boost Immunity & Detox" },
  { key: "weight-management", label: "Weight Management & Control" },
  { key: "skin-glow", label: "Improve Skin & Glow" },
  { key: "energy", label: "Everyday Energy & Freshness" },
  { key: "nutrition", label: "Nutritious Meals & Fitness Fuel" },
];

const WeeklyPlansPage = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("all-plans");
  const gridRef = useRef(null);

  // Check for tab passed from navigation
  useEffect(() => {
    if (location.state?.tab) {
      setActiveTab(location.state.tab);
    }
  }, [location.state]);

  // Get plans based on active tab
  const getPlansForActiveTab = () => {
    if (activeTab === "all-plans") {
      // Combine all plans from all categories with category labels
      const allPlans = [];
      Object.entries(weeklyPlansContent).forEach(([categoryKey, plans]) => {
        const categoryLabel = tabs.find(tab => tab.key === categoryKey)?.label || categoryKey;
        plans.forEach(plan => {
          allPlans.push({
            ...plan,
            category: categoryLabel,
            categoryKey: categoryKey
          });
        });
      });
      return allPlans;
    }
    return weeklyPlansContent[activeTab] || [];
  };

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
          stagger: 0.12,
          ease: "power3.out",
        }
      );
    }
  }, [activeTab]);

  const currentPlans = getPlansForActiveTab();

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
      <div className="mb-8">
        {/* Mobile Dropdown for smaller screens */}
        <div className="md:hidden mb-6">
          <select
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value)}
            className="w-full p-3 bg-white border border-gray-300 rounded-lg font-sB text-gray-700 
                       focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          >
            {tabs.map((tab) => (
              <option key={tab.key} value={tab.key}>
                {tab.label}
              </option>
            ))}
          </select>
        </div>

        {/* Desktop Tabs */}
        <div className="hidden md:flex flex-wrap justify-center lg:justify-between border-b-2 border-gray-200 pb-2 gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 min-w-0 text-center text-sm lg:text-base font-sB pb-3 px-2 cursor-pointer 
                         transition-all duration-300 rounded-t-lg hover:bg-gray-50 ${
                activeTab === tab.key
                  ? "text-orange border-b-3 border-orange bg-orange/5"
                  : "text-gray-700 hover:text-orange hover:border-b-2 hover:border-orange/30"
              }`}
            >
              <span className="block truncate">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Plans Grid with GSAP Animation */}
      <div ref={gridRef}>
        <WeeklyPlansGrid 
          plans={currentPlans} 
          showCategory={activeTab === "all-plans"}
          activeTab={activeTab}
        />
      </div>

      <WeeklyReviews />
    </section>
  );
};

export default WeeklyPlansPage;
