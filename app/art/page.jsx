import ShopAllArt from "../../components/ShopAll/Art/Art";
import { getCollectionProducts } from "../../lib/shopify";
import Contact from "@/components/Contact";
import ShopAllArtHero from "../../components/ShopAll/Art/Hero";
import { notFound } from "next/navigation";

export const runtime = "edge";

export default async function ShopAll() {
  const products = await getCollectionProducts({ collection: "Artwork" });

  if (!products?.length) return notFound();

  return (
    <div className="mt-20">
      <ShopAllArtHero pageTitle="All Artwork" />
      <ShopAllArt productsByHandle={products} />
      <div className="pb-20">
        <Contact />
      </div>
    </div>
  );
}
