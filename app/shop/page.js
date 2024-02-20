import HeroImageText from "@/components/Shop/HeroImageText";
import ArtSection from "@/components/Shop/ArtSection";
import GoodsSection from "@/components/Shop/GoodsSection";
import Featured from "@/components/Shop/Featured";
import { getProducts } from "@/lib/shopify";
import { Suspense } from "react";
import Carousel from "../../components/Carousel/Carousel.jsx";
import { getCollectionProducts } from "../../lib/shopify/index";
import Section from "../../components/Shop/Section.jsx";
import { notFound } from "next/navigation";
import Instagram from "../../components/Shop/Instagram";

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
    <div className="bg-white overflow-hidden">
      <Suspense>
        <HeroImageText />
        <Carousel products={productsByTag} />
      </Suspense>
      <Section />
      <GoodsSection products={products} />
      <Featured />
      <ArtSection products={products} />
      <Instagram />
    </div>
  );
}
