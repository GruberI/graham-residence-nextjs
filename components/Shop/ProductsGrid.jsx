import Product from "./Product";

export default function ProductsGrid({ products }) {
  return (
    <div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-1 lg:grid-cols-4 xl:gap-x-10">
      {products.map((product) => (
        <Product product={product} key={product.id}/>
      ))}
    </div>
  );
}
