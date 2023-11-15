import { getCollectionProducts } from "../../lib/shopify";
import ProductGridFour from "../Product/ProductGridFour";

export default async function GoodsSection() {
  const products = await getCollectionProducts({ collection: "home-goods" });

  // const productsByTag = products.filter((product) => {
  //   return product.tags.includes("yoni-goldberg");
  // });
  const eightProducts = products.slice(0,8)

  if (!products?.length) return null;

  return (
    <div className="mx-auto py-8 lg:px-18 sm:px-12 sm:py-16 lg:px-10">
      <div className="mx-auto text-left pb-6" id="artwork">
        <h2 className="text-1xl text-black border-b border-black pb-2">
          HOME
        </h2>
      </div>
      <ProductGridFour products={eightProducts} />
    </div>
  );
}
