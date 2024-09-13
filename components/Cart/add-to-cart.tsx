"use client";

import clsx from "clsx";
import { addItem } from "./actions";
import LoadingDots from "../loading-dots";
import { ProductVariant } from "../../lib/shopify/types";
import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import React from "react";

export function AddToCart({
  variants,
  availableForSale,
  type,
  product, // Add product as a prop
}: {
  variants: ProductVariant[];
  availableForSale: boolean;
  type: string;
  product?: { tags: string[] }; // Define the expected structure of the product
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const defaultVariantId = variants.length === 1 ? variants[0]?.id : undefined;
  const variant = variants.find((variant: ProductVariant) =>
    variant.selectedOptions.every(
      (option) => option.value === searchParams.get(option.name.toLowerCase())
    )
  );
  const selectedVariantId = variant?.id || defaultVariantId;
  const title = !availableForSale
    ? "Out of stock"
    : !selectedVariantId
    ? "Please select options"
    : undefined;

  // Safeguard against product being undefined
  const isOnHold = product?.tags?.includes("on-hold");

  // Determine the button text based on availability and tags
  const buttonText =
    !availableForSale && isOnHold
      ? "On Hold"
      : !availableForSale && type === "art"
      ? "Sold"
      : !availableForSale
      ? "Out Of Stock"
      : "Add To Cart";

  return (
    <button
      aria-label="Add item to cart"
      disabled={isPending || !availableForSale || !selectedVariantId}
      title={title}
      onClick={() => {
        if (!availableForSale || !selectedVariantId) return;
        startTransition(async () => {
          const error = await addItem(selectedVariantId);

          if (error) {
            throw new Error(error.toString());
          }

          router.refresh();
        });
      }}
      className={clsx(
        "m-auto relative flex lg:w-11/12 items-center justify-center border border-black px-4 py-2 text-base font-light text-black hover:bg-black hover:black focus:outline-none focus:ring-2 focus:ring-stone-600 focus:ring-offset-2 focus:ring-offset-black-50 hover:text-white hover:font-medium sm:w-full",
        {
          "cursor-not-allowed opacity-60 hover:opacity-60":
            !availableForSale || !selectedVariantId,
          "cursor-not-allowed": isPending,
        }
      )}
    >
      <div className="absolute left-0 ml-4">
        {!isPending ? <span /> : <LoadingDots className="mb-3 bg-white" />}
      </div>
      <span className="text-xl">{buttonText}</span>
    </button>
  );
}
