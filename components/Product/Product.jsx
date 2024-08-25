import ImageTransition from "./ImageTransition";
import ImageTransitionPhoto from "./ImageTransitionPhoto";
import Link from "next/link.js";

export default function Product({ product }) {
  const amount = product.priceRange.minVariantPrice.amount;
  const available = product.availableForSale;
  const imgOne = {
    src: product.featuredImage?.url,
    altText: product.featuredImage?.altText,
  };
  const imgTwo = {
    src: product.images[1]?.url,
    altText: product.images[1]?.altText,
  };
  const fineArt = product.tags.includes("fine-art");
  const photography = product.tags.includes("photography");

  return (
    <Link
      href={`/product/${product.handle}`}
      className="group relative h-full w-full"
    >
      {photography === true ? (
        <ImageTransitionPhoto img={imgOne} />
      ) : (
        <ImageTransition
          imgOne={imgOne}
          imgTwo={imgTwo}
          available={available}
          fineArt={fineArt}
        />
      )}
      <div className="mt-4 flex flex-col text-base mb-10">
        <div className="flex flex-row justify-between">
          <p className="text-sm font-light text-neutral-600">
            {product.vendor}
          </p>
          <p className="mt-1 text-sm">
            {!available && product.tags.includes("fine-art") || !available && product.tags.includes("Sculpture")
              ? "Sold"
              : !available && product.tags.includes("home-goods")
              ? "Sold Out"
              : `${new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(parseFloat(amount))}`}
          </p>
        </div>
        <div>
          <h3 className="whitespace-normal break-words font-light text-base text-black">
            {product.title}
          </h3>
        </div>
      </div>
    </Link>
  );
}
