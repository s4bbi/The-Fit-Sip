// src/pages/HomePage.jsx
import React from "react";
import { Helmet } from "react-helmet-async"; // ✅ SEO
import Header from "../components/Common/Header";
import Hero from "../components/HomePage/Hero";
import Commitment from "../components/HomePage/Commitment";
import Offerings from "../components/HomePage/Offerings";
import Plans from "../components/HomePage/Plans";
import WeeklyPlans from "../components/HomePage/WeeklyPlans";
import WhyUs from "../components/HomePage/WhyUs";
import Testimonials from "../components/HomePage/Testimonials";
import VideoReviews from "../components/HomePage/VideoReviews";
import Footer from "../components/Common/Footer";

export default function HomePage() {
  return (
    <div className="w-screen flex flex-col">
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>The Fit Sip | Fresh Juices, Smoothies & Healthy Meals in Gurgaon</title>
        <meta
          name="description"
          content="Order cold-pressed juices, smoothies, salads, oats, and fruit bowls delivered fresh before 8 AM in Gurgaon. 100% natural, no sugar, no preservatives."
        />
        <meta
          name="keywords"
          content="cold pressed juices Gurgaon, healthy smoothies Gurgaon, salad delivery Gurgaon, oats breakfast Gurgaon, fruit bowls Gurgaon, The Fit Sip"
        />
        <meta property="og:title" content="The Fit Sip | Fresh Juices & Healthy Meals" />
        <meta
          property="og:description"
          content="Healthy cold-pressed juices, shots, smoothies, oats & fruit bowls delivered fresh every morning in Gurgaon."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thefitsip.com" />
        <meta property="og:image" content="/fitsip-og-image.jpg" />
      </Helmet>

      {/* Page Sections */}
      <Hero />
      <Commitment />
      <Offerings />
      <Plans />
      <WeeklyPlans />
      <WhyUs />
      <Testimonials />
      <VideoReviews />
    </div>
  );
}
