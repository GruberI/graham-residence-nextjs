import { getCollection } from "../../../lib/shopify";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import ProductSection from "./ProductSection";

export const runtime = "edge";

export async function generateMetadata({
  params,
}: {
  params: { collection: string };
}): Promise<Metadata> {
  const collection = await getCollection(params.collection);

  if (!collection) return notFound();

  return {
    title: collection.seo?.title || collection.title,
    description:
      collection.seo?.description ||
      collection.description ||
      `${collection.title} products`,
  };
}

export default async function ShopAllArt({ productsByHandle, productHandle }) {
  return (
    <div className="text-center"> {/* Add text-center here */}
      <Suspense>
        <section>
          {productsByHandle.length === 0 ? (
            <p className="py-3 text-lg ml-[40%] mt-20">{`No products found in this collection`}</p>
          ) : (
            <ProductSection
              products={productsByHandle}
              productHandle={productHandle}
            />
          )}
        </section>
      </Suspense>
    </div>
  );
}
