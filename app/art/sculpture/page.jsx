import ShopAllArt from "@/components/ShopAll/Art/Art";
import { getCollectionProducts } from "@/lib/shopify";
import { notFound } from "next/navigation";

export const runtime = "edge";

export default async function ShopAll() {
  const products = await getCollectionProducts({ collection: "Sculpture" });
  const productsByTag = products.filter((product) => {
    return product.tags.includes("Sculpture");
  });

  if (!products?.length) return notFound();

  return (
    <div className="mt-20">
      <ShopAllArt productsByHandle={productsByTag} />
    </div>
  );
}
