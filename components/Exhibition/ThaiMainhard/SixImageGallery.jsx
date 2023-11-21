import { getCollectionProducts } from "../../../lib/shopify";
import ProductGridThree from "../../Product/ProductGridThree";
import Link from "next/link";

export default async function Gallery() {
  const products = await getCollectionProducts({ collection: "Artwork" });
  const productsByTag = products.filter((product) => {
    return product.tags.includes("thai-mainhard");
  });

  if (!products?.length) return null;

  const sixProductSet = productsByTag.slice(0, 6);

  return (
    <div className="mx-auto max-w-7xl mt-20 sm:px-0 px-2">
      <section aria-labelledby="products-heading" className="mt-8">
        <h2 id="products-heading" className="sr-only">
          Products
        </h2>
        <ProductGridThree products={sixProductSet} />
      </section>
      <a
        href="/art/thai-mainhard"
        className="p-2 text-black hover:text-black-500 sm:pt-6 mb-6 flex justify-center"
      >
        <button
          type="submit"
          className="max-w-md border-2 border-black px-6 py-2 text-base font-light text-black-500 hover:bg-black hover:black focus:outline-none focus:ring-2 focus:ring-stone-600 focus:ring-offset-2 focus:ring-offset-black-50 hover:text-white hover:font-medium sm:w-full text-[12px]"
        >
          SHOP THE FULL COLLECTION
        </button>
      </a>
    </div>
  );
}
