// "use client";

// import { useState } from "react";
// import {
//   FiArrowLeft,
//   FiArrowRight,
//   FiShield,
//   FiPlay,
//   FiX,
// } from "react-icons/fi";
// import { FaWhatsapp } from "react-icons/fa";
// import Link from "next/link";

// const steps = [
//   {
//     id: 1,
//     title: "What is your name?",
//     placeholder: "Enter your full name*",
//     name: "name",
//     type: "text",
//   },
//   {
//     id: 2,
//     title: "Enter your contact details",
//     subtitle: "Receive a reminder before the call",
//     placeholder: "Enter your phone number*",
//     name: "phone",
//     type: "tel",
//   },
//   {
//     id: 3,
//     title: "What’s the total value of your investments?",
//     subtitle:
//       "Include Stocks, MFs, FDs, and cash. This will helps us personalise your experience",
//     name: "investment",
//     type: "radio",
//   },
//   {
//     id: 4,
//     title: "What city do you live in?",
//     placeholder: "Enter your city*",
//     name: "city",
//     type: "text",
//   },
// ];

// const investmentOptions = [
//   "Below ₹50 Lakhs",
//   "₹50 Lakhs to ₹2 Crores",
//   "₹2 Crores to ₹5 Crores",
//   "₹5 Crore+",
// ];

// export default function MultiStepForm() {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [showOtpScreen, setShowOtpScreen] = useState(false);
//   const [otp, setOtp] = useState("");
//   const [resendTimer] = useState(26);

//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     investment: "",
//     city: "",
//   });

//   const currentField = steps[currentStep - 1];
//   const isStepTwo = currentStep === 2;
//   const isStepThree = currentStep === 3;
//   const isStepFour = currentStep === 4;

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [currentField.name]: e.target.value,
//     }));
//   };

//   const handleNext = () => {
//     if (currentStep === 2 && !showOtpScreen) {
//       setShowOtpScreen(true);
//       return;
//     }

//     if (currentStep === 2 && showOtpScreen) {
//       setCurrentStep(3);
//       setShowOtpScreen(false);
//       return;
//     }

//     if (currentStep < steps.length) {
//       setCurrentStep((prev) => prev + 1);
//     } else {
//       console.log("Submitted Data:", formData);
//     }
//   };

//   const handleBack = () => {
//     if (currentStep === 2 && showOtpScreen) {
//       setShowOtpScreen(false);
//       setOtp("");
//       return;
//     }

//     if (currentStep > 1) {
//       setCurrentStep((prev) => prev - 1);
//     }
//   };

//   const clearPhone = () => {
//     setFormData((prev) => ({
//       ...prev,
//       phone: "",
//     }));
//   };

//   const isContinueDisabled =
//     (currentStep === 1 && !formData.name.trim()) ||
//     (currentStep === 2 && !showOtpScreen && !formData.phone.trim()) ||
//     (currentStep === 2 && showOtpScreen && otp.length !== 4) ||
//     (currentStep === 3 && !formData.investment) ||
//     (currentStep === 4 && !formData.city.trim());

//   return (
//     <section className="min-h-screen bg-[#242120] text-white px-4 sm:px-6 lg:px-8 py-6 md:py-10">
//       <div className="max-w-[1440px] mx-auto mb-4 md:mb-5">
//         <Link href="/">
//           <h1 className="text-white text-[28px] sm:text-[34px] font-bold tracking-[0.16em]">
//             DEZERV
//           </h1>
//         </Link>
//       </div>

//       <div className="border-t border-white/10" />

//       <div className="max-w-[1060px] mx-auto mt-4 md:mt-5">
//         <div className="overflow-hidden rounded-[24px] md:rounded-[28px] bg-black grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] min-h-[620px]">
//           {/* LEFT PANEL */}
//           <div
//             className={`bg-black border-white/10 ${
//               isStepTwo || isStepThree || isStepFour
//                 ? "px-6 py-8 sm:px-8 md:px-10 md:py-10 border-b lg:border-b-0 lg:border-r flex items-center"
//                 : "px-6 py-7 sm:px-8 md:px-10 md:py-10 border-b lg:border-b-0 lg:border-r"
//             }`}
//           >
//             {isStepTwo || isStepThree || isStepFour ? (
//               <div className="w-full max-w-[360px]">
//                 <div className="mb-8">
//                   <img
//                     src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=120&q=80"
//                     alt="Client"
//                     className="w-14 h-14 rounded-full object-cover"
//                   />
//                 </div>

//                 <p className="text-xl font-semibold text-white">
//                   “Until this call, I didn’t know that majority of my funds were
//                   under performing benchmark.”
//                 </p>

//                 <p className="mt-10 text-lg font-semibold text-white">
//                   - Rajesh Begur,{" "}
//                   <span className="text-white/45">
//                     Founder - Begur & Partners
//                   </span>
//                 </p>
//               </div>
//             ) : (
//               <>
//                 <div className="flex items-start gap-4">
//                   <div className="relative shrink-0">
//                     <img
//                       src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
//                       alt="Expert"
//                       className="w-14 h-14 rounded-full object-cover"
//                     />
//                     <span className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-[#3b82f6] border-2 border-black" />
//                   </div>
//                 </div>

//                 <div className="mt-8">
//                   <h2 className="text-2xl leading-tight font-semibold">
//                     1:1 with a Dezerv expert
//                   </h2>
//                   <p className="mt-2 text-[14px] text-white/90">
//                     Free • No commitment call
//                   </p>

//                   <p className="mt-10 text-lg leading-[1.6] text-white/85 max-w-[420px]">
//                     Don’t leave your future to chance, discover how Dezerv PMS
//                     protects and grows your wealth.
//                   </p>
//                 </div>

//                 <div className="mt-10 rounded-[22px] overflow-hidden border border-white/10 bg-[#111] max-w-[470px]">
//                   <div className="relative">
//                     <img
//                       src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80"
//                       alt="Video preview"
//                       className="w-full h-[200px] sm:h-[250px] object-cover opacity-80"
//                     />

