import React from "react";
import JuicesHero from "../components/Juices/JuicesHero";
import JuicesGrid from "../components/Juices/JuicesGrid";
import WhyJuices from "../components/Juices/WhyJuices";
import WeaklyPlans from "../components/HomePage/WeeklyPlans";
import { Helmet } from "react-helmet-async";

const JuicesPage = () => {
  return (
    <main className="w-full">
      <Helmet>
        <title>The Fit Sip | Cold Pressed Juices in Gurgaon</title>
        <meta
          name="description"
          content="Fresh cold pressed juices delivered before 8 AM in Gurgaon. 100% natural, sugar-free, preservative-free."
        />
        <meta name="keywords" content="cold pressed juices Gurgaon, healthy juice delivery Gurgaon, sugar free juices" />
        <meta property="og:title" content="Cold Pressed Juices in Gurgaon | The Fit Sip" />
        <meta property="og:description" content="Order cold pressed juices in Gurgaon. Fresh, natural, and delivered every morning." />
        <meta property="og:image" content="https://thefitsip.com/assets/Images/juices-hero.png" />
        <meta property="og:url" content="https://thefitsip.com/juices" />
      </Helmet>
      <JuicesHero />
      <JuicesGrid />
      <WhyJuices />
      <WeaklyPlans />
    </main>
  );
};

export default JuicesPage;
