import Header from "@/components/Exhibition/AlexMaceda/Header";
import ArtExhibition from "@/components/Exhibition/AlexMaceda/About/ArtExhibition";
import SixImageGrid from "@/components/Exhibition/SixImageGrid";
import Artist from "@/components/Exhibition/AlexMaceda/About/Artist";
import { getCollectionProducts } from "@/lib/shopify";

export default async function Exhibition() {
  const products = await getCollectionProducts({ collection: "Artwork" });
  const productsByTag = products.filter((product) => {
    return product.tags.includes("alex-maceda");
  });

  if (!products?.length) return null;

  const sixProductSet = productsByTag.slice(0, 6);
  return (
    <div className="bg-white py-1 sm:py-10">
      <Header />
      <ArtExhibition />
      <SixImageGrid products={sixProductSet} />
      <Artist />
    </div>
  );
}


