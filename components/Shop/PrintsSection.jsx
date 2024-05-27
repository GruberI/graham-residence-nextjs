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
    <div className="max-w-7xl m-auto pt-2 md:mx-10 lg:mx-auto mx-4">
      <div className="mx-auto  text-left" id="artwork">
        <h2 className="sm:text-4xl text-3xl pb-2 text-black pt-6">
          Ethereal Prints
        </h2>
      </div>
      <a
        href="/art/photography"
        className="text-sm underline font-thin leading-6 hover:text-neutral-300 hover:underline underline-offset-8"
      >
        VIEW ALL
      </a>
      <Carousel products={eightProducts}/>
      {/* <ProductGridFour products={eightProducts} /> */}
    </div>
  );
}