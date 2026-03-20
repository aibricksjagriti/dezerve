"use client";

import Image from "next/image";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaAppStoreIos,
} from "react-icons/fa";
import { FiLock, FiShield, FiArrowUpRight } from "react-icons/fi";
import { HiOutlineLockClosed } from "react-icons/hi2";
import { IoLogoGooglePlaystore } from "react-icons/io5";

export default function Footer() {
  const features = [
    {
      icon: <HiOutlineLockClosed className="text-white text-[26px]" />,
      title: "ISO 27001 Certified",
      desc: "Compliant with international data standards",
      circleBg: "bg-[#2DB5B0]",
    },
    {
      icon: <FiShield className="text-white text-[26px]" />,
      title: "Secure and private",
      desc: "Data encrypted with 256-bit AES encryption.",
      circleBg: "bg-[#7ACB8A]",
    },
    {
      icon: <FiLock className="text-white text-[26px]" />,
      title: "Regulated entity",
      desc: "With licenses from SEBI, APMI and AMFI",
      circleBg: "bg-[#2DB5B0]",
    },
  ];

  return (
    <footer className="bg-black text-white pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-bold tracking-wider">DEZERV</h2>

          <div className="flex gap-4 text-gray-300 text-4xl">
            <FaLinkedin className="cursor-pointer hover:text-white" />
            <FaFacebook className="cursor-pointer hover:text-white" />
            <FaInstagram className="cursor-pointer hover:text-white" />
            <FaTwitter className="cursor-pointer hover:text-white" />
            <FaYoutube className="cursor-pointer hover:text-white" />
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Section */}
          <div>
            <h3 className="text-5xl font-semibold leading-tight mb-8 max-w-lg">
              You are building India’s future, we would like to build yours.
            </h3>

            {/* QR Box */}
            <div className="flex items-center gap-4 bg-[#1a1a1a] p-4 rounded-xl w-fit mb-6">
              <Image src="/home/QR.svg" alt="QR" width={80} height={80} />
              <div>
                <p className="text-sm font-medium">
                  Track all your investments <br /> in one place
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Download Wealth Monitor App
                </p>

                <div className="flex gap-2 mt-3">
                  {/* <Image
                    src="/images/appstore.png"
                    alt="appstore"
                    width={22}
                    height={22}
                  /> */}
                  <FaAppStoreIos size={20} color="#00a1fe" />
                  <IoLogoGooglePlaystore size={20} />
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <p className="text-gray-400 text-md max-w-md">
              Our weekly expert newsletter on stories that matter to your money.
            </p>
            <div className="flex items-center bg-[#111] rounded-full overflow-hidden w-full max-w-xs mt-6">
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent px-4 py-2 text-sm w-full outline-none"
              />
              <button className="bg-white text-black px-4 py-2 text-sm rounded-full m-1">
                Subscribe
              </button>
            </div>
          </div>

          {/* Right Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            {/* Column 1 */}
            <div>
              <h4 className="text-gray-400 text-2xl mb-4">
                Knowledge Repository
              </h4>
              <ul className="space-y-2 text-md">
                <li>Bonds</li>
                <li>IPA</li>
                <li>Mutual Funds</li>
                <li>Portfolio Management Services</li>
                <li>Wealth Monitor</li>
                <li>ERS Factsheet</li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="text-gray-400 text-2xl mb-4">About</h4>
              <ul className="space-y-2 text-md">
                <li>Team</li>
                <li>Careers</li>
                <li>FAQs</li>
                <li>Blog</li>
                <li>Investment Philosophy</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="text-gray-400 text-2xl mb-4">Legal</h4>
              <ul className="space-y-2 text-md">
                <li>Contact</li>
                <li>Disclaimer</li>
                <li>ODR Portal</li>
                <li>Privacy</li>
                <li>Returns & Cancellation</li>
                <li>Security</li>
                <li>Terms & Disclosure</li>
                <li>KYC Check</li>
                <li>Scheme documents</li>
                <li>Fraud Notice</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Middle Cards */}
        <div className="mt-12 bg-[#111] rounded-2xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="mb-3 text-green-400 text-4xl">🔒</div>
            <h4 className="font-semibold mb-1 text-2xl">ISO 27001 Certified</h4>
            <p className="text-lg text-gray-400 ">
              Compliant with International data standards
            </p>
          </div>

          <div>
            <div className="mb-3 text-green-400 text-4xl">🛡️</div>
            <h4 className="font-semibold mb-1 text-2xl">Secure and private</h4>
            <p className="text-lg text-gray-400">
              Data encrypted with 256-bit AES encryption.
            </p>
          </div>

          <div>
            <div className="mb-3 text-green-400 text-4xl">🔒</div>
            <h4 className="font-semibold mb-1 text-2xl">Regulated entity</h4>
            <p className="text-lg text-gray-400">
              With licenses from SEBI, APMI and AMFI
            </p>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-10 text-lg text-[#f7f9fb] space-y-4">
          <p>©2021-2026 Dezerv. All Rights Reserved</p>

          <p>
            Dezerv Investments Private Limited is a registered as a Portfolio
            Manager bearing SEBI Registration no. INP000007377 and also acts as
            an Investment Manager to Dezerv Innovation Fund, Category – I
            AIF-VCF-Angel Fund bearing SEBI Registration no. IN/AIF1/22-23/1066;
            Dezerv Alternatives Trust, Category II AIF bearing SEBI Registration
            no. IN/AIF2/23-24/1345 and Dezerv Alpha Equity Trust, a Category III
            AIF bearing SEBI Registration no. IN/AIF3/23-24/1467.Distribution
            services are offered through
          </p>

          <p>
            Dezerv Distribution Services Private Limited, a wholly owned
            subsidiary of Dezerv Investments Private Limited vide AMFI
            Registration no. (ARN)- 248439 and APMI registration no. (APRN)-
            00615. Terms and condition of the website are applicable. Privacy
            Policy of the website is applicable.
          </p>
        </div>
      </div>
    </footer>
  );
}