//                     <div className="absolute inset-0 bg-black/30" />

//                     <div className="absolute top-6 left-6">
//                       <h3 className="text-white text-[24px] sm:text-[28px] font-semibold leading-tight">
//                         Sandeep Jethwani
//                       </h3>
//                       <p className="mt-1 text-white/75 text-lg">
//                         Co-Founder, Dezerv
//                       </p>
//                     </div>

//                     <button
//                       type="button"
//                       className="absolute bottom-6 left-6 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center"
//                     >
//                       <FiPlay className="ml-1 text-[22px]" />
//                     </button>
//                   </div>
//                 </div>
//               </>
//             )}
//           </div>

//           {/* RIGHT PANEL */}
//           <div className="bg-[#070707] px-6 py-7 sm:px-8 md:px-10 lg:px-12 md:py-10 flex flex-col min-h-[620px]">
//             <div className="flex items-center justify-between">
//               <button
//                 type="button"
//                 onClick={handleBack}
//                 className={`flex items-center gap-3 transition ${
//                   currentStep === 1
//                     ? "text-white/30 cursor-not-allowed"
//                     : "text-white/80 hover:text-white"
//                 }`}
//                 disabled={currentStep === 1}
//               >
//                 <FiArrowLeft className="text-[22px] sm:text-[24px]" />
//                 <span className="text-[18px] sm:text-[20px] font-medium">
//                   Step {currentStep} of 4
//                 </span>
//               </button>

//               <button
//                 type="button"
//                 className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2.5 sm:px-4 sm:py-3 text-white/90 text-base sm:text-lg font-medium hover:bg-white/15 transition"
//               >
//                 <FaWhatsapp className="text-[#25D366] text-[18px] sm:text-[20px]" />
//                 <span>Help</span>
//               </button>
//             </div>

//             {/* STEP 2 */}
//             {isStepTwo ? (
//               <>
//                 {!showOtpScreen ? (
//                   <>
//                     <div className="flex-1 flex flex-col justify-center max-w-[520px] w-full mx-auto lg:mx-0">
//                       <div>
//                         <h3 className="text-2xl leading-[1.08] font-semibold tracking-[-0.02em]">
//                           {currentField.title}
//                         </h3>

//                         <p className="mt-3 text-white/70 text-[16px]">
//                           {currentField.subtitle}
//                         </p>

//                         <div className="mt-8">
//                           <div className="w-full rounded-[16px] border border-white/40 bg-transparent px-4 py-2">
//                             <label className="block text-white/70 text-[14px] sm:text-[15px] mb-2">
//                               Phone Number
//                             </label>

//                             <div className="flex items-center gap-3">
//                               <div className="shrink-0 flex items-center gap-3">
//                                 <span className="text-white text-xl font-medium leading-none">
//                                   +91
//                                 </span>
//                                 <div className="h-8 w-px bg-white/25" />
//                               </div>

//                               <input
//                                 type="tel"
//                                 name={currentField.name}
//                                 value={formData[currentField.name]}
//                                 onChange={handleChange}
//                                 className="flex-1 bg-transparent text-white text-xl outline-none placeholder:text-white/45"
//                               />

//                               {formData.phone && (
//                                 <button
//                                   type="button"
//                                   onClick={clearPhone}
//                                   className="shrink-0 w-6 h-6 rounded-full bg-white/15 text-white/70 flex items-center justify-center hover:bg-white/20"
//                                 >
//                                   <FiX className="text-[14px]" />
//                                 </button>
//                               )}
//                             </div>
//                           </div>
//                         </div>

//                         <button
//                           type="button"
//                           onClick={handleNext}
//                           disabled={isContinueDisabled}
//                           className={`mt-8 w-full h-[60px] rounded-[14px] text-md font-semibold transition ${
//                             isContinueDisabled
//                               ? "bg-white/70 text-black/70 cursor-not-allowed"
//                               : "bg-white text-black hover:bg-white/90"
//                           }`}
//                         >
//                           Send OTP
//                         </button>
//                       </div>
//                     </div>

//                     <div className="pt-8 flex items-center justify-center gap-3 text-white/70 text-md">
//                       <FiShield className="text-lg" />
//                       <span>Your data is 100% protected</span>
//                     </div>
//                   </>
//                 ) : (
//                   <>
//                     <div className="flex-1 flex flex-col justify-center max-w-[520px] w-full mx-auto lg:mx-0">
//                       <div>
//                         <h3 className="text-2xl leading-[1.08] font-semibold tracking-[-0.02em]">
//                           Verify OTP
//                         </h3>

//                         <p className="mt-2 text-white/70 text-md">
//                           Enter the 4-digit OTP sent to {formData.phone}
//                         </p>

//                         <div className="mt-8">
//                           <input
//                             type="text"
//                             value={otp}
//                             onChange={(e) =>
//                               setOtp(
//                                 e.target.value.replace(/\D/g, "").slice(0, 4),
//                               )
//                             }
//                             placeholder="Enter 4 digit OTP"
//                             className="w-full h-[60px] rounded-[16px] border border-white/40 bg-transparent px-5 text-white text-md outline-none placeholder:text-[#cbb896] focus:border-white"
//                           />
//                         </div>

//                         <p className="mt-8 text-center text-white/70 text-md leading-[1.2]">
//                           By proceeding, you give consent to receive
//                           communication on WhatsApp and agree to our{" "}
//                           <span className="underline cursor-pointer">
//                             Terms
//                           </span>{" "}
//                           and{" "}
//                           <span className="underline cursor-pointer">
//                             Privacy Policy
//                           </span>
//                         </p>

//                         <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
//                           <button
//                             type="button"
//                             className="h-[50px] rounded-[14px] bg-[#1f1d1d] text-white/40 text-md font-semibold"
//                           >
//                             Resend ({resendTimer})
//                           </button>

