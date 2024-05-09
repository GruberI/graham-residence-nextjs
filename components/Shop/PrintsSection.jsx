import { getCollectionProducts } from "@/lib/shopify";
import ProductGridFour from "../Product/ProductGridFour";
import Carousel from "../Carousel/Carousel";

export default async function PrintsSection() {
  const products = await getCollectionProducts({ collection: "Artwork" });
  const productsByTag = products.filter((product) => {
    return product.tags.includes("yoni-goldberg");
  });
  const eightProducts = productsByTag.slice(0, 8);

  if (!products?.length) return null;

  return (
    <div className="max-w-7xl my-0 sm:my-10 md:mx-10 lg:mx-auto mx-4">
      <div className="mx-auto text-left" id="artwork">
        <h2 className="text-2xl text-black pt-6">
          Ethereal Prints
        </h2>
      </div>
      <a
        href="/art/photography"
        className="text-[10px] font-thin leading-6 hover:text-neutral-300 hover:underline hover:underline-offset-8"
      >
        VIEW ALL
      </a>
      <Carousel products={eightProducts}/>
      {/* <ProductGridFour products={eightProducts} /> */}
    </div>
  );
}