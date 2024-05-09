import ShopAllHome from "@/components/ShopAll/Home/Home";
import { getCollectionProducts } from "@/lib/shopify";

export default async function ShopAll() {
  const productsHome = await getCollectionProducts({ collection: "home-goods" });
  const productsArt = await getCollectionProducts({ collection: "Artwork" });

  const allProducts = productsHome.concat(productsArt)

  if (!allProducts?.length) return null;

  return <ShopAllHome productsByHandle={allProducts} />;
}
