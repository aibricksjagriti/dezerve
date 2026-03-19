"use client";

import Image from "next/image";
import { useRef } from "react";

export default function SolutionsSection() {
  const sectionRef = useRef(null);
  return (
    <section
      id="solutions"
      ref={sectionRef}
      className="bg-black text-white py-16 md:py-24 px-4 sm:px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight max-w-3xl">
            Customised{" "}
            <span className="font-semibold">Investment Solutions</span> for NRIs
          </h2>

          <button className="flex items-center gap-2 bg-white text-black px-5 py-3 rounded-full text-sm sm:text-base font-medium hover:bg-gray-200 transition w-fit">
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

        {/* MAIN CARD */}
        <div className="bg-[#151515] rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* LEFT CONTENT */}
          <div className="flex-1">
            {/* ICON */}
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </div>

            <h3 className="text-3xl font-semibold mb-4">Equity PMS</h3>

            <p className="text-[#afafaf] text-lg leading-relaxed max-w-xl">
              An{" "}
              <span className="text-[#afafaf] font-medium">
                actively managed portfolio
              </span>{" "}
              consisting of mutual funds that invest across{" "}
              <span className="text-[#afafaf] font-medium">
                large-cap, mid-cap, and small-cap
              </span>{" "}
              stocks
            </p>
          </div>

          {/* RIGHT VISUAL */}
          <div className="flex-1 w-full flex justify-center">
            <div className="relative w-full max-w-[420px] h-[250px] sm:h-[300px] md:h-[340px] rounded-2xl border border-white/10  overflow-hidden border">
              <Image
                src="/home/graph.avif"
                alt="graph"
                fill
                className="object-cover opacity-80 p-4 rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* FOOTNOTE */}
        <p className="text-gray-400 text-md mt-6 flex items-start gap-2">
          <span className="w-4 h-4 text-gray-800 rounded-full bg-[#c0c0c0] flex items-center justify-center text-[10px] mt-[2px]">
            i
          </span>
          Dezerv has offerings other than PMS as well like Alternative Assets &
          Private Equity through AIF
        </p>
      </div>
    </section>
  );
}
