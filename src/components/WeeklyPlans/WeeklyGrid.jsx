// src/components/WeeklyPlans/WeeklyPlansGrid.jsx
import React, { useEffect, useRef } from "react";
import WeeklyPlanCard from "./WeeklyPlansCard";
import { gsap } from "gsap";

const WeeklyGrid = ({ plans }) => {
  const gridRef = useRef(null);

  useEffect(() => {
    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.15,
        }
      );
    }
  }, [plans]); // run animation whenever plans change

  return (
    <div ref={gridRef} className="flex flex-col gap-8 mt-8">
      {plans.map((plan, idx) => (
        <WeeklyPlanCard key={idx} {...plan} />
      ))}
    </div>
  );
};

export default WeeklyGrid;
