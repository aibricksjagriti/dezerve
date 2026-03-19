"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";

export default function FeaturesSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="bg-black text-white py-16 md:py-24 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div
          className={`flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight">
            Why <span className="font-semibold">choose Dezerv</span> as your{" "}
            <br />
            Investment Partner?
          </h2>

          <button className="flex items-center gap-2 bg-white text-black px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm md:text-base font-medium hover:bg-gray-200 transition">
            Schedule a call
          </button>
        </div>

        {/* GRID 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-4">
          {/* LEFT CARD */}
          <div
            className={`bg-white text-black rounded-2xl p-6 md:p-8 transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-16"
            }`}
          >
            <h3 className="text-3xl font-semibold mb-2">
              Expertise you can trust
            </h3>
            <p className="text-gray-600 text-lg">
              20+ years of experience and managing 13,000 Cr+ assets
            </p>

            <div className="mt-8 flex justify-center">
              <Image
                src="/home/features-1.avif"
                alt=""
                width={480}
                height={480}
              />
            </div>
          </div>

          {/* RIGHT CARD */}
          <div
            className={`bg-white text-black rounded-2xl p-6 md:p-8 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-16"
            }`}
          >
            <h3 className="text-3xl font-semibold mb-2">Dedicated Support</h3>
            <p className="text-gray-600 text-lg">
              Expert support that works around your schedule, across time zones,
              from KYC to NRE/NRO setup, via phone and digital platforms.
            </p>

            <div className="mt-8 flex justify-center">
              <Image
                src="/home/features-2.avif"
                alt=""
                width={680}
                height={680}
              />
            </div>
          </div>
        </div>

        {/* GRID 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-4 mt-5">
          {/* LEFT CARD */}
          <div
            className={`bg-white text-black rounded-2xl p-6 md:p-8 transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-16"
            }`}
          >
            <h3 className="text-3xl font-semibold mb-2">
              Transparency & Tax compliant solutions
            </h3>
            <p className="text-gray-600 text-lg">
              Transparent reporting of investments, returns and fees. No lock-in
              period, 100% tax-compliant, with timely reports
            </p>

            <div className="mt-8 flex justify-center">
              <Image
                src="/home/features-3.avif"
                alt=""
                width={780}
                height={680}
              />
            </div>
          </div>

          {/* RIGHT CARD */}
          <div
            className={`bg-white text-black rounded-2xl p-6 md:p-8 transition-all duration-700 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-16"
            }`}
          >
            <h3 className="text-3xl font-semibold mb-2">
              Holistic Portfolio Management
            </h3>
            <p className="text-gray-600 text-lg">
              Expert led family investment reviews, real-time tracking on the
              Wealth Monitor app, and personalized solutions for your financial
              goals.
            </p>

            <div className="mt-8 flex justify-center">
              <Image
                src="/home/features-4.avif"
                alt=""
                width={680}
                height={680}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
