"use client";

import { useState } from "react";
import Link from "next/link";

export default function Product({ product }) {
  const [hover, setHover] = useState(false);

  return (
    <Link
      key={product.id}
      href={`/product/${product.id}`}
      className="group relative"
    >
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-black-200 lg:aspect-none lg:h-80">
        <img
          src={!hover ? product.imageSrc : product.hoverImageSrc}
          alt={product.imageAlt}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          // onMouseEnter={() => {
          //   setTimeout(() => setHover(true), 300);
          // }}
          // onMouseLeave={() => {
          //   setTimeout(() => setHover(false), 300);
          // }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        />
      </div>
      <div className="mt-4 flex items-center justify-between text-base font-medium text-black-900">
        <h3 className="truncate">{product.name}</h3>
        <p>{product.price}</p>
      </div>
      <p className="mt-1 text-sm italic text-black-500">{product.description}</p>
    </Link>
  );
}
