import ImageTransition from "./ImageTransition.jsx";
import Link from "next/link.js";

export default function Product({ product }) {
  const amount = product.priceRange.maxVariantPrice.amount;
  const imgOne = {
    src: product.featuredImage.url,
    altText: product.featuredImage.altText,
  };
  const imgTwo = {
    src: product.images[1]?.url,
    altText: product.images[1]?.altText,
  };

  console.log("Product", product.vendor);

  return (
    <Link
      href={`/product/${product.handle}`}
      className="group relative h-full w-full"
    >
      <ImageTransition imgOne={imgOne} imgTwo={imgTwo} />
      <div className="mt-4 flex flex-col text-base mb-10">
        <div className="flex flex-row justify-between ">
          <h3 className="truncate font-light text-base text-black">{product.title}</h3>
          <p className="mt-1 text-sm">{`${new Intl.NumberFormat(
            "en-US",
            {
              style: "currency",
              currency: "USD",
            }
          ).format(parseFloat(amount))}`}</p>
        </div>
        <div>
          <p className="text-sm font-light text-neutral-600">{product.vendor}</p>
        </div>
      </div>
    </Link>
  );
}
