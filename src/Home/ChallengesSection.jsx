"use client";

import { useRef } from "react";

export default function ChallengesSection() {
  const sectionRef = useRef(null);

  const data = [
    {
      title: "Complex Paperwork",
      desc: "Endless paperwork, multiple verifications, and constant follow-ups.",
      icon: "📄",
    },
    {
      title: "Inadequate Support",
      desc: "RMs might not be available in your time zone.",
      icon: "🎧",
    },
    {
      title: "Tax Compliance",
      desc: "Navigating complex international tax rules is overwhelming.",
      icon: "📊",
    },
    {
      title: "Limited Investment Options",
      desc: "Fewer and in-efficient investment solutions for you and your family.",
      icon: "📦",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="challenges"
      className="text-white py-16 md:py-24 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADING */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-500 leading-tight mb-20">
          <span className="font-bold">Common Challenges</span> faced by NRIs
          when investing in India
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {data.map((item, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#111] border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition"
            >
              {/* ICON */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-500/20 mb-4 text-xl">
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-400 text-sm md:text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
