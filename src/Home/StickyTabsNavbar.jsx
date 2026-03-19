// "use client";

// import { useState } from "react";

// const tabs = [
//   "Invest In India",
//   "Challenges",
//   "Features",
//   "Solutions",
//   "Testimonials",
//   "Get Started",
// ];

// export default function StickyTabsNavbar() {
//   const [active, setActive] = useState("Invest In India");

//   return (
//     <div className="w-full bg-black sticky top-0 z-50 border-b border-gray-800 pt-6">
//       <div className="max-w-8xl mx-auto px-4">
//         {/* Scrollable on mobile */}
//         {/* <div className="flex overflow-x-auto no-scrollbar">
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActive(tab)}
//               className={`relative whitespace-nowrap px-4 sm:px-6 py-4 text-sm sm:text-base transition-all
//                 ${
//                   active === tab
//                     ? "text-white"
//                     : "text-gray-400 hover:text-white"
//                 }`}
//             >
//               {tab}

//               {active === tab && (
//                 <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white"></span>
//               )}
//             </button>
//           ))}
//         </div> */}
//         {/* Desktop: evenly spaced | Mobile: scroll */}
//         <div className="flex justify-between md:justify-between overflow-x-auto no-scrollbar px-8">
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActive(tab)}
//               className={`relative whitespace-nowrap py-4 text-lg transition-all
//                 ${
//                   active === tab
//                     ? "text-white"
//                     : "text-gray-400 hover:text-white"
//                 }`}
//             >
//               {tab}

//               {/* Underline */}
//               {active === tab && (
//                 <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white"></span>
//               )}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

export default function StickyTabsNavbar({ active, setActive }) {
  const tabs = [
    "Invest In India",
    "Challenges",
    "Features",
    "Solutions",
    "Testimonials",
    "Get Started",
  ];

  return (
    <div className="w-full bg-black sticky top-0 z-50 border-b border-gray-800 pt-6">
      <div className="max-w-8xl mx-auto px-4">
        <div className="flex justify-between overflow-x-auto no-scrollbar px-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`relative whitespace-nowrap py-4 text-lg transition-all
                ${
                  active === tab
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
            >
              {tab}

              {active === tab && (
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white"></span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
