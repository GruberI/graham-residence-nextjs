import { getProducts } from "@/lib/shopify";
import { getCollectionProducts } from "../../lib/shopify";
// import Instagram from "../../components/Shop/InstagramPhotos.jsx";

export default async function Shop() {
  const products = await getProducts({});
  const productsByCollection = await getCollectionProducts({ collection: "Artwork" });
  const productsByTag = productsByCollection.filter((product) => {
    return product.tags.includes("acrylic");
  });

  return (
    <div className="bg-white py-1 sm:py-10 lg:py-10">

    </div>
  );
}
