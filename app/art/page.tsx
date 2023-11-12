import ShopAllArt from "../../components/ShopAll/Art/Art";
import { getCollectionProducts } from "../../lib/shopify";
import Contact from "@/components/Contact";

export const runtime = "edge";

export default async function ShopAll() {
  const products = await getCollectionProducts({ collection: "Artwork" });

  if (!products?.length) return null;

  return (
    <>
      <ShopAllArt productsByHandle={products} />
      <div className="pb-20">
        <Contact />
      </div>
    </>
  );
}
