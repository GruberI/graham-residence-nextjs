import ShopAllHomeHeader from './Header'
import { getCollection, getCollectionProducts } from '../../../lib/shopify';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import ProductSection from './ProductSection';

export const runtime = 'edge';

export async function generateMetadata({
  params
}: {
  params: { collection: string };
}): Promise<Metadata> {
  const collection = await getCollection(params.collection);

  if (!collection) return notFound();

  return {
    title: collection.seo?.title || collection.title,
    description:
      collection.seo?.description || collection.description || `${collection.title} products`
  };
}

export default async function ShopAllHome() {
  const products = await getCollectionProducts({ collection: "home-goods" });

  return (
<>
<ShopAllHomeHeader />
<section>
      {products.length === 0 ? (
        <p className="py-3 text-lg">{`No products found in this collection`}</p>
      ) : (
        <ProductSection products={products} />
 
      )}
    </section>
</>
  );
}
