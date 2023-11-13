import { getCollectionProducts } from "../../lib/shopify";
import ProductGridFour from "../ProductGridFour";

export default async function GoodsSection() {
  const products = await getCollectionProducts({ collection: "home-goods" });

  // const productsByTag = products.filter((product) => {
  //   return product.tags.includes("yoni-goldberg");
  // });

  if (!products?.length) return null;

  return (
    <div className="mx-auto py-8 lg:px-18 sm:px-12 sm:py-16 lg:px-16">
      <div className="mx-auto text-left pb-6 scroll-smooth" id="homegoods">
        <h2
          className="text-2xl text-black border-b border-black pb-2"
          id="products-grid"
        >
          HOME
        </h2>
      </div>
      <ProductGridFour products={products} />
    </div>
  );
}
