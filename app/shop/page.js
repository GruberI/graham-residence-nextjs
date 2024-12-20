import { Suspense } from "react";
import { notFound } from "next/navigation";
import HeroImageText from "@/components/Shop/HeroImageText";
import ArtSection from "@/components/Shop/ArtSection";
import GoodsSection from "@/components/Shop/GoodsSection";
import PrintsSection from "@/components/Shop/PrintsSection";
import Featured from "@/components/Shop/Featured";
import Section from "@/components/Shop/Section.jsx";
import { getProducts } from "@/lib/shopify";
import { getCollectionProducts } from "@/lib/shopify/index";
import VendorFeature from "@/components/Shop/VendorFeature";
import PageHeaderHero from "@/components/global/PageHeaderHero";

export const metadata = {
  title: "Graham Collective | Curated Luxury Home Goods and Fine Art",
  description:
    "Gifts for the home found within The Graham Residence, a secluded luxury vacation rental near Joshua Tree National Park.",
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
    <div>
      <PageHeaderHero
        imgSrc="https://ipfs.filebase.io/ipfs/QmWJ2ZeTDfLr8Ng8H7ynR8o1tPjJVeeUARds3ipechFGrG"
        title="Graham Shop"
        classes={{
          title: "mb-[51px] md:mb-0",
        }}
      />

      <Section />
      {/* Updated: Removed hidePrice prop */}
      <ArtSection products={products} />
      <VendorFeature />
      <GoodsSection />
      <Featured />
      <PrintsSection products={products} />
    </div>
  );
}
