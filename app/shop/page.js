import Navigation from "@/components/Shop/Navigation";
import Header from "@/components/Shop/Header";
import HeroImage from "@/components/Shop/HeroImage";
import Quote from "@/components/Shop/Quote";
import ArtSection from "@/components/Shop/ArtSection";
import GoodsSection from "@/components/Shop/GoodsSection";
import Featured from "@/components/Shop/Featured";
import StayWithUs from "@/components/Shop/StayWithUs";
import { getProducts } from "@/lib/shopify";
import { Suspense } from "react";
import Carousel from "../../components/Carousel/Carousel.jsx";
import { getCollectionProducts } from "../../lib/shopify";

export default async function Shop() {
  const products = await getProducts({});
  const productsByCollection = await getCollectionProducts({ collection: "Artwork" });
  const productsByTag = productsByCollection.filter((product) => {
    return product.tags.includes("acrylic");
  });

  return (
    <div className="bg-white py-1 sm:py-10 lg:py-10">
      <Header />
      <Navigation />
      <HeroImage />
      <Suspense>
      <div className="bg-neutral-100"><Carousel products={productsByTag}/></div>
      
      </Suspense>
      <ArtSection products={products} />
      <Quote />
      <GoodsSection products={products} />
      <Featured />
      <StayWithUs />
    </div>
  );
}
