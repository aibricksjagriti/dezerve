"use client";

import Link from "next/link";
import { FiArrowRight, FiCheck, FiUser } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { RiLineChartLine } from "react-icons/ri";

export default function CheckoutPage() {
  return (
    <section className="min-h-screen bg-[#242120] text-white px-4 sm:px-6 lg:px-8 py-6 md:py-10">
      <div className="max-w-[1440px] mx-auto mb-4 md:mb-5">
        <Link href="/">
          <h1 className="text-white text-[28px] sm:text-[34px] font-bold tracking-[0.16em]">
            DEZERV
          </h1>
        </Link>
      </div>

      <div className="border-t border-white/10" />

      <div className="max-w-[1060px] mx-auto mt-4 md:mt-5">
        <div className="rounded-[24px] md:rounded-[28px] bg-black px-5 py-5 sm:px-8 sm:py-8 md:px-10 md:py-10 lg:px-12 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
            {/* LEFT CARD */}
            <div className="rounded-[24px] bg-[#171515] px-6 py-7 sm:px-8 sm:py-8 md:px-9 md:py-9 min-h-[460px] flex flex-col">
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                <FiUser className="text-[30px] text-white/50" />
              </div>

              <div className="mt-10">
                <h2 className="text-2xl leading-[1.1] font-semibold tracking-[-0.02em] max-w-[420px]">
                  Unfortunately you are not eligible for Dezerv PMS service
                </h2>

                <p className="mt-6 text-lg leading-[1.35] text-white/90 max-w-[360px]">
                  SEBI Regulations require at least ₹50 Lakh to invest in PMS
                </p>
              </div>

              <div className="mt-auto pt-10">
                <button
                  type="button"
                  className="w-full rounded-[18px] bg-[#232120] px-5 py-5 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <FaWhatsapp className="text-[24px] text-white/80" />
                    </div>

                    <div>
                      <p className="text-[18px] sm:text-[20px] font-medium leading-tight">
                        Need assistance?
                      </p>
                      <p className="text-md text-white/65 mt-1">
                        Request a callback
                      </p>
                    </div>
                  </div>

                  <FiArrowRight className="text-[24px] text-white/75 shrink-0" />
                </button>

                <button
                  type="button"
                  className="mt-6 w-full h-[60px] rounded-[14px] bg-white text-black text-md font-semibold flex items-center justify-center gap-3 hover:bg-white/90 transition"
                >
                  Edit my current value
                  <FiArrowRight className="text-md" />
                </button>
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="rounded-[24px] bg-[#171515] px-6 py-7 sm:px-8 sm:py-8 md:px-9 md:py-9 min-h-[460px] flex flex-col">
              <div className="w-14 h-14 rounded-full bg-[#39b7b3] flex items-center justify-center">
                <RiLineChartLine className="text-[28px] text-white" />
              </div>

              <div className="mt-10">
                <h2 className="text-2xl leading-[1.1] font-semibold tracking-[-0.02em] max-w-[430px]">
                  Invest in long terms portfolios to grow your wealth
                </h2>

                <p className="mt-6 text-lg leading-[1.35] text-white/90">
                  Requires Min ₹50,000
                </p>

                <div className="mt-8 space-y-5">
                  <div className="flex items-center gap-4">
                    <span className="w-8 h-8 rounded-full bg-[#39b7b3] flex items-center justify-center shrink-0">
                      <FiCheck className="text-black text-[18px]" />
                    </span>
                    <span className="text-lg text-white">
                      Managed by experts
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="w-8 h-8 rounded-full bg-[#39b7b3] flex items-center justify-center shrink-0">
                      <FiCheck className="text-black text-[18px]" />
                    </span>
                    <span className="text-lg text-white">
                      Managed by experts
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="w-8 h-8 rounded-full bg-[#39b7b3] flex items-center justify-center shrink-0">
                      <FiCheck className="text-black text-[18px]" />
                    </span>
                    <span className="text-lg text-white">
                      Maximise your returns
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-10">
                <button
                  type="button"
                  className="w-full h-[60px] rounded-[14px] bg-white text-black text-md font-semibold flex items-center justify-center gap-3 hover:bg-white/90 transition"
                >
                  Get started
                  <FiArrowRight className="text-md" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
