import { Suspense } from "react";
import { notFound } from "next/navigation";
import HeroImageText from "@/components/Shop/HeroImageText";
import ArtSection from "@/components/Shop/ArtSection";
import GoodsSection from "@/components/Shop/GoodsSection";
import PrintsSection from "@/components/Shop/PrintsSection";
import Featured from "@/components/Shop/Featured";
import Section from "@/components/Shop/Section.jsx";
// import PhotoSection from "@/components/Shop/PhotoSection";
// import Instagram from "@/components/Shop/Instagram";
import Carousel from "@/components/Carousel/Carousel.jsx";
import { getProducts } from "@/lib/shopify";
import { getCollectionProducts } from "@/lib/shopify/index";
import VendorFeature from "@/components/Shop/VendorFeature";

export const metadata = {
  title: "The Graham Residence Shop",
  description:
    "Discover the best contemporary artists and shop curated goods inspired by West Coast minimalism.",
};

export default async function Shop() {
  const products = await getProducts({});
  const productsByCollection = await getCollectionProducts({
    collection: "home-goods",
  });
  const productsByTag = productsByCollection.filter((product) => {
    return product.tags.includes("carousel");
  });

  if (!productsByTag) return notFound();

  fetch("https://api.instagram.com/oauth/authorize", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "?client_id=703131838434878\n&redirect_uri=https://grahamresidence.hirejs.com/\n&scope=user_profile,user_media\n&response_type=code",
  });

  return (
    <div >
      <Suspense>
        <HeroImageText />
        {/* <Carousel products={productsByTag} /> */}
      </Suspense>
      <Section />
      <GoodsSection />
      <VendorFeature />
      <ArtSection products={products} />
      <Featured />
      <PrintsSection products={products} />
    </div>
  );
}
