import { getCollectionProducts } from "../../lib/shopify";
import ProductGridThree from "../ProductGridThree";

export default async function Gallery() {
  const products = await getCollectionProducts({ collection: "Artwork" });
  const productsByTag = products.filter((product) => {
    return product.tags.includes("kyle-steed");
  });

  if (!products?.length) return null;

  const sixProductSet = productsByTag.slice(0, 6);

  return (
    <div className="bg-white border-t  border-black-400">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 my-20">
        <section aria-labelledby="products-heading" className="mt-8">
          <h2 id="products-heading" className="sr-only">
            Products
          </h2>
          <ProductGridThree products={sixProductSet} />
        </section>
      </div>
    </div>
  );
}
