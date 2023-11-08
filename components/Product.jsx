"use client";
import Link from "next/link";
import ImageTransition from "./ImageTransition";

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
    <Link
      key={product.id}
      href={`/product/${product.handle}`}
      className="group relative"
    >
      <ImageTransition imgOne={imgOne} imgTwo={imgTwo} />
      <div className="mt-4 flex items-center justify-between text-base font-light text-black">
        <h3 className="truncate">{product.title}</h3>
        <p>{`${new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(parseFloat(amount))}`}</p>
      </div>
      {/* <p className="mt-1 text-sm italic text-black-500">
        {product.description}
      </p> */}
    </Link>
  );
}
