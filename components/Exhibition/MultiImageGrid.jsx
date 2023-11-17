import { getCollectionProducts } from "../../lib/shopify";
import Link from "next/link";

export default async function MultiImageGrid() {
  const products = await getCollectionProducts({ collection: "Artwork" });
  const productsByTag = products.filter((product) => {
    return product.tags.includes("kyle-steed");
  });

  if (!products?.length) return null;

  const imagesArray = productsByTag.splice(6, 9);
  return (
    <div className="mx-auto my-20 max-w-1xl sm:px-6 lg:grid lg:max-w-8xl lg:grid-cols-2 lg:gap-x-6 lg:px-8">
      <div className="">
        <Link href={`/product/${imagesArray[0].handle}`}>
          <div className="aspect-h-2 aspect-w-3 ml-16">
            <img
              src={imagesArray[0].featuredImage.url}
              alt={imagesArray[0].featuredImage.altText}
              className="w-10/12 object-fit"
            />
            <p className="pt-4 pb-8">{imagesArray[0].title}</p>
          </div>
        </Link>
        <Link href={`/product/${imagesArray[1].handle}`}>
          <div className="w-10/12 ml-10 pt-6">
            <img
              src={imagesArray[1].featuredImage.url}
              alt={imagesArray[1].featuredImage.altText}
              className="object-contain object-center"
            />
            <p className="pt-4 pb-6">{imagesArray[1].title}</p>
          </div>
        </Link>
      </div>
      <div className="grid-cols-3 sm:grid-cols-1 lg:gap-y-8">
        <Link href={`/product/${imagesArray[2].handle}`}>
          <div className="w-11/12 ml-5 aspect-[3/4]">
            <img
              src={imagesArray[2].featuredImage.url}
              alt={imagesArray[2].featuredImage.altText}
              className="object-contain object-center"
            />
            <p className="pt-4 pb-8">{imagesArray[2].title}</p>
          </div>
        </Link>
        <Link href={`/product/${imagesArray[3].handle}`}>
          <div className="aspect-[3/4] mt-6">
            <img
              src={imagesArray[3].featuredImage.url}
              alt={imagesArray[3].featuredImage.altTextt}
              className="w-11/12 object-contain object-center"
            />
            <p className="pt-4 pb-3">{imagesArray[3].title}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
