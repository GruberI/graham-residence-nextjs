import ProductsGrid from "../ProductsGrid";
import { getCollectionProducts } from "../../lib/shopify";

export default async function GoodsSection() {

  const products = await getCollectionProducts({ collection: "home-goods" });

  // const productsByTag = products.filter((product) => {
  //   return product.tags.includes("yoni-goldberg");
  // });
  
  if (!products?.length) return null;


  return (
      <div className="mx-auto max-w-1xl py-4 sm:px-6 sm:py-20 lg:max-w-7xl lg:px-8">
        <div className="mx-auto text-left pb-6 scroll-smooth" id="homegoods">
          <h2
            className="text-1xl text-black border-b border-black pb-2"
            id="products-grid"
          >
            DECOR
          </h2>
        </div>
        <ProductsGrid products={products} />
      </div>
  );
}
