import HeroSection from "@/src/Home/HeroSection";
import NriInvestSection from "@/src/Home/NriInvestSection";
import StackCards from "@/src/Home/StackCards";
import StickyTabsNavbar from "@/src/Home/StickyTabsNavbar";
import TrustSection from "@/src/Home/TrustSection";
import Navbar from "@/src/Navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <TrustSection />
      <StickyTabsNavbar />
      {/* <StackCards /> */}
      <NriInvestSection />
      {/* Spacer */}
      <div className="h-screen" />
    </div>
  );
}
