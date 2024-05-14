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

  if (!products?.length) return notFound();

  return (
    <div className="mt-20">
      <ShopAllArt productsByHandle={products} />
    </div>
  );
}
