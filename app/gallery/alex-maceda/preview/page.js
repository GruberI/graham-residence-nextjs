import ProductGridThree from "@/components/Product/ProductGridThree";
import { getCollectionProducts } from "@/lib/shopify";
import { notFound } from "next/navigation";
import CollectorPreview from "@/components/Exhibition/AlexMaceda/Preview/CollectorPreview";

export const runtime = "edge";

export default async function Exhibition() {
  const products = await getCollectionProducts({ collection: "Artwork" });
  if (!products || !products.length) return notFound();

  const productsByTag = products.filter((product) => {
    return product?.tags?.includes("alex-maceda");
  });
  return (
    <div className="sm:pt-40 pt-48">
      <CollectorPreview />
      <ProductGridThree products={productsByTag} />
    </div>
  );
}
