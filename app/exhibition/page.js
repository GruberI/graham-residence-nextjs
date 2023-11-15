import Header from "@/components/Exhibition/Header";
import TwoImageGrid from "@/components/Exhibition/TwoImageGrid";
import Quote from "@/components/Exhibition/Quote";
import FourImageGrid from "@/components/Exhibition/FourImageGrid";
import ArtExhibition from "@/components/Exhibition/About/ArtExhibition";
import Gallery from "@/components/Exhibition/SixImageGallery";
import Artist from "@/components/Exhibition/About/Artist";
import { Suspense } from "react";

export default function Exhibition() {
  return (
    <div className="bg-white py-1 sm:py-10 lg:py-10">
      <Header />
      <Suspense>
        <TwoImageGrid />
      </Suspense>
      <Quote />
      <FourImageGrid />
      <ArtExhibition />
      <Gallery />
      <Artist />
    </div>
  );
}
