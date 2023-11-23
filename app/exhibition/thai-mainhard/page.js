import Header from "../../../components/Exhibition/ThaiMainhard/Header";
import HeaderImage from "../../../components/Exhibition/ThaiMainhard/HeaderImage";
import Banner from "../../../components/Exhibition/ThaiMainhard/Banner";
import Quote from "../../../components/Exhibition/ThaiMainhard/Quote";
import SecondQuote from "../../../components/Exhibition/ThaiMainhard/SecondQuote";
import TwoImageGrid from "../../../components/Exhibition/ThaiMainhard/TwoImageGrid";
import SixImageGallery from "../../../components/Exhibition/ThaiMainhard/SixImageGallery";
import { Suspense } from "react";

export default function Exhibition() {
  return (
    <div className="bg-white py-1 sm:py-20">
      <Header />
      <Suspense>
        <HeaderImage />
      </Suspense>
      <Quote />
      <TwoImageGrid />
      <SecondQuote />
      <SixImageGallery />
      <Banner />
    </div>
  );
}
