"use client";
import Product from "./Product";

export default function ProductGridThree({ products }) {
  return (
    <div className="mx-auto max-w-7xl text-center"> {/* Add text-center */}
      <div className="py-3 text-lg mt-5 grid gap-y-0 lg:grid-cols-3 grid-cols-2 gap-x-5 sm:gap-y-0 lg:gap-x-10">
        {products.map((product) => (
          <div key={product.id} className="text-center"> {/* Center each product */}
            <Product product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
