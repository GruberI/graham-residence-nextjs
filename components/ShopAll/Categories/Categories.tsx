import CatgoriesHeader from "./Header";
import ProductList from "../Home/ProductList";

export default async function ShopCategories({ productsByHandle }) {
  // console.log('CONSOLE LOG CATEGORIES:', productsByHandle)
  return (
    <>
      <CatgoriesHeader products={productsByHandle}/>
      <section>
        {productsByHandle.length === 0 ? (
          <p className="py-10 text-lg text-center">{`No products found in this collection, check back later.`}</p>
        ) : (
          <ProductList products={productsByHandle} />
        )}
      </section>
    </>
  );
}
