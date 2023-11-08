import Header from "@/components/Exhibition/Header";
import TwoImageGrid from "@/components/Exhibition/TwoImageGrid";
import Quote from "@/components/Exhibition/Quote";
import MultiImageGrid from "@/components/Exhibition/MultiImageGrid";
import ArtExhibition from "@/components/Exhibition/About/ArtExhibition";
import Gallery from "@/components/Exhibition/Gallery";
import Artist from "@/components/Exhibition/About/Artist";
import Contact from "@/components/Contact";
import SignUp from "@/components/Exhibition/SignUp";

export default function Exhibition() {
  return (
      <div className="bg-white py-1 sm:py-10 lg:py-10">
        <Header />
        <TwoImageGrid />
        <Quote />
        <MultiImageGrid />
        <ArtExhibition />
        <Gallery />
        <Artist />
        <Contact />
        <SignUp />
      </div>
    
  );
}
