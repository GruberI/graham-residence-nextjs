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

  return (
    <Link href={`/product/${product.handle}`} className="group relative h-full w-full">
      <ImageTransition imgOne={imgOne} imgTwo={imgTwo} />
      <div className="mt-4 flex items-center justify-between text-base mb-10">
        <h3 className="truncate font-light text-black">
          {product.title}
        </h3>
        <p className="mt-1 text-sm text-gray-500">{`${new Intl.NumberFormat(
          "en-US",
          {
            style: "currency",
            currency: "USD",
          }
        ).format(parseFloat(amount))}`}</p>
      </div>

      {/* <ImageTransition imgOne={imgOne} imgTwo={imgTwo} />
      <div className="mt-4 flex items-center justify-between text-base font-light text-black">
        <h3 className="truncate">{product.title}</h3>
        <p>{`${new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(parseFloat(amount))}`}</p>
      </div> */}
    </Link>
  );
}
