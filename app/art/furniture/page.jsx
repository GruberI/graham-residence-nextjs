import ShopAllArt from "@/components/ShopAll/Art/Art";
import { getCollectionProducts } from "@/lib/shopify";
import { notFound } from "next/navigation";

export const runtime = "edge";

export default async function ShopAll() {
  const products = await getCollectionProducts({ collection: "Furniture" });
  const productsByTag = products.filter((product) => {
    return product.tags.includes("furniture");
  });

  if (!productsByTag.length) return notFound(); // Fixed the check for filtered products

  return (
    <div className="mt-20">
      {/* Updated: Removed hidePrice prop */}
      <ShopAllArt productsByHandle={productsByTag} />
    </div>
  );
}
