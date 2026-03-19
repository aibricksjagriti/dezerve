"use client";

import StackCardsInner from "./StackCardsInner";

export default function NriInvestSection() {
  return (
    <section className="bg-black text-white">
      {/* SCROLL AREA */}
      <div className="relative h-[200vh]">
        {/* STICKY CONTAINER */}
        <div className="sticky top-0 h-screen flex items-center px-6 md:px-16">
          <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center">
            {/* LEFT TEXT */}
            <div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                Why NRIs are <br />
                <span className="font-bold">investing in India</span> now?
              </h2>

              <button className="mt-8 bg-white text-black px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-200 transition">
                📅 Schedule a call
              </button>
            </div>

            {/* RIGHT CARD */}
            <div className="bg-[#111] rounded-2xl p-4 md:p-6 shadow-xl border border-white/10 h-[500px] md:h-[550px] overflow-hidden">
              {/* CARD HEADER */}
              {/* <div className="mb-4 md:mb-6">
                <h3 className="text-lg md:text-xl font-semibold">
                  4th Largest Economy
                </h3>
                <p className="text-sm text-gray-400 mt-2">
                  India's economic growth creates wealth-building opportunities.
                </p>
              </div> */}

              {/* STACK CARDS INSIDE */}
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
