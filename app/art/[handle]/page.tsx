import ShopAllArt from "@/components/ShopAll/Art/Art";
import ShopAllArtHeader from "@/components/ShopAll/Art/Header";
import { getCollectionProducts } from "@/lib/shopify";
import { notFound } from "next/navigation";

export const runtime = "edge";

export default async function ShopAll({
  params,
}: {
  params: { handle: string };
}) {
  // Check if handle is missing
  if (!params || !params.handle) {
    return notFound(); // Return 404 if params.handle is missing
  }

  // Get products from the Artwork collection
  const products = await getCollectionProducts({ collection: "Artwork" });

  // Filter products by the handle in the tags
  const productsByHandle = products.filter((product) => {
    return product.tags.includes(params.handle);
  });

  // Return 404 if no products found
  if (!productsByHandle.length) return notFound();

  return (
    <div className="sm:pt-40 pt-48">
      {/* ShopAllArtHeader with pageTitle based on params.handle */}
      <ShopAllArtHeader pageTitle={params.handle} />
      {/* Pass productsByHandle and productHandle to ShopAllArt */}
      <ShopAllArt
        productsByHandle={productsByHandle}
        productHandle={params.handle}
        hidePrice={true}  // Optionally pass hidePrice prop
      />
    </div>
  );
}
