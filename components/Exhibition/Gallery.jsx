import { getCollectionProducts } from "../../lib/shopify";

export default async function Gallery() {

  const products = await getCollectionProducts({ collection: "Artwork" });
  const productsByTag = products.filter((product) => {
    return product.tags.includes("kyle-steed");
  });

  if (!products?.length) return null;

  return (
    <div className="bg-white border-t  border-black-400">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 my-20">
        <section aria-labelledby="products-heading" className="mt-8">
          <h2 id="products-heading" className="sr-only">
            Products
          </h2>

          <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-10">
            {productsByTag.slice(0,6).map((product) => (
              <a key={product.id} href={`/product/${product.handle}`} className="group">
                <div className="aspect-[4/5] w-full overflow-hidden sm:aspect-[4/5]">
                  <img
                    src={product.featuredImage.url}
                    alt={product.featuredImage.altText}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between text-base font-medium text-black-900">
                  <h3>{product.title}</h3>
                  {/* <p>{product.price}</p> */}
                </div>
                <p className="mt-1 text-sm italic text-black-500">
                  {/* {product.description} */}
                </p>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
