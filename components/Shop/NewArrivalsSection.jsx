import { getCollectionProducts } from "@/lib/shopify";
import ProductGridFour from "../Product/ProductGridFour";
import Carousel from "../Carousel/Carousel";

export default async function NewArrivalsSection() {
  const products = await getCollectionProducts({ collection: "home-goods" });
  const productsByTag = products.filter((product) => {
    return product.tags.includes("home-goods");
  });
  const eightProducts = productsByTag.slice(0, 8);

  if (!products?.length) return null;

  return (
    <div className="max-w-7xl my-0 sm:my-10 m-auto">
      <div className="ml-4 sm:ml-0" id="artwork">
        <h1 className="text-2xl text-black pt-6">New Arrivals</h1>
        <a
          href="/art"
          className="text-[10px] font-thin leading-6 hover:text-neutral-300 hover:underline hover:underline-offset-8"
        >
          VIEW ALL
        </a>
      </div>
      <Carousel products={eightProducts} />
    </div>
  );
}
