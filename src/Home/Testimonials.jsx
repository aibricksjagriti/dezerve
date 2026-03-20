"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Dr. Nikhil Idnani",
    role: "BCG, UAE",
    image: "/home/nikhil.avif",
    text: `Dezerv helps me manage both my investments and my parents' portfolio from UAE, giving me peace of mind about my family's financial future.`,
  },
  {
    id: 2,
    name: "Ankur",
    role: "Group-IB, Singapore",
    image: "/home/ankur.avif",
    text: `Delighted with Dezerv's 25% risk-adjusted returns, exceeding my 12-15% target on my Indian investments.`,
  },
  {
    id: 3,
    name: "Pranay Swarup",
    role: "SuperStuff.ai, USA",
    image: "/home/pranay.avif",
    text: `During the market dip, reached my Dezerv investment expert at midnight on a Sunday and got immediate guidance for my portfolio. An impeccable service!`,
  },
  {
    id: 4,
    name: "Tejas Dighe",
    role: "Dubai Islamic Bank, Dubai",
    image: "/home/tejas.avif",
    text: `What I love about Dezerv is how they make everything seamless while saving me valuable time for NRIs like
me.`,
  },
];

export default function Testimonials() {
  const sliderRef = useRef(null);
  const sectionRef = useRef(null);

  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Mouse Events
  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDown(false);
  const handleMouseUp = () => setIsDown(false);

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  // Touch Events
  const handleTouchStart = (e) => {
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section id="testimonials" ref={sectionRef} className="text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-6xl font-500 mb-4 ">
          Trusted by <span className="font-bold">wealth creators</span> like you
        </h2>

        <p className="text-gray-400 mb-20 tracking-wide text-2xl ">
          HEAR FROM OUR CLIENTS
        </p>
      </div>
      <div className="max-w-8xl mx-auto px-4">
        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto cursor-grab active:cursor-grabbing scroll-smooth snap-x snap-mandatory no-scrollbar"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="min-w-[320px] md:min-w-[600px] lg:min-w-[900px] bg-[#111] rounded-3xl overflow-hidden flex flex-col md:flex-row snap-start"
            >
              {/* Image */}
              <div className="relative w-full md:w-1/2 h-[300px] md:h-auto">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 bg-[#eaeaea] text-black p-6 md:p-10 flex flex-col justify-between">
                <p className="text-2xl  leading-relaxed text-[#aaabac] mb-6 font-600">
                  “{item.text}”
                </p>

                <div className="pt-16">
                  <h3 className="text-2xl font-semibold">{item.name}</h3>
                  <p className="text-[#aaabac] text-sm">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hide Scrollbar */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
