"use client";

import { useEffect, useState } from "react";

export default function HeroSection() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 300); // trigger animation once
  }, []);

  return (
    <section className="w-full  text-white px-4 sm:px-6 md:px-10 py-12 md:py-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
            NRIs trust <span className="font-semibold">Dezerv</span> to
            <br /> invest in India
          </h1>

          {/* Bullet Points */}
          <div className="mt-6 space-y-4 text-sm sm:text-base text-gray-300">
            {[
              "Proven track record (20.33% TWRR since inception)",
              "Dedicated investment experts for NRIs",
              "Effortless account opening & onboarding",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 flex items-center justify-center border border-white rounded-full text-xs text-white">
                  ✓
                </div>
                <p>{item}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button className="flex items-center gap-2 bg-white text-black px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm md:text-base font-medium hover:bg-gray-200 transition mt-8">
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
        <div className="w-full lg:w-1/2">
          <div className="bg-[#1a1a1a] rounded-2xl p-6 sm:p-8 shadow-lg">
            <p className="text-lg text-gray-400 mb-6">
              ₹1 cr invested in Sep-2022 would have been:
            </p>

            {/* BAR CHART */}
            <div className="flex items-end justify-between h-56 sm:h-64 md:h-72 gap-6">
              {/* BAR 1 */}
              <div className="flex flex-col items-center justify-end w-1/2">
                <p className="text-gray-400 mb-2 text-2xl  font-semibold">
                  ₹1.50 Cr
                </p>

                <div className="w-full h-40 sm:h-48 md:h-56 rounded-xl overflow-hidden flex items-end">
                  <div
                    className={`w-full bg-[#323232] transition-all rounded-xl duration-1000 ease-out ${
                      animate ? "h-[70%]" : "h-0"
                    }`}
                  />
                </div>
              </div>

              {/* BAR 2 */}
              <div className="flex flex-col items-center justify-end w-1/2">
                <p className="text-white mb-2 text-2xl  font-semibold">
                  ₹1.66 Cr
                </p>

                <div className="w-full h-40 sm:h-48 md:h-56 rounded-xl overflow-hidden flex items-end">
                  <div
                    className={`w-full bg-[#87ac5c] transition-all duration-1000 ease-out rounded-xl ${
                      animate ? "h-[90%]" : "h-0"
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* FOOTER */}
            <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col sm:flex-row justify-between text-sm text-gray-400 gap-2">
              <div>
                Market Index:
                <br />
                <span className="text-white">BSE 500 TRI</span>
              </div>

              <div className="sm:text-right">
                <span className="text-white font-semibold">Dezerv PMS</span>
                <br />
                Equity Revival Strategy
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
