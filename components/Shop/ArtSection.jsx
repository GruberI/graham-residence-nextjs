import ProductsGrid from "../ProductsGrid";
import { getCollectionProducts } from "../../lib/shopify";

export default async function ArtSection() {
  const products = await getCollectionProducts({ collection: "Artwork" });
  const productsByTag = products.filter((product) => {
    return product.tags.includes("yoni-goldberg");
  });

  if (!products?.length) return null;

  return (
    <div className="mx-auto max-w-1xl py-4 sm:px-6 sm:py-20 lg:max-w-7xl lg:px-8">
      <div className="mx-auto text-left pb-6" id="artwork">
        <h2 className="text-1xl text-black border-b border-black pb-2">
          ARTWORKS
        </h2>
      </div>
      <ProductsGrid products={productsByTag} />
    </div>
  );
}
