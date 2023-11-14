import ShopAllArt from "../../../components/ShopAll/Art/Art";
import { getCollectionProducts } from "../../../lib/shopify";
import { notFound } from "next/navigation";

export const runtime = "edge";

export default async function ShopAll({
    params
  }: {
    params: { handle: string };
  }) {
    const products = await getCollectionProducts({ collection: "Artwork" });

    const productsByHandle = products.filter((product) => {
      return product.tags.includes(params.handle);
    });
  
    if (!products?.length) return notFound();

  // const productsByTag = products.filter((product) => {
  //   return product.tags.includes("yoni-goldberg");
  // });


    return (
        <ShopAllArt productsByHandle={productsByHandle} pageTitle={params.handle}/>
    )
}