import ShopAllArt from "../../components/ShopAll/Art/Art";
import { getCollectionProducts } from "../../lib/shopify";

export default async function ShopAll() {
    const products = await getCollectionProducts({ collection: "Artwork" });

  // const productsByTag = products.filter((product) => {
  //   return product.tags.includes("yoni-goldberg");
  // });
  
  if (!products?.length) return null;


    return (
        <ShopAllArt products={products}/>
    )
}