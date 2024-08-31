import ProductGridThree from "@/components/Product/ProductGridThree";
import { getCollectionProducts } from "@/lib/shopify";
import { notFound } from "next/navigation";
import CollectorPreview from "@/components/Exhibition/AlexMaceda/Preview/CollectorPreview";
import ArtExhibitionPreview from "@/components/Exhibition/AlexMaceda/About/ArtExhibitionPreview";
//import { useState } from "react";


export const runtime = "edge";

export default async function Exhibition() {
  const products = await getCollectionProducts({ collection: "Artwork" });
  if (!products || !products.length) return notFound();

  const productsByTag = products.filter((product) => {
    return product?.tags?.includes("alex-maceda");
  });

//  const [isContentVisible, setIsContentVisible] = useState(false);
//  const handleEnterClick = () => {
//    setIsContentVisible(true); 
//  };

  return (
    <div className="sm:pt-40 mx-2 pt-48">
      <CollectorPreview 
      //  isContentVisible={isContentVisible} 
      // handleEnterClick={handleEnterClick} 
      />
      
      {/* isContentVisible && ( */}
      <> 
          <ArtExhibitionPreview />
          <ProductGridThree products={productsByTag} />
        </>
      {/* )} */}
    </div>
  );
}