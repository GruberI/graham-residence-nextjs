import { getCollectionProducts } from "../../lib/shopify";
import ProductGridFour from "../ProductGridFour";

export default async function ArtSection() {
  const products = await getCollectionProducts({ collection: "Artwork" });
  const productsByTag = products.filter((product) => {
    return product.tags.includes("thai-mainhard");
  });

  if (!products?.length) return null;

  return (
    <div className="mx-auto py-4 lg:px-16 sm:px-10 sm:py-16 lg:px-8">
      <div className="mx-auto text-left pb-6" id="artwork">
        <h2 className="text-1xl text-black border-b border-black pb-2">
          ARTWORK
        </h2>
      </div>
      <ProductGridFour products={productsByTag} />
    </div>
  );
}
