import { getCollectionProducts } from "@/lib/shopify";
import Carousel from "../Carousel/Carousel";

export default async function NewArrivalsSection() {
  const products = await getCollectionProducts({ collection: "All" });
  const productsByTag = products.filter((product) => {
    return product.tags.includes("new-arrivals");
  });
  const eightProducts = productsByTag.slice(0, 8);

  if (!products?.length) return null;

  return (
    <div className="max-w-7xl pt-10 mx-auto">
      <div className="ml-4 sm:ml-0" id="artwork">
        <h1 className="sm:text-4xl text-3xl text-black pb-2">New Arrivals</h1>
        <a
          href="/art"
          className="text-sm font-thin leading-6 hover:text-neutral-300 underline underline-offset-8"
        >
          VIEW ALL
        </a>
      </div>
      <Carousel products={eightProducts} />
    </div>
  );
}
