import { getCollectionProducts } from "@/lib/shopify";
import ProductGridFour from "../Product/ProductGridFour";

export default async function GoodsSection() {
  const products = await getCollectionProducts({ collection: "home-goods" });
  const eightProducts = products.slice(0,8)

  if (!products?.length) return null;

  return (
    <div className="max-w-7xl my-0 sm:my-16 md:mx-10 lg:mx-auto mx-4">
      <div className="mx-auto text-left pb-6" id="artwork">
        <h2 className="text-1xl text-black border-b border-black pb-2">
          HOME
        </h2>
      </div>
      <ProductGridFour products={eightProducts} />
    </div>
  );
}
