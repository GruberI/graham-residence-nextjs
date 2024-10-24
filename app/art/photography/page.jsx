import ShopAllArt from "@/components/ShopAll/Art/Art";
import { getCollectionProducts } from "@/lib/shopify";
import { notFound } from "next/navigation";

export const runtime = "edge";

export default async function ShopAll() {
  const products = await getCollectionProducts({ collection: "Artwork" });
  const productsByTag = products.filter((product) => {
    return product.tags.includes("photography");
  });

  if (!products?.length) return notFound();

  return (
    <div className="mt-20">
      {/* Pass hidePrice={true} to hide the price */}
      <ShopAllArt productsByHandle={productsByTag} hidePrice={true} />
    </div>
  );
}
