import Footer from "@/src/Footer";
import HeroSection from "@/src/Home/HeroSection";
import StickySection from "@/src/Home/StickySection";
import TrustSection from "@/src/Home/TrustSection";
import Navbar from "@/src/Navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <TrustSection />
      <StickySection />
      <Footer />
    </div>
  );
}
