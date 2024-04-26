import { getCollectionProducts } from "@/lib/shopify";
import ProductGridFour from "../Product/ProductGridFour";

export default async function ArtSection() {
  const products = await getCollectionProducts({ collection: "Artwork" });
  const productsByTag = products.filter((product) => {
    return product.tags.includes("thai-mainhard");
  });
  const eightProducts = productsByTag.slice(0, 8);

  if (!products?.length) return null;

  return (
    <div className="max-w-7xl my-0 sm:my-16 md:mx-10 lg:mx-auto mx-4">
      <div className="mx-auto text-left border-t border-black" id="artwork">
        <h2 className="text-2xl text-black pt-6">
          Latest Artworks
        </h2>
      </div>
      <a
        href="/art"
        className="text-[10px] font-thin leading-6 hover:text-neutral-300 hover:underline hover:underline-offset-8"
      >
        VIEW ALL
      </a>
      <ProductGridFour products={eightProducts} />
    </div>
  );
}
