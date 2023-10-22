import Navigation from "@/components/Shop/Navigation";
import Header from "@/components/Shop/Header";
import HeroImage from "@/components/Shop/HeroImage";
import Quote from "@/components/Shop/Quote";
import ArtSection from "@/components/Shop/ArtSection";
import GoodsSection from "@/components/Shop/GoodsSection";
import Featured from "@/components/Shop/Featured";
import StayWithUs from "@/components/Shop/StayWithUs";

export default function Shop() {
  return (
    
      <div className="bg-white py-1 sm:py-10 lg:py-10">
        <Header />
        <Navigation />
        <HeroImage />
        <ArtSection />
        <Quote />
        <GoodsSection />
        <Featured />
        <StayWithUs />
      </div>
    
  );
}
