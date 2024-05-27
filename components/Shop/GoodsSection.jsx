import { getCollectionProducts } from "@/lib/shopify";
import ProductGridFour from "../Product/ProductGridFour";
import Carousel from "../Carousel/Carousel";

export default async function GoodsSection() {
  const products = await getCollectionProducts({ collection: "home-goods" });
  const productsByTag = products.filter((product) => {
    return product.tags.includes("shop-tgr");
  });
  const eightProducts = productsByTag.slice(0, 8);

  if (!products?.length) return null;

  return (
    <div className="max-w-7xl my-0 sm:my-16 md:mx-10 lg:mx-auto mx-4">
      <div className="mx-auto text-left" id="artwork">
        <h2 className="sm:text-4xl text-3xl pb-2 text-black border-t border-black pt-6">
          Shop the Graham Residence
        </h2>
      </div>
      <a
        href="/home"
        className="text-sm underline font-thin leading-6 hover:text-neutral-300 underline-offset-8"
      >
        VIEW ALL
      </a>
      {/* <ProductGridFour products={eightProducts} /> */}
      <Carousel products={eightProducts} />
    </div>
  );
}
