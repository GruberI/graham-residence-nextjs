import { getCollectionProducts } from "@/lib/shopify";
import ProductGridFour from "../Product/ProductGridFour";
import Carousel from "../Carousel/Carousel";

export default async function GoodsSection() {
  const products = await getCollectionProducts({ collection: "home-goods" });
  const eightProducts = products.slice(0, 8);

  if (!products?.length) return null;

  return (
    <div className="max-w-7xl my-0 sm:my-16 md:mx-10 lg:mx-auto mx-4">
      <div className="mx-auto text-left" id="artwork">
      <h2 className="text-2xl text-black border-t border-black pt-6">
          Most Loved for the Home
        </h2>
      </div>
      <a
        href="/home"
        className="text-[10px] font-thin leading-6 hover:text-neutral-300 hover:underline hover:underline-offset-8"
      >
        VIEW ALL
      </a>
      {/* <ProductGridFour products={eightProducts} /> */}
      <Carousel products={eightProducts}/>
    </div>
  );
}
