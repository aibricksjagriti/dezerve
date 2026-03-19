export default function TrustSection() {
  return (
    <section className="w-full text-white py-12 sm:py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
        {/* ITEM 1 */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-green-300 to-green-600">
            {/* Icon */}
            <svg
              className="w-7 h-7 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path d="M9 12l2 2 4-4" />
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            SEBI Registered:
            <br />
            <span className="text-white font-medium">INP000007377</span>
          </p>
        </div>

        {/* ITEM 2 */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center">
            {/* <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white">
              <span className="text-red-500 font-bold text-lg">i</span>
            </div>
            <div className="-ml-3 w-14 h-14 flex items-center justify-center rounded-full bg-white">
              <span className="text-black font-bold text-lg">∩</span>
            </div> */}
            <img src="home/2nd-icon.avif" alt="" className="w-26" />
          </div>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xs">
            Funds are held with ICICI /<br />
            Nuvama custodian bank
          </p>
        </div>

        {/* ITEM 3 */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-teal-700">
            {/* Icon */}
            <svg
              className="w-7 h-7 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path d="M12 11c1.1 0 2-.9 2-2V7a2 2 0 10-4 0v2c0 1.1.9 2 2 2z" />
              <path d="M5 11h14v10H5z" />
            </svg>
          </div>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            ISO 27001
            <br />
            <span className="text-white font-medium">Certified</span>
          </p>
        </div>
      </div>
    </section>
  );
}
