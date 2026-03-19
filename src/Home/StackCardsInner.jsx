"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function StackCardsInner() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.config({ force3D: true });

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".card");

      gsap.set(cards, {
        y: 120,
        opacity: 0,
      });

      gsap.set(cards[0], {
        y: 0,
        opacity: 1,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=1000", // ✅ FIXED
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      cards.forEach((card, i) => {
        if (i === 0) return;

        tl.to(
          card,
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
          },
          i * 0.6,
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-[420px] md:h-[480px] overflow-visible sticky top-30" // ✅ FIXED
    >
      <div className="relative w-full h-full">
        {[
          "https://assets.codepen.io/16327/portrait-pattern-1.jpg",
          "https://assets.codepen.io/16327/portrait-pattern-2.jpg",
          "https://assets.codepen.io/16327/portrait-pattern-3.jpg",
          "https://assets.codepen.io/16327/portrait-pattern-4.jpg",
        ].map((img, i) => (
          <div
            key={i}
            className="card absolute top-0 left-0 w-full h-[300px] md:h-[350px] rounded-xl bg-cover bg-top shadow-xl"
            style={{
              backgroundImage: `url(${img})`,
              zIndex: i + 1,
            }}
          />
        ))}
      </div>
    </div>
  );
}
