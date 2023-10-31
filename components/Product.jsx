"use client";
import clsx from 'clsx';

import { useState } from "react";
import Link from "next/link";

export default function Product({ product }) {
  const [hover, setHover] = useState(false);
  const amount = product.priceRange.maxVariantPrice.amount;

  return (
    <Link
      key={product.id}
      href={`/product/${product.handle}`}
      className="group relative"
    >
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-black-200 lg:aspect-none lg:h-80">
        <img
          src={!hover ? product.featuredImage.url : product.images[0].url}
          alt={product.featuredImage.altText}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        />
      </div>
      <div className="mt-4 flex items-center justify-between text-base font-medium text-black-900">
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
