import SingleProduct from "@/components/SingleProduct/SingleProduct";
import { notFound } from 'next/navigation';
import { getProduct } from '@/lib/shopify';
// import { artwork } from "@/components/Shop/ArtSection";

export const runtime = 'edge';

export default async function Page({ params }) {
  const products = await getProduct({params});

  if (!products) return notFound();

  const productId = parseInt(params.handle);

  
  const singleProduct = products.find((art) => art.id === productId);

  if (singleProduct === undefined) {
    return null;
  }

  return (
    
    <SingleProduct product={singleProduct} />
    
  );
}
