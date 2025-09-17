// src/pages/HomePage.jsx
import React from "react";
import { Title, Meta, Link as MetaLink } from "react-head"; // ✅ SEO with react-head
import Hero from "../components/HomePage/Hero";
import Commitment from "../components/HomePage/Commitment";
import Offerings from "../components/HomePage/Offerings";
import Plans from "../components/HomePage/Plans";
import WeeklyPlans from "../components/HomePage/WeeklyPlans";
import WhyUs from "../components/HomePage/WhyUs";
import Testimonials from "../components/HomePage/Testimonials";
import VideoReviews from "../components/HomePage/VideoReviews";

export default function HomePage() {
  return (
    <div className="max-w-screen mx-auto flex flex-col">
      {/* ✅ SEO Meta Tags */}
      <Title>The Fit Sip | Fresh Juices, Smoothies & Healthy Meals in Gurgaon</Title>
      <Meta
        name="description"
        content="Order cold-pressed juices, smoothies, salads, oats, and fruit bowls delivered fresh before 8 AM in Gurgaon. 100% natural, no sugar, no preservatives."
      />
      <Meta
        name="keywords"
        content="cold pressed juices Gurgaon, healthy smoothies Gurgaon, salad delivery Gurgaon, oats breakfast Gurgaon, fruit bowls Gurgaon, The Fit Sip"
      />
      <Meta property="og:title" content="The Fit Sip | Fresh Juices & Healthy Meals" />
      <Meta
        property="og:description"
        content="Healthy cold-pressed juices, shots, smoothies, oats & fruit bowls delivered fresh every morning in Gurgaon."
      />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://thefitsip.com" />
      <Meta property="og:image" content="/fitsip-og-image.jpg" />
      <MetaLink rel="canonical" href="https://thefitsip.com" />

      {/* Page Sections */}
      <Hero />
      {/* <Commitment /> */}
      <Offerings />
      <Plans />
      <WeeklyPlans />
      <WhyUs />
      <Testimonials />
      <VideoReviews />
    </div>
  );
}