//                           <button
//                             type="button"
//                             onClick={handleNext}
//                             disabled={isContinueDisabled}
//                             className={`h-[50px] rounded-[14px] text-md font-semibold transition ${
//                               isContinueDisabled
//                                 ? "bg-[#4a4a4a] text-black/60 cursor-not-allowed"
//                                 : "bg-[#4a4a4a] text-black hover:bg-[#5a5a5a]"
//                             }`}
//                           >
//                             Verify OTP
//                           </button>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="pt-8 flex items-center justify-center gap-3 text-white/70 text-md">
//                       <FiShield className="text-lg" />
//                       <span>Your data is 100% protected</span>
//                     </div>
//                   </>
//                 )}
//               </>
//             ) : isStepThree ? (
//               <>
//                 <div className="flex-1 flex flex-col justify-center max-w-[560px] w-full mx-auto lg:mx-0">
//                   <div>
//                     <h3 className="text-2xl leading-[1.1] font-semibold tracking-[-0.02em] max-w-[480px]">
//                       What’s the total value of your investments?
//                     </h3>

//                     <p className="mt-3 text-white/70 text-md max-w-[520px]">
//                       Include Stocks, MFs, FDs, and cash. This will helps us
//                       personalise your experience
//                     </p>

//                     <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
//                       {investmentOptions.map((option) => {
//                         const isSelected = formData.investment === option;

//                         return (
//                           <button
//                             key={option}
//                             type="button"
//                             onClick={() =>
//                               setFormData((prev) => ({
//                                 ...prev,
//                                 investment: option,
//                               }))
//                             }
//                             className={`w-full min-h-[76px] rounded-[16px] px-5 py-5 flex items-center justify-between text-left transition border ${
//                               isSelected
//                                 ? "bg-[#1f1d1d] border-white/20"
//                                 : "bg-[#1a1919] border-white/5 hover:border-white/10"
//                             }`}
//                           >
//                             <span className="text-md text-white pr-4">
//                               {option}
//                             </span>

//                             <span
//                               className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 ${
//                                 isSelected
//                                   ? "border-white/30 bg-white/5"
//                                   : "border-white/20"
//                               }`}
//                             >
//                               {isSelected && (
//                                 <span className="w-3 h-3 rounded-full bg-white/80" />
//                               )}
//                             </span>
//                           </button>
//                         );
//                       })}
//                     </div>

//                     <button
//                       type="button"
//                       onClick={handleNext}
//                       disabled={isContinueDisabled}
//                       className={`mt-8 w-full h-[60px] rounded-[14px] text-md font-semibold flex items-center justify-center gap-3 transition ${
//                         isContinueDisabled
//                           ? "bg-[#3a3734] text-[#b5afa8] cursor-not-allowed"
//                           : "bg-[#3a3734] text-[#f2ece5] hover:bg-[#47433f]"
//                       }`}
//                     >
//                       Continue
//                       <FiArrowRight className="text-md" />
//                     </button>
//                   </div>
//                 </div>

//                 <div className="pt-8 flex items-center justify-center gap-3 text-[#b8aa96] text-md">
//                   <FiShield className="text-lg" />
//                   <span>Your data is 100% protected</span>
//                 </div>
//               </>
//             ) : (
//               <>
//                 <div className="flex-1 flex flex-col justify-center max-w-[560px] w-full mx-auto lg:mx-0">
//                   <div>
//                     <h3 className="text-2xl leading-[1.1] font-semibold tracking-[-0.02em]">
//                       {currentField.title}
//                     </h3>

//                     <div className="mt-8">
//                       <input
//                         type={currentField.type}
//                         name={currentField.name}
//                         value={formData[currentField.name]}
//                         onChange={handleChange}
//                         placeholder={currentField.placeholder}
//                         className="w-full h-[72px] sm:h-[78px] rounded-[16px] border border-white/40 bg-transparent px-5 sm:px-6 text-white text-md outline-none placeholder:text-[#cbb896] focus:border-white"
//                       />
//                     </div>

//                     <button
//                       type="button"
//                       onClick={handleNext}
//                       disabled={isContinueDisabled}
//                       className={`mt-8 w-full h-[60px] rounded-[16px] text-md font-semibold flex items-center justify-center gap-3 transition ${
//                         isContinueDisabled
//                           ? "bg-[#3a3734] text-[#b5afa8] cursor-not-allowed"
//                           : "bg-[#3a3734] text-[#f2ece5] hover:bg-[#47433f]"
//                       }`}
//                     >
//                       {isStepFour ? "Submit" : "Next"}
//                       <FiArrowRight className="text-md" />
//                     </button>
//                   </div>
//                 </div>

//                 <div className="pt-8 flex items-center justify-center gap-3 text-[#b8aa96] text-md">
//                   <FiShield className="text-lg" />
//                   <span>Your data is 100% protected</span>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { useState } from "react";
// import {
//   FiArrowLeft,
//   FiArrowRight,
//   FiShield,
//   FiPlay,
//   FiX,
// } from "react-icons/fi";
// import { FaWhatsapp } from "react-icons/fa";
// import Link from "next/link";
// import { useRouter } from "next/navigation";

// const steps = [
//   {
//     id: 1,
//     title: "What is your name?",
//     placeholder: "Enter your full name*",
//     name: "name",
//     type: "text",
//   },
//   {
//     id: 2,
//     title: "Enter your contact details",
//     subtitle: "Receive a reminder before the call",
//     placeholder: "Enter your phone number*",
//     name: "phone",
//     type: "tel",
//   },
//   {
//     id: 3,
//     title: "What’s the total value of your investments?",
//     subtitle:
//       "Include Stocks, MFs, FDs, and cash. This will helps us personalise your experience",
//     name: "investment",
//     type: "radio",
//   },
//   {
//     id: 4,
//     title: "What city do you live in?",
//     placeholder: "Enter your city*",
//     name: "city",
//     type: "text",
//   },
// ];

