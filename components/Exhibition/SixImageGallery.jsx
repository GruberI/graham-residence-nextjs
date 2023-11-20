import { getCollectionProducts } from "../../lib/shopify";
import ProductGridThree from "../Product/ProductGridThree";

export default async function Gallery() {
  const products = await getCollectionProducts({ collection: "Artwork" });
  const productsByTag = products.filter((product) => {
    return product.tags.includes("forgotten-lexicon");
  });

  if (!products?.length) return null;

  const sixProductSet = productsByTag.slice(0, 6);

  return (
    <div className="mx-auto px-4 sm:px-6 max-w-7xl lg:px-8 my-20">
      <section aria-labelledby="products-heading" className="mt-8">
        <h2 id="products-heading" className="sr-only">
          Products
        </h2>
        <ProductGridThree products={sixProductSet} />
      </section>
    </div>
  );
}
