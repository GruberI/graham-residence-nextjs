import ShopAllHome from "../../../components/ShopAll/Home/Home";
import { getCollectionProducts } from "../../../lib/shopify";
import { notFound } from "next/navigation";

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
console.log('PRODUCT BY HANDLE', productsByHandle)
console.log('PARAM BY HANDLE', params.handle)
  return (
    <div>
      <ShopAllHome productsByHandle={productsByHandle} productHandle={params.handle}/>
    </div>
  );
}