// const investmentOptions = [
//   "Below ₹50 Lakhs",
//   "₹50 Lakhs to ₹2 Crores",
//   "₹2 Crores to ₹5 Crores",
//   "₹5 Crore+",
// ];

// export default function MultiStepForm() {
//   const router = useRouter();

//   const [currentStep, setCurrentStep] = useState(1);
//   const [showOtpScreen, setShowOtpScreen] = useState(false);
//   const [otp, setOtp] = useState("");
//   const [resendTimer] = useState(26);

//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     investment: "",
//     city: "",
//   });

//   const currentField = steps[currentStep - 1];
//   const isStepTwo = currentStep === 2;
//   const isStepThree = currentStep === 3;
//   const isStepFour = currentStep === 4;

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [currentField.name]: e.target.value,
//     }));
//   };

//   const handleNext = () => {
//     if (currentStep === 2 && !showOtpScreen) {
//       setShowOtpScreen(true);
//       return;
//     }

//     if (currentStep === 2 && showOtpScreen) {
//       setCurrentStep(3);
//       setShowOtpScreen(false);
//       return;
//     }

//     if (currentStep < steps.length) {
//       setCurrentStep((prev) => prev + 1);
//     } else {
//       console.log("Submitted Data:", formData);
//       router.push("/checkout");
//     }
//   };

//   const handleBack = () => {
//     if (currentStep === 2 && showOtpScreen) {
//       setShowOtpScreen(false);
//       setOtp("");
//       return;
//     }

//     if (currentStep > 1) {
//       setCurrentStep((prev) => prev - 1);
//     }
//   };

//   const clearPhone = () => {
//     setFormData((prev) => ({
//       ...prev,
//       phone: "",
//     }));
//   };

//   const isContinueDisabled =
//     (currentStep === 1 && !formData.name.trim()) ||
//     (currentStep === 2 && !showOtpScreen && !formData.phone.trim()) ||
//     (currentStep === 2 && showOtpScreen && otp.length !== 4) ||
//     (currentStep === 3 && !formData.investment) ||
//     (currentStep === 4 && !formData.city.trim());

//   return (
//     <section className="min-h-screen bg-[#242120] text-white px-4 sm:px-6 lg:px-8 py-6 md:py-10">
//       <div className="max-w-[1440px] mx-auto mb-4 md:mb-5">
//         <Link href="/">
//           <h1 className="text-white text-[28px] sm:text-[34px] font-bold tracking-[0.16em]">
//             DEZERV
//           </h1>
//         </Link>
//       </div>

//       <div className="border-t border-white/10" />

//       <div className="max-w-[1060px] mx-auto mt-4 md:mt-5">
//         <div className="overflow-hidden rounded-[24px] md:rounded-[28px] bg-black grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] min-h-[620px]">
//           {/* LEFT PANEL */}
//           <div
//             className={`bg-black border-white/10 ${
//               isStepTwo || isStepThree || isStepFour
//                 ? "px-6 py-8 sm:px-8 md:px-10 md:py-10 border-b lg:border-b-0 lg:border-r flex items-center"
//                 : "px-6 py-7 sm:px-8 md:px-10 md:py-10 border-b lg:border-b-0 lg:border-r"
//             }`}
//           >
//             {isStepTwo || isStepThree || isStepFour ? (
//               <div className="w-full max-w-[360px]">
//                 <div className="mb-8">
//                   <img
//                     src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=120&q=80"
//                     alt="Client"
//                     className="w-14 h-14 rounded-full object-cover"
//                   />
//                 </div>

//                 <p className="text-xl font-semibold text-white">
//                   “Until this call, I didn’t know that majority of my funds were
//                   under performing benchmark.”
//                 </p>

//                 <p className="mt-10 text-lg font-semibold text-white">
//                   - Rajesh Begur,{" "}
//                   <span className="text-white/45">
//                     Founder - Begur & Partners
//                   </span>
//                 </p>
//               </div>
//             ) : (
//               <>
//                 <div className="flex items-start gap-4">
//                   <div className="relative shrink-0">
//                     <img
//                       src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
//                       alt="Expert"
//                       className="w-14 h-14 rounded-full object-cover"
//                     />
//                     <span className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-[#3b82f6] border-2 border-black" />
//                   </div>
//                 </div>

//                 <div className="mt-8">
//                   <h2 className="text-2xl leading-tight font-semibold">
//                     1:1 with a Dezerv expert
//                   </h2>
//                   <p className="mt-2 text-[14px] text-white/90">
//                     Free • No commitment call
//                   </p>

//                   <p className="mt-10 text-lg leading-[1.6] text-white/85 max-w-[420px]">
//                     Don’t leave your future to chance, discover how Dezerv PMS
//                     protects and grows your wealth.
//                   </p>
//                 </div>

//                 <div className="mt-10 rounded-[22px] overflow-hidden border border-white/10 bg-[#111] max-w-[470px]">
//                   <div className="relative">
//                     <img
//                       src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80"
//                       alt="Video preview"
//                       className="w-full h-[200px] sm:h-[250px] object-cover opacity-80"
//                     />

//                     <div className="absolute inset-0 bg-black/30" />

//                     <div className="absolute top-6 left-6">
//                       <h3 className="text-white text-[24px] sm:text-[28px] font-semibold leading-tight">
//                         Sandeep Jethwani
//                       </h3>
//                       <p className="mt-1 text-white/75 text-lg">
//                         Co-Founder, Dezerv
//                       </p>
//                     </div>

//                     <button
//                       type="button"
//                       className="absolute bottom-6 left-6 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center"
//                     >
//                       <FiPlay className="ml-1 text-[22px]" />
//                     </button>
//                   </div>
//                 </div>
//               </>
//             )}
//           </div>

