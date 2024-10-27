import ShopAllArt from "@/components/ShopAll/Art/Art";
import { getCollectionProducts } from "@/lib/shopify";
import { notFound } from "next/navigation";

export const runtime = "edge";

export default async function ShopAll() {
  const products = await getCollectionProducts({ collection: "Artwork" });
  const filteredProducts = products.filter((product) => {
    return product.tags.includes("fine-art") && !product.tags.includes("winter-exhibition");
  });

  if (!filteredProducts.length) return notFound();

  return (
    <div className="mt-20">
      {/* Updated: Removed hidePrice prop */}
      <ShopAllArt productsByHandle={filteredProducts} />
    </div>
  );
}
