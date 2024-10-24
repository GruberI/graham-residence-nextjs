// this affects the grid of products
import ImageTransition from "./ImageTransition";
import ImageTransitionPhoto from "./ImageTransitionPhoto";
import Link from "next/link.js";

export default function Product({ product, hidePrice }) {
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
      <div className="mt-4 flex flex-col text-base mb-10 text-center">
        {/* Centered Artist Name (Vendor) */}
        <p className="text-sm font-light text-neutral-600 text-center">
          {product.vendor}
        </p>

        {/* Conditionally render price based on hidePrice prop */}
        {!hidePrice && (
          <p className="mt-1 text-sm text-center">
            {!available && product.tags.includes("on-hold")
              ? "On Hold"
              : !available &&
                (product.tags.includes("fine-art") ||
                  product.tags.includes("Sculpture"))
              ? "Sold"
              : !available && product.tags.includes("home-goods")
              ? "Sold Out"
              : `${new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(parseFloat(amount))}`}
          </p>
        )}

        {/* Centered Product Title */}
        <div>
          <h3 className="whitespace-normal break-words font-light text-base text-black text-center">
            {product.title}
          </h3>
        </div>
      </div>
    </Link>
  );
}
