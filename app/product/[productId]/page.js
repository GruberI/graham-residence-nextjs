
'use client';

import SingleProduct from "@/components/SingleProduct/SingleProduct";
import { artwork } from "@/components/Shop/ArtSection";

export default function Page({ params }) {
  const productId = parseInt(params.productId);

  
  const product = artwork.find((art) => art.id === productId);

  if (product === undefined) {
    return null;
  }

  return (
    
    <SingleProduct product={product} />
    
  );
}