//           {/* RIGHT PANEL */}
//           <div className="bg-[#070707] px-6 py-7 sm:px-8 md:px-10 lg:px-12 md:py-10 flex flex-col min-h-[620px]">
//             <div className="flex items-center justify-between">
//               <button
//                 type="button"
//                 onClick={handleBack}
//                 className={`flex items-center gap-3 transition ${
//                   currentStep === 1
//                     ? "text-white/30 cursor-not-allowed"
//                     : "text-white/80 hover:text-white"
//                 }`}
//                 disabled={currentStep === 1}
//               >
//                 <FiArrowLeft className="text-[22px] sm:text-[24px]" />
//                 <span className="text-[18px] sm:text-[20px] font-medium">
//                   Step {currentStep} of 4
//                 </span>
//               </button>

//               <button
//                 type="button"
//                 className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2.5 sm:px-4 sm:py-3 text-white/90 text-base sm:text-lg font-medium hover:bg-white/15 transition"
//               >
//                 <FaWhatsapp className="text-[#25D366] text-[18px] sm:text-[20px]" />
//                 <span>Help</span>
//               </button>
//             </div>

//             {/* STEP 2 */}
//             {isStepTwo ? (
//               <>
//                 {!showOtpScreen ? (
//                   <>
//                     <div className="flex-1 flex flex-col justify-center max-w-[520px] w-full mx-auto lg:mx-0">
//                       <div>
//                         <h3 className="text-2xl leading-[1.08] font-semibold tracking-[-0.02em]">
//                           {currentField.title}
//                         </h3>

//                         <p className="mt-3 text-white/70 text-[16px]">
//                           {currentField.subtitle}
//                         </p>

//                         <div className="mt-8">
//                           <div className="w-full rounded-[16px] border border-white/40 bg-transparent px-4 py-2">
//                             <label className="block text-white/70 text-[14px] sm:text-[15px] mb-2">
//                               Phone Number
//                             </label>

//                             <div className="flex items-center gap-3">
//                               <div className="shrink-0 flex items-center gap-3">
//                                 <span className="text-white text-xl font-medium leading-none">
//                                   +91
//                                 </span>
//                                 <div className="h-8 w-px bg-white/25" />
//                               </div>

//                               <input
//                                 type="tel"
//                                 name={currentField.name}
//                                 value={formData[currentField.name]}
//                                 onChange={handleChange}
//                                 className="flex-1 bg-transparent text-white text-xl outline-none placeholder:text-white/45"
//                               />

//                               {formData.phone && (
//                                 <button
//                                   type="button"
//                                   onClick={clearPhone}
//                                   className="shrink-0 w-6 h-6 rounded-full bg-white/15 text-white/70 flex items-center justify-center hover:bg-white/20"
//                                 >
//                                   <FiX className="text-[14px]" />
//                                 </button>
//                               )}
//                             </div>
//                           </div>
//                         </div>

//                         <button
//                           type="button"
//                           onClick={handleNext}
//                           disabled={isContinueDisabled}
//                           className={`mt-8 w-full h-[60px] rounded-[14px] text-md font-semibold transition ${
//                             isContinueDisabled
//                               ? "bg-white/70 text-black/70 cursor-not-allowed"
//                               : "bg-white text-black hover:bg-white/90"
//                           }`}
//                         >
//                           Send OTP
//                         </button>
//                       </div>
//                     </div>

//                     <div className="pt-8 flex items-center justify-center gap-3 text-white/70 text-md">
//                       <FiShield className="text-lg" />
//                       <span>Your data is 100% protected</span>
//                     </div>
//                   </>
//                 ) : (
//                   <>
//                     <div className="flex-1 flex flex-col justify-center max-w-[520px] w-full mx-auto lg:mx-0">
//                       <div>
//                         <h3 className="text-2xl leading-[1.08] font-semibold tracking-[-0.02em]">
//                           Verify OTP
//                         </h3>

//                         <p className="mt-2 text-white/70 text-md">
//                           Enter the 4-digit OTP sent to {formData.phone}
//                         </p>

//                         <div className="mt-8">
//                           <input
//                             type="text"
//                             value={otp}
//                             onChange={(e) =>
//                               setOtp(
//                                 e.target.value.replace(/\D/g, "").slice(0, 4),
//                               )
//                             }
//                             placeholder="Enter 4 digit OTP"
//                             className="w-full h-[60px] rounded-[16px] border border-white/40 bg-transparent px-5 text-white text-md outline-none placeholder:text-[#cbb896] focus:border-white"
//                           />
//                         </div>

//                         <p className="mt-8 text-center text-white/70 text-md leading-[1.2]">
//                           By proceeding, you give consent to receive
//                           communication on WhatsApp and agree to our{" "}
//                           <span className="underline cursor-pointer">
//                             Terms
//                           </span>{" "}
//                           and{" "}
//                           <span className="underline cursor-pointer">
//                             Privacy Policy
//                           </span>
//                         </p>

//                         <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
//                           <button
//                             type="button"
//                             className="h-[50px] rounded-[14px] bg-[#1f1d1d] text-white/40 text-md font-semibold"
//                           >
//                             Resend ({resendTimer})
//                           </button>

//                           <button
//                             type="button"
//                             onClick={handleNext}
//                             disabled={isContinueDisabled}
//                             className={`h-[50px] rounded-[14px] text-md font-semibold transition ${
//                               isContinueDisabled
//                                 ? "bg-[#4a4a4a] text-black/60 cursor-not-allowed"
//                                 : "bg-[#4a4a4a] text-black hover:bg-[#5a5a5a]"
//                             }`}
//                           >
//                             Verify OTP
//                           </button>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="pt-8 flex items-center justify-center gap-3 text-white/70 text-md">
//                       <FiShield className="text-lg" />
//                       <span>Your data is 100% protected</span>
//                     </div>
//                   </>
//                 )}
//               </>
//             ) : isStepThree ? (
//               <>
//                 <div className="flex-1 flex flex-col justify-center max-w-[560px] w-full mx-auto lg:mx-0">
//                   <div>
//                     <h3 className="text-2xl leading-[1.1] font-semibold tracking-[-0.02em] max-w-[480px]">
//                       What’s the total value of your investments?
//                     </h3>

