import ShopAllArt from "../../../components/ShopAll/Art/Art";
import ShopAllArtHeader from "../../../components/ShopAll/Art/Header";
import { getCollectionProducts } from "../../../lib/shopify";
import { notFound } from "next/navigation";

export const runtime = "edge";

export default async function ShopAll({
  params,
}: {
  params: { handle: string };
}) {
  const products = await getCollectionProducts({ collection: "Artwork" });

  const productsByHandle = products.filter((product) => {
    return product.tags.includes(params.handle);
  });

  if (!products?.length) return notFound();

  return (
    <div className="sm:pt-40 pt-48">
      <ShopAllArtHeader pageTitle={params.handle} />
      <ShopAllArt productsByHandle={productsByHandle} />
    </div>
  );
}
