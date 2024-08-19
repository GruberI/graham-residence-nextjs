import ShopAllArt from "@/components/ShopAll/Art/Art";
import { getCollectionProducts } from "@/lib/shopify";
import { notFound } from "next/navigation";

export const runtime = "edge";

export const metadata = {
  title: "Graham Collective | Gallery, Exhibitions, Residencies & Artwork",
  description:
    "A rotating exhibition space featuring original artwork by emerging & mid career contemporary artists. Set in context unlike a typical gallery, our experiential space transports and inspires.",
};

export default async function ShopAll() {
  const products = await getCollectionProducts({ collection: "Artwork" });

  const excludedTag = "alex-maceda";
  const filteredProducts = products.filter(product => !product.tags.includes(excludedTag));

  if (!filteredProducts?.length) return notFound();

  return (
    <div className="mt-20">
      <ShopAllArt productsByHandle={filteredProducts} />
    </div>
  );
}