//                     <p className="mt-3 text-white/70 text-md max-w-[520px]">
//                       Include Stocks, MFs, FDs, and cash. This will helps us
//                       personalise your experience
//                     </p>

//                     <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
//                       {investmentOptions.map((option) => {
//                         const isSelected = formData.investment === option;

//                         return (
//                           <button
//                             key={option}
//                             type="button"
//                             onClick={() =>
//                               setFormData((prev) => ({
//                                 ...prev,
//                                 investment: option,
//                               }))
//                             }
//                             className={`w-full min-h-[76px] rounded-[16px] px-5 py-5 flex items-center justify-between text-left transition border ${
//                               isSelected
//                                 ? "bg-[#1f1d1d] border-white/20"
//                                 : "bg-[#1a1919] border-white/5 hover:border-white/10"
//                             }`}
//                           >
//                             <span className="text-md text-white pr-4">
//                               {option}
//                             </span>

//                             <span
//                               className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 ${
//                                 isSelected
//                                   ? "border-white/30 bg-white/5"
//                                   : "border-white/20"
//                               }`}
//                             >
//                               {isSelected && (
//                                 <span className="w-3 h-3 rounded-full bg-white/80" />
//                               )}
//                             </span>
//                           </button>
//                         );
//                       })}
//                     </div>

//                     <button
//                       type="button"
//                       onClick={handleNext}
//                       disabled={isContinueDisabled}
//                       className={`mt-8 w-full h-[60px] rounded-[14px] text-md font-semibold flex items-center justify-center gap-3 transition ${
//                         isContinueDisabled
//                           ? "bg-[#3a3734] text-[#b5afa8] cursor-not-allowed"
//                           : "bg-[#3a3734] text-[#f2ece5] hover:bg-[#47433f]"
//                       }`}
//                     >
//                       Continue
//                       <FiArrowRight className="text-md" />
//                     </button>
//                   </div>
//                 </div>

//                 <div className="pt-8 flex items-center justify-center gap-3 text-[#b8aa96] text-md">
//                   <FiShield className="text-lg" />
//                   <span>Your data is 100% protected</span>
//                 </div>
//               </>
//             ) : (
//               <>
//                 <div className="flex-1 flex flex-col justify-center max-w-[560px] w-full mx-auto lg:mx-0">
//                   <div>
//                     <h3 className="text-2xl leading-[1.1] font-semibold tracking-[-0.02em]">
//                       {currentField.title}
//                     </h3>

//                     <div className="mt-8">
//                       <input
//                         type={currentField.type}
//                         name={currentField.name}
//                         value={formData[currentField.name]}
//                         onChange={handleChange}
//                         placeholder={currentField.placeholder}
//                         className="w-full h-[72px] sm:h-[78px] rounded-[16px] border border-white/40 bg-transparent px-5 sm:px-6 text-white text-md outline-none placeholder:text-[#cbb896] focus:border-white"
//                       />
//                     </div>

//                     <button
//                       type="button"
//                       onClick={handleNext}
//                       disabled={isContinueDisabled}
//                       className={`mt-8 w-full h-[60px] rounded-[16px] text-md font-semibold flex items-center justify-center gap-3 transition ${
//                         isContinueDisabled
//                           ? "bg-[#3a3734] text-[#b5afa8] cursor-not-allowed"
//                           : "bg-[#3a3734] text-[#f2ece5] hover:bg-[#47433f]"
//                       }`}
//                     >
//                       {isStepFour ? "Submit" : "Next"}
//                       <FiArrowRight className="text-md" />
//                     </button>
//                   </div>
//                 </div>

//                 <div className="pt-8 flex items-center justify-center gap-3 text-[#b8aa96] text-md">
//                   <FiShield className="text-lg" />
//                   <span>Your data is 100% protected</span>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import {
  FiArrowLeft,
  FiArrowRight,
  FiShield,
  FiPlay,
  FiX,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";

const steps = [
  {
    id: 1,
    title: "What is your name?",
    placeholder: "Enter your full name*",
    name: "name",
    type: "text",
  },
  {
    id: 2,
    title: "Enter your contact details",
    subtitle: "Receive a reminder before the call",
    placeholder: "Enter your phone number*",
    name: "phone",
    type: "tel",
  },
  {
    id: 3,
    title: "What’s the total value of your investments?",
    subtitle:
      "Include Stocks, MFs, FDs, and cash. This will helps us personalise your experience",
    name: "investment",
    type: "radio",
  },
];

const investmentOptions = [
  "Below ₹50 Lakhs",
  "₹50 Lakhs to ₹2 Crores",
  "₹2 Crores to ₹5 Crores",
  "₹5 Crore+",
];

