import ShopAllArt from "../../../components/ShopAll/Art/Art";
import { getCollectionProducts } from "../../../lib/shopify";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const runtime = "edge";

// export async function generateMetadata({
//   params,
// }: {
//   params: { handle: string };
// }): Promise<Metadata> {
//   const product = await getProducts(params.handle);

//   if (!product) return notFound();

//   const { url, width, height, altText: alt } = product.featuredImage || {};
//   const indexable = !product.tags.includes(HIDDEN_PRODUCT_TAG);

//   return {
//     title: product.seo.title || product.title,
//     description: product.seo.description || product.description,
//     robots: {
//       index: indexable,
//       follow: indexable,
//       googleBot: {
//         index: indexable,
//         follow: indexable,
//       },
//     },
//     openGraph: url
//       ? {
//           images: [
//             {
//               url,
//               width,
//               height,
//               alt,
//             },
//           ],
//         }
//       : null,
//   };
// }

export default async function ShopAll({
    params,
  }: {
    params: { handle: string };
  }) {
    const products = await getCollectionProducts({ collection: "Artwork" });

    const productsByHandle = products.filter((product) => {
      return product.tags.includes(params.handle);
    });
  
    if (!products?.length) return null;

  // const productsByTag = products.filter((product) => {
  //   return product.tags.includes("yoni-goldberg");
  // });


    return (
        <ShopAllArt productsByHandle={productsByHandle}/>
    )
}