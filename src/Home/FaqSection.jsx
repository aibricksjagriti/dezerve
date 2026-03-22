"use client";

import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqs = [
  {
    question:
      "What is the minimum investment required to open a PMS account with Dezerv?",
    answer: [
      "The minimum investment amount is ₹50 lakhs",
      "You can invest either as liquid cash or transfer (mutual fund) existing investments worth greater than or equal to 50L",
      "Both NRE and NRO accounts can be used for investing",
    ],
  },
  {
    question: "What documents do I need to start investing as an NRI?",
    answer: [
      "Valid passport and visa copy",
      "Recent overseas address proof (utility bill)",
      "PAN card (Aaddhar if available)",
      "Cancelled cheque of your NRE/NRO account",
      "Passport size photographs",
      "FATCA declaration",
      "Nominee identity proof",
      "Indian Mobile Number",
      "Need to do IPV (In-person verification)",
    ],
  },
  {
    question: "How do I track my investments and get regular updates?",
    answer: [
      "24/7 access to your portfolio through the Wealth Monitor app or through Wealth Spectrum",
      "Monthly detailed performance reports",
      "Quarterly portfolio review calls with investment experts",
      "Regular updates on WhatsApp/email",
      "Notifications of the transactions made",
    ],
  },
  {
    question: "How are taxes handled for NRI investments in PMS?",
    answer: [
      "Dezerv team provides assistance with tax compliance for both India and your country of residence",
      "Support with DTAA (Double Taxation Avoidance Agreement) benefits",
      "Regular tax reports for filing returns",
      "Advance tax planning and projections",
      "Tax-loss harvesting opportunities when applicable",
    ],
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" text-white px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <h2 className="text-white text-6xl leading-[1.05] font-light tracking-[-0.03em]">
            Still got questions?
          </h2>
          <h3 className="mt-2 text-white text-6xl leading-[1.05] font-bold tracking-[-0.03em]">
            We’re here to help.
          </h3>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-[24px] transition-all duration-300 ${
                  isOpen
                    ? "bg-[#141414] px-5 sm:px-7 md:px-8 py-5 sm:py-6"
                    : "bg-transparent px-0 py-0"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-start justify-between gap-4 text-left"
                >
                  <span
                    className={`${
                      isOpen
                        ? "text-xl font-semibold leading-[1.25]"
                        : "text-xl font-semibold leading-[1.25]"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <span className="shrink-0 mt-1 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#2a2a2d] flex items-center justify-center text-white">
                    {isOpen ? (
                      <FiChevronUp className="text-[22px]" />
                    ) : (
                      <FiChevronDown className="text-[22px]" />
                    )}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 mt-5"
                      : "grid-rows-[0fr] opacity-0 mt-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <ul className="pl-5 sm:pl-6 space-y-4 list-disc marker:text-[#c9b28f]">
                      {faq.answer.map((point, i) => (
                        <li
                          key={i}
                          className="text-[#b9b9b9] text-md leading-[1.9]"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {!isOpen && (
                  <div className="border-b border-[#1e1e1e] mt-8"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
