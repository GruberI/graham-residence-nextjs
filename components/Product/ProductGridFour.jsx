'use client'
import Product2 from "./Product";

export default function ProductGridFour({ products }) {
  return (
    <div className="mx-auto">
      <div className="grid gap-y-0 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 sm:gap-x-10 sm:gap-y-0 lg:gap-x-10">
        {products.map((product) => (
          <div key={product.id}>
            <Product2 product={product} />
          </div>
        ))}
      </div>

      {/* <div className="mt-6 sm:hidden">
            <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
              Browse all favorites
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div> */}
    </div>
  );
}
