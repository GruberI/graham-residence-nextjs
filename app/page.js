import HeroImageText from "@/components/Shop/HeroImageText"
import ArtSection from "@/components/Shop/ArtSection";
import GoodsSection from "@/components/Shop/GoodsSection";
import Featured from "@/components/Shop/Featured";
import StayWithUs from "@/components/Shop/StayWithUs";
import { getProducts } from "@/lib/shopify";
import { Suspense } from "react";
import Carousel from "../components/Carousel/Carousel.jsx";
import { getCollectionProducts } from "../lib/shopify";
import Section from "../components/Shop/Section.jsx";
import { notFound } from "next/navigation";
import SimpleSlider from '../components/Carousel/ImageCarousel.jsx'


export default async function Shop() {
  const products = await getProducts({});
  const productsByCollection = await getCollectionProducts({
    collection: "home-goods",
  });
  // console.log('products by collection', productsByCollection)
  const productsByTag = productsByCollection.filter((product) => {
    return product.tags.includes("Cortina");
  });

  if (!productsByTag) return notFound();

  return (
    <div className="bg-white overflow-hidden">
      <Suspense>
        <HeroImageText />
        <Carousel products={productsByTag} />
      </Suspense>
      <Section />
      {/* <ExhibitionList /> */}
      <ArtSection products={products} />
      <Featured />
      <GoodsSection products={products} />
      <Suspense>
      <SimpleSlider/>
      </Suspense>
      <StayWithUs />
    </div>
  );
}
