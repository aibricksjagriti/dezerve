"use client";

import { useRef } from "react";
import StackCardsInner from "./StackCardsInner";

export default function NriInvestSection() {
  const sectionRef = useRef(null);

  return (
    <section id="invest" ref={sectionRef} className="bg-black text-white">
      {/* SCROLL AREA */}
      <div className="relative h-[200vh]">
        {/* STICKY CONTAINER */}
        <div className="sticky top-0 h-screen flex items-center px-6 md:px-16">
          <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center">
            {/* LEFT TEXT */}
            <div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-500 leading-tight">
                Why NRIs are <br />
                <span className="font-bold">investing in India</span> now?
              </h2>

              <button className="flex items-center gap-2 bg-white text-black px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm md:text-base font-medium hover:bg-gray-200 transition mt-10">
                {/* Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Schedule a call
              </button>
            </div>

            {/* RIGHT CARD */}
            <div className="bg-[#111] rounded-2xl p-4 md:p-6 shadow-xl border border-white/10 h-[500px] md:h-[550px] overflow-hidden">
              <div className="h-[380px] md:h-[420px] overflow-hidden">
                <StackCardsInner />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
