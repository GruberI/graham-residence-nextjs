import Header from '../../../components/Exhibition/ThaiMainhard/Header'
import HeroImage from '../../../components/Exhibition/ThaiMainhard/HeroImage'
import Quote from '../../../components/Exhibition/ThaiMainhard/Quote'
import SecondQuote from '../../../components/Exhibition/ThaiMainhard/SecondQuote'
import TwoImageGrid from '../../../components/Exhibition/ThaiMainhard/TwoImageGrid'
import SixImageGallery from '../../../components/Exhibition/ThaiMainhard/SixImageGallery'
import Navigation from '../../../components/Shop/Navigation'
import { Suspense } from "react";

export default function Exhibition() {
  return (
    <div className="bg-white py-1 sm:py-20">
    <Header />
    <HeroImage />
    <Quote />
    <TwoImageGrid />
    <SecondQuote />
    <SixImageGallery />
    </div>
  );
}
