import { getCollectionProducts } from "../../lib/shopify";
import ProductGridFour from "../Product/ProductGridFour";

export default async function ArtSection() {
  const products = await getCollectionProducts({ collection: "Artwork" });
  const productsByTag = products.filter((product) => {
    return product.tags.includes("thai-mainhard");
  });
  const eightProducts = productsByTag.slice(0,8)

  if (!products?.length) return null;

  return (
    <div className="mx-auto py-8 lg:px-18 sm:px-12 sm:py-16 lg:px-10">
      <div className="mx-auto text-left pb-6" id="artwork">
        <h2 className="text-1xl text-black border-b border-black pb-2">
          ARTWORK
        </h2>
      </div>
      <ProductGridFour products={eightProducts} />
    </div>
  );
}
