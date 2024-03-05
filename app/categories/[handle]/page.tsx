import { notFound } from "next/navigation";
import ShopCategories from "@/components/ShopAll/Categories/Categories";
import { getProducts } from "@/lib/shopify";

export const runtime = "edge";
export default async function Categories({
  params,
}: {
  params: { handle: string };
}) {
  const products = await getProducts({});

  const productsByHandle = products.filter((product) => {
    return product.tags.includes(params.handle);
  });
  const productHandle = products.filter((product) => {
    return product.handle;
  });

  if (!products?.length) return notFound();

  return (
    <ShopCategories
      productsByHandle={productsByHandle}
      productHandle={productHandle}
    />
  );
}
