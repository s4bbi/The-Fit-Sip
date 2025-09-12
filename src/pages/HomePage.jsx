// src/pages/HomePage.jsx
import React from "react";
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
