// Product.jsx
import ImageTransition from "./ImageTransition";
import ImageTransitionPhoto from "./ImageTransitionPhoto";
import Link from "next/link.js";

export default function Product({ product }) {
  const available = product.availableForSale;
  const amount = product.priceRange.minVariantPrice.amount;
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

       

        {/* Centered Product Title */}
        <div>
          <h3 className="whitespace-normal break-words font-light text-base text-black text-center">
            {product.title}
          </h3>
        </div>
         {/* Display SOLD if the product is not available */}
         {!available ? (
          <p className="text-black-500 font-semi-bold">SOLD</p>
        ) : null}
      </div>
    </Link>
  );
}
