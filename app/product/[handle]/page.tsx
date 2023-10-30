// import SingleProduct from "@/components/SingleProduct/SingleProduct";
// import { notFound } from 'next/navigation';
// import { getProduct } from '@/lib/shopify';

// export const runtime = 'edge';

// export default async function Page({ params }) {
//   const products = await getProduct({params});

//   if (!products) return notFound();

//   const productId = parseInt(params.handle);

  
//   const singleProduct = products.find((art) => art.id === productId);

//   if (singleProduct === undefined) {
//     return null;
//   }

//   return (
    
//     <SingleProduct product={singleProduct} />
    
//   );
// }

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import SingleProduct from "@/components/SingleProduct/SingleProduct";
import { HIDDEN_PRODUCT_TAG } from '../../../lib/constants';
import { getProduct } from '../../../lib/shopify';
import { Image } from '../../../lib/shopify/types';
import Link from 'next/link';

export const runtime = 'edge';

// export async function generateMetadata({
//   params
// }: {
//   params: { handle: string };
// }): Promise<Metadata> {
//   const product = await getProduct(params.handle);

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
//         follow: indexable
//       }
//     },
//     openGraph: url
//       ? {
//           images: [
//             {
//               url,
//               width,
//               height,
//               alt
//             }
//           ]
//         }
//       : null
//   };
// }

export default async function ProductPage({ params }: { params: { handle: string } }) {
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: product.featuredImage.url,
    offers: {
      '@type': 'AggregateOffer',
      availability: product.availableForSale
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      priceCurrency: product.priceRange.minVariantPrice.currencyCode,
      highPrice: product.priceRange.maxVariantPrice.amount,
      lowPrice: product.priceRange.minVariantPrice.amount
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd)
        }}
      />
      <div className="mx-auto max-w-screen-2xl px-4">
        <div className="flex flex-col rounded-lg border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-black md:p-12 lg:flex-row lg:gap-8">

          <div className="basis-full lg:basis-2/6">
            <SingleProduct product={product} />
          </div>
        </div>
      </div>
    </>
  );
}
