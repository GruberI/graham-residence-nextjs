import Header from "@/components/Exhibition/AlexMaceda/Header";
import ArtExhibition from "@/components/Exhibition/AlexMaceda/About/ArtExhibition";
import ProductGridThree from "@/components/Product/ProductGridThree";
import Artist from "@/components/Exhibition/AlexMaceda/About/Artist";
import { getCollectionProducts } from "@/lib/shopify";

export default async function Exhibition() {
  const products = await getCollectionProducts({ collection: "Artwork" });
  if (!products || !products.length) return notFound();

  const productsByTag = products.filter((product) => {
    return product?.tags?.includes("alex-maceda");
  });
  
  return (
    <div className="bg-white py-1 sm:py-10 sm:pt-40 pt-48">
    <Header />
    <ArtExhibition />
    <ProductGridThree products={productsByTag} />
    <Artist />
    </div>
  );
}
