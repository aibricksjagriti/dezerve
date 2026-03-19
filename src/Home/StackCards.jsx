"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function StackCards() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cardsWrappers = gsap.utils.toArray(".card-wrapper");
      const cards = gsap.utils.toArray(".card");

      cardsWrappers.forEach((wrapper, i) => {
        const card = cards[i];

        let scale = 1;
        let rotation = 0;

        if (i !== cards.length - 1) {
          scale = 0.9 + 0.025 * i;
          rotation = -10;
        }

        gsap.to(card, {
          scale: scale,
          rotationX: rotation,
          transformOrigin: "top center",
          ease: "none",
          scrollTrigger: {
            trigger: wrapper,
            start: `top ${60 + 10 * i}`,
            end: "bottom 550",
            endTrigger: ".wrapper",
            scrub: true,
            pin: wrapper,
            pinSpacing: false,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-black text-white">
      {/* TOP SPACER */}
      <div className="w-full min-h-screen"></div>

      {/* WRAPPER */}
      <div className="wrapper w-full min-h-screen pt-[100px] pb-[50px] border-t border-dashed border-gray-600 border-b">
        <div className="cards w-full max-w-[750px] mx-auto px-5 md:w-[80%] md:px-[30px] lg:w-[70%] lg:px-[50px]">
          {/* CARD 1 */}
          <div className="card-wrapper w-full perspective-[500px] mb-[50px] last:mb-0">
            <div
              className="card w-full h-[400px] flex items-center justify-center text-[30px] rounded-[10px] bg-cover bg-no-repeat bg-top"
              style={{
                backgroundImage:
                  "url(https://assets.codepen.io/16327/portrait-pattern-1.jpg)",
              }}
            />
          </div>

          {/* CARD 2 */}
          <div className="card-wrapper w-full perspective-[500px] mb-[50px] last:mb-0">
            <div
              className="card two w-full h-[400px] flex items-center justify-center text-[30px] rounded-[10px] bg-cover bg-no-repeat bg-top"
              style={{
                backgroundImage:
                  "url(https://assets.codepen.io/16327/portrait-pattern-2.jpg)",
              }}
            />
          </div>

          {/* CARD 3 */}
          <div className="card-wrapper w-full perspective-[500px] mb-[50px] last:mb-0">
            <div
              className="card three w-full h-[400px] flex items-center justify-center text-[30px] rounded-[10px] bg-cover bg-no-repeat bg-top"
              style={{
                backgroundImage:
                  "url(https://assets.codepen.io/16327/portrait-pattern-3.jpg)",
              }}
            />
          </div>

          {/* CARD 4 */}
          <div className="card-wrapper w-full perspective-[500px] last:mb-0">
            <div
              className="card four w-full h-[400px] flex items-center justify-center text-[30px] rounded-[10px] bg-cover bg-no-repeat bg-top"
              style={{
                backgroundImage:
                  "url(https://assets.codepen.io/16327/portrait-pattern-4.jpg)",
              }}
            />
          </div>
        </div>
      </div>

      {/* BOTTOM SPACER */}
      <div className="w-full min-h-screen"></div>
    </div>
  );
}
