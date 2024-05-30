import { notFound } from "next/navigation";
import ShopAllHome from "@/components/ShopAll/Home/Home";
import { getCollectionProducts } from "@/lib/shopify";

export const runtime = "edge";

export default async function ShopAll({
  params,
}: {
  params: { handle: string };
}) {
  const products = await getCollectionProducts({ collection: "home-goods" });

  const productsByHandle = products.filter((product) => {
    return product.tags.includes(params.handle);
  });

  if (!products?.length) return notFound();

  return (
    <div>
      <ShopAllHome
        productsByHandle={productsByHandle}
        productHandle={params.handle}
      />
    </div>
  );
}
