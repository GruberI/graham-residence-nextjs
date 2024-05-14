import ProductGridThree from "../Product/ProductGridThree";

export default function SixImageGrid({ products }) {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 my-10 sm:my-20">
      <section aria-labelledby="products-heading" className="mt-8">
        <h2 id="products-heading" className="sr-only">
          Products
        </h2>
        <ProductGridThree products={products} />
      </section>
    </div>
  );
}
