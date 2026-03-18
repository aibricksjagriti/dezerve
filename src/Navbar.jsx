// components/Navbar.jsx

import React from "react";

export default function Navbar() {
  return (
    <div className="w-full px-4 py-4">
      <div className="max-w-[90%] mx-auto bg-black rounded-2xl px-4 sm:px-6 md:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-lg sm:text-xl md:text-2xl font-semibold tracking-widest">
          DEZERV
        </div>

        {/* CTA Button */}
        <button className="flex items-center gap-2 bg-white text-black px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm md:text-base font-medium hover:bg-gray-200 transition">
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
    </div>
  );
}
