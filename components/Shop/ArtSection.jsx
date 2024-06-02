import { getCollectionProducts } from "@/lib/shopify";
import Carousel from "../Carousel/Carousel";

export default async function ArtSection() {
  const products = await getCollectionProducts({ collection: "Artwork" });
  const productsByTag = products.filter((product) => {
    return product.tags.includes("new-arrivals");
  });
  const twentyProducts = productsByTag.slice(0, 20);

  if (!products?.length) return null;

  return (
    <div className="max-w-7xl my-0 sm:my-16 md:mx-10 lg:mx-auto mx-4">
      <div className="mx-auto text-left border-t border-black" id="artwork">
        <h2 className="sm:text-4xl text-3xl text-black pt-6 font-comorant pb-2">
          New Arrivals
        </h2>
      </div>
      <a
        href="/art"
        className="text-sm font-thin leading-6 hover:text-neutral-300 underline underline-offset-8"
      >
        VIEW ALL
      </a>
      <Carousel products={twentyProducts} />
    </div>
  );
}