export default function MultiStepForm() {
  const router = useRouter();

  const [currentStep, setCurrentStep] = useState(1);
  const [showOtpScreen, setShowOtpScreen] = useState(false);
  const [otp, setOtp] = useState("");
  const [resendTimer] = useState(26);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    investment: "",
  });

  const currentField = steps[currentStep - 1];
  const isStepTwo = currentStep === 2;
  const isStepThree = currentStep === 3;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [currentField.name]: e.target.value,
    }));
  };

  const handleNext = () => {
    if (currentStep === 2 && !showOtpScreen) {
      setShowOtpScreen(true);
      return;
    }

    if (currentStep === 2 && showOtpScreen) {
      setCurrentStep(3);
      setShowOtpScreen(false);
      return;
    }

    if (currentStep < steps.length) {
      setCurrentStep((prev) => prev + 1);
    } else {
      console.log("Submitted Data:", formData);
      router.push("/checkout");
    }
  };

  const handleBack = () => {
    if (currentStep === 2 && showOtpScreen) {
      setShowOtpScreen(false);
      setOtp("");
      return;
    }

    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const clearPhone = () => {
    setFormData((prev) => ({
      ...prev,
      phone: "",
    }));
  };

  const isContinueDisabled =
    (currentStep === 1 && !formData.name.trim()) ||
    (currentStep === 2 && !showOtpScreen && !formData.phone.trim()) ||
    (currentStep === 2 && showOtpScreen && otp.length !== 4) ||
    (currentStep === 3 && !formData.investment);

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
        <div className="overflow-hidden rounded-[24px] md:rounded-[28px] bg-black grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] min-h-[620px]">
          {/* LEFT PANEL */}
          <div
            className={`bg-black border-white/10 ${
              isStepTwo || isStepThree
                ? "px-6 py-8 sm:px-8 md:px-10 md:py-10 border-b lg:border-b-0 lg:border-r flex items-center"
                : "px-6 py-7 sm:px-8 md:px-10 md:py-10 border-b lg:border-b-0 lg:border-r"
            }`}
          >
            {isStepTwo || isStepThree ? (
              <div className="w-full max-w-[360px]">
                <div className="mb-8">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=120&q=80"
                    alt="Client"
                    className="w-14 h-14 rounded-full object-cover"
                  />
                </div>

                <p className="text-xl font-semibold text-white">
                  “Until this call, I didn’t know that majority of my funds were
                  under performing benchmark.”
                </p>

                <p className="mt-10 text-lg font-semibold text-white">
                  - Rajesh Begur,{" "}
                  <span className="text-white/45">
                    Founder - Begur & Partners
                  </span>
                </p>
              </div>
            ) : (
              <>
                <div className="flex items-start gap-4">
                  <div className="relative shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
                      alt="Expert"
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <span className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-[#3b82f6] border-2 border-black" />
                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="text-2xl leading-tight font-semibold">
                    1:1 with a Dezerv expert
                  </h2>
                  <p className="mt-2 text-[14px] text-white/90">
                    Free • No commitment call
                  </p>

                  <p className="mt-10 text-lg leading-[1.6] text-white/85 max-w-[420px]">
                    Don’t leave your future to chance, discover how Dezerv PMS
                    protects and grows your wealth.
                  </p>
                </div>

                <div className="mt-10 rounded-[22px] overflow-hidden border border-white/10 bg-[#111] max-w-[470px]">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80"
                      alt="Video preview"
                      className="w-full h-[200px] sm:h-[250px] object-cover opacity-80"
                    />

                    <div className="absolute inset-0 bg-black/30" />

                    <div className="absolute top-6 left-6">
                      <h3 className="text-white text-[24px] sm:text-[28px] font-semibold leading-tight">
                        Sandeep Jethwani
                      </h3>
                      <p className="mt-1 text-white/75 text-lg">
                        Co-Founder, Dezerv
                      </p>
                    </div>

                    <button
                      type="button"
                      className="absolute bottom-6 left-6 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center"
                    >
                      <FiPlay className="ml-1 text-[22px]" />
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* RIGHT PANEL */}
          <div className="bg-[#070707] px-6 py-7 sm:px-8 md:px-10 lg:px-12 md:py-10 flex flex-col min-h-[620px]">
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={handleBack}
                className={`flex items-center gap-3 transition ${
                  currentStep === 1
                    ? "text-white/30 cursor-not-allowed"
                    : "text-white/80 hover:text-white"
                }`}
                disabled={currentStep === 1}
              >
                <FiArrowLeft className="text-[22px] sm:text-[24px]" />
                <span className="text-[18px] sm:text-[20px] font-medium">
                  Step {currentStep} of 3
                </span>
              </button>

              <button
                type="button"
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2.5 sm:px-4 sm:py-3 text-white/90 text-base sm:text-lg font-medium hover:bg-white/15 transition"
              >
                <FaWhatsapp className="text-[#25D366] text-[18px] sm:text-[20px]" />
                <span>Help</span>
              </button>
            </div>

            {/* STEP 2 */}
            {isStepTwo ? (
              <>
                {!showOtpScreen ? (
                  <>
                    <div className="flex-1 flex flex-col justify-center max-w-[520px] w-full mx-auto lg:mx-0">
                      <div>
                        <h3 className="text-2xl leading-[1.08] font-semibold tracking-[-0.02em]">
                          {currentField.title}
                        </h3>

                        <p className="mt-3 text-white/70 text-[16px]">
                          {currentField.subtitle}
                        </p>

                        <div className="mt-8">
                          <div className="w-full rounded-[16px] border border-white/40 bg-transparent px-4 py-2">
                            <label className="block text-white/70 text-[14px] sm:text-[15px] mb-2">
                              Phone Number
                            </label>

                            <div className="flex items-center gap-3">
                              <div className="shrink-0 flex items-center gap-3">
                                <span className="text-white text-xl font-medium leading-none">
                                  +91
                                </span>
                                <div className="h-8 w-px bg-white/25" />
                              </div>

                              <input
                                type="tel"
                                name={currentField.name}
                                value={formData[currentField.name]}
                                onChange={handleChange}
                                className="flex-1 bg-transparent text-white text-xl outline-none placeholder:text-white/45"
                              />

                              {formData.phone && (
                                <button
                                  type="button"
                                  onClick={clearPhone}
                                  className="shrink-0 w-6 h-6 rounded-full bg-white/15 text-white/70 flex items-center justify-center hover:bg-white/20"
                                >
                                  <FiX className="text-[14px]" />
                                </button>
                              )}
                            </div>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={handleNext}
                          disabled={isContinueDisabled}
                          className={`mt-8 w-full h-[60px] rounded-[14px] text-md font-semibold transition ${
                            isContinueDisabled
                              ? "bg-white/70 text-black/70 cursor-not-allowed"
                              : "bg-white text-black hover:bg-white/90"
                          }`}
                        >
                          Send OTP
                        </button>
                      </div>
                    </div>

                    <div className="pt-8 flex items-center justify-center gap-3 text-white/70 text-md">
                      <FiShield className="text-lg" />
                      <span>Your data is 100% protected</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex-1 flex flex-col justify-center max-w-[520px] w-full mx-auto lg:mx-0">
                      <div>
                        <h3 className="text-2xl leading-[1.08] font-semibold tracking-[-0.02em]">
                          Verify OTP
                        </h3>

                        <p className="mt-2 text-white/70 text-md">
                          Enter the 4-digit OTP sent to {formData.phone}
                        </p>

                        <div className="mt-8">
                          <input
                            type="text"
                            value={otp}
                            onChange={(e) =>
                              setOtp(
                                e.target.value.replace(/\D/g, "").slice(0, 4),
                              )
                            }
                            placeholder="Enter 4 digit OTP"
                            className="w-full h-[60px] rounded-[16px] border border-white/40 bg-transparent px-5 text-white text-md outline-none placeholder:text-[#cbb896] focus:border-white"
                          />
                        </div>

                        <p className="mt-8 text-center text-white/70 text-md leading-[1.2]">
                          By proceeding, you give consent to receive
                          communication on WhatsApp and agree to our{" "}
                          <span className="underline cursor-pointer">
                            Terms
                          </span>{" "}
                          and{" "}
                          <span className="underline cursor-pointer">
                            Privacy Policy
                          </span>
                        </p>

                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <button
                            type="button"
                            className="h-[50px] rounded-[14px] bg-[#1f1d1d] text-white/40 text-md font-semibold"
                          >
                            Resend ({resendTimer})
                          </button>

                          <button
                            type="button"
                            onClick={handleNext}
                            disabled={isContinueDisabled}
                            className={`h-[50px] rounded-[14px] text-md font-semibold transition ${
                              isContinueDisabled
                                ? "bg-[#4a4a4a] text-black/60 cursor-not-allowed"
                                : "bg-[#4a4a4a] text-black hover:bg-[#5a5a5a]"
                            }`}
                          >
                            Verify OTP
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="pt-8 flex items-center justify-center gap-3 text-white/70 text-md">
                      <FiShield className="text-lg" />
                      <span>Your data is 100% protected</span>
                    </div>
                  </>
                )}
              </>
            ) : isStepThree ? (
              <>
                <div className="flex-1 flex flex-col justify-center max-w-[560px] w-full mx-auto lg:mx-0">
                  <div>
                    <h3 className="text-2xl leading-[1.1] font-semibold tracking-[-0.02em] max-w-[480px]">
                      What’s the total value of your investments?
                    </h3>

                    <p className="mt-3 text-white/70 text-md max-w-[520px]">
                      Include Stocks, MFs, FDs, and cash. This will helps us
                      personalise your experience
                    </p>

                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {investmentOptions.map((option) => {
                        const isSelected = formData.investment === option;

                        return (
                          <button
                            key={option}
                            type="button"
                            onClick={() =>
                              setFormData((prev) => ({
                                ...prev,
                                investment: option,
                              }))
                            }
                            className={`w-full min-h-[76px] rounded-[16px] px-5 py-5 flex items-center justify-between text-left transition border ${
                              isSelected
                                ? "bg-[#1f1d1d] border-white/20"
                                : "bg-[#1a1919] border-white/5 hover:border-white/10"
                            }`}
                          >
                            <span className="text-md text-white pr-4">
                              {option}
                            </span>

                            <span
                              className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 ${
                                isSelected
                                  ? "border-white/30 bg-white/5"
                                  : "border-white/20"
                              }`}
                            >
                              {isSelected && (
                                <span className="w-3 h-3 rounded-full bg-white/80" />
                              )}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    <button
                      type="button"
                      onClick={handleNext}
                      disabled={isContinueDisabled}
                      className={`mt-8 w-full h-[60px] rounded-[14px] text-md font-semibold flex items-center justify-center gap-3 transition ${
                        isContinueDisabled
                          ? "bg-[#3a3734] text-[#b5afa8] cursor-not-allowed"
                          : "bg-[#3a3734] text-[#f2ece5] hover:bg-[#47433f]"
                      }`}
                    >
                      Continue
                      <FiArrowRight className="text-md" />
                    </button>
                  </div>
                </div>

                <div className="pt-8 flex items-center justify-center gap-3 text-[#b8aa96] text-md">
                  <FiShield className="text-lg" />
                  <span>Your data is 100% protected</span>
                </div>
              </>
            ) : (
              <>
                <div className="flex-1 flex flex-col justify-center max-w-[560px] w-full mx-auto lg:mx-0">
                  <div>
                    <h3 className="text-2xl leading-[1.1] font-semibold tracking-[-0.02em]">
                      {currentField.title}
                    </h3>

                    <div className="mt-8">
                      <input
                        type={currentField.type}
                        name={currentField.name}
                        value={formData[currentField.name]}
                        onChange={handleChange}
                        placeholder={currentField.placeholder}
                        className="w-full h-[72px] sm:h-[78px] rounded-[16px] border border-white/40 bg-transparent px-5 sm:px-6 text-white text-md outline-none placeholder:text-[#cbb896] focus:border-white"
                      />
                    </div>

                    <button
                      type="button"
                      onClick={handleNext}
                      disabled={isContinueDisabled}
                      className={`mt-8 w-full h-[60px] rounded-[16px] text-md font-semibold flex items-center justify-center gap-3 transition ${
                        isContinueDisabled
                          ? "bg-[#3a3734] text-[#b5afa8] cursor-not-allowed"
                          : "bg-[#3a3734] text-[#f2ece5] hover:bg-[#47433f]"
                      }`}
                    >
                      Next
                      <FiArrowRight className="text-md" />
                    </button>
                  </div>
                </div>

                <div className="pt-8 flex items-center justify-center gap-3 text-[#b8aa96] text-md">
                  <FiShield className="text-lg" />
                  <span>Your data is 100% protected</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
