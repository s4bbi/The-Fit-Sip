// src/pages/JuicesPage.jsx
import React from "react";
import { Title, Meta, Link as MetaLink } from "react-head"; // ✅ SEO with react-head
import JuicesHero from "../components/Juices/JuicesHero";
import JuicesGrid from "../components/Juices/JuicesGrid";
import WhyJuices from "../components/Juices/WhyJuices";
import WeeklyPlans from "../components/HomePage/WeeklyPlans";
import TeasGrid from "../components/Juices/TeasGrid";
import WhyTeas from "../components/Juices/WhyTeas";

const JuicesPage = () => {
  return (
    <main className="w-full">
      {/* ✅ SEO Meta Tags */}
      <Title>The Fit Sip | Cold Pressed Juices in Gurgaon</Title>
      <Meta
        name="description"
        content="Fresh cold pressed juices delivered before 8 AM in Gurgaon. 100% natural, sugar-free, preservative-free."
      />
      <Meta
        name="keywords"
        content="cold pressed juices Gurgaon, healthy juice delivery Gurgaon, sugar free juices"
      />
      <Meta
        property="og:title"
        content="Cold Pressed Juices in Gurgaon | The Fit Sip"
      />
      <Meta
        property="og:description"
        content="Order cold pressed juices in Gurgaon. Fresh, natural, and delivered every morning."
      />
      <Meta
        property="og:image"
        content="https://thefitsip.com/assets/Images/juices-hero.png"
      />
      <Meta property="og:url" content="https://thefitsip.in/juices" />
      <MetaLink rel="canonical" href="https://thefitsip.in/juices" />

      {/* Page Sections */}
      <JuicesHero />
      <JuicesGrid />
      <WhyJuices />
      <TeasGrid />
      <WhyTeas />
      <WeeklyPlans />
    </main>
  );
};

export default JuicesPage;
