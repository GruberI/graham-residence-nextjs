import ShopAllHome from "@/components/ShopAll/Home/Home";
import { getCollectionProducts } from "@/lib/shopify";

export default async function ShopAll() {
  const products = await getCollectionProducts({ collection: "home-goods" });

  if (!products?.length) return null;

  return <ShopAllHome productsByHandle={products} />;
}
