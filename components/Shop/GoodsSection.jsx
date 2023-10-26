import ProductsGrid from "./ProductsGrid";

export default async function ArtSection({products}) {
  if (!products?.length) return null;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mx-auto text-left pb-6 scroll-smooth" id="homegoods">
          <h2
            className="text-1xl text-black-900 border-b pb-2"
            id="products-grid"
          >
            HOME GOODS
          </h2>
        </div>
        <ProductsGrid products={products} />
      </div>
    </div>
  );
}
