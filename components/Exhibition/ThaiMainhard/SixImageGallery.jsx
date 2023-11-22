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
    <div className="mx-auto max-w-7xl my-20 sm:px-0 px-2 ">
      <section aria-labelledby="products-heading" className="mt-8">
        <h2 id="products-heading" className="sr-only">
          Products
        </h2>
        <ProductGridThree products={sixProductSet} />
      </section>
    </div>
  );
}
