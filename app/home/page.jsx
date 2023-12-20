import ShopAllHome from "../../components/ShopAll/Home/Home";
import { getCollectionProducts } from "../../lib/shopify";

export default async function ShopAll() {
  const products = await getCollectionProducts({ collection: "home-goods" });

  // const productsByTag = products.filter((product) => {
  //   return product.tags.includes("yoni-goldberg");
  // });

  if (!products?.length) return null;

  return (
    <>
      <ShopAllHome productsByHandle={products} />
    </>
  );
}
