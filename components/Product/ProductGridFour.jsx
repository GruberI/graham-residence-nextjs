"use client";
import Product from "./Product";

export default function ProductGridFour({ products }) {
  return (
    <div className="mx-auto max-w-7xl py-4">
      <div className="grid gap-y-0 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 sm:gap-x-10 sm:gap-y-0 lg:gap-x-10">
        {products.map((product) => (
          <div key={product.id}>
            <Product product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
