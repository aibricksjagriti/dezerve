"use client";
import React, { useEffect, useState } from "react";
import StickyTabsNavbar from "./StickyTabsNavbar";
import NriInvestSection from "./NriInvestSection";
import ChallengesSection from "./ChallengesSection";
import FeaturesSection from "./FeaturesSection";
import SolutionsSection from "./SolutionsSection";

const StickySection = () => {
  const [active, setActive] = useState("Invest In India");

  useEffect(() => {
    const sections = [
      { id: "invest", tab: "Invest In India" },
      { id: "challenges", tab: "Challenges" },
      { id: "features", tab: "Features" },
      { id: "solutions", tab: "Solutions" },
    ];

    const handleScroll = () => {
      let currentSection = "";

      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (!el) return;

        const rect = el.getBoundingClientRect();

        // 👇 Check which section is most in viewport center
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          currentSection = section.tab;
        }
      });

      if (currentSection) {
        setActive(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* NAVBAR */}
      <StickyTabsNavbar active={active} setActive={setActive} />

      {/* <StackCards /> */}
      <NriInvestSection />
      <ChallengesSection />
      <FeaturesSection />
      <SolutionsSection />
    </div>
  );
};

export default StickySection;
