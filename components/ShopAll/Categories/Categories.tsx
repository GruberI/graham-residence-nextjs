import CatgoriesHeader from "./Header";
import ProductSection from "../Home/ProductSection";

export default async function ShopCategories({ productsByHandle, productHandle }) {
  return (
    <>
      <CatgoriesHeader products={productsByHandle} />
      <section>
        {productsByHandle.length === 0 ? (
          <p className="py-10 text-lg text-center">{`No products found in this collection, check back later.`}</p>
        ) : (
          <ProductSection products={productsByHandle} productHandle={productHandle}/>
        )}
      </section>
    </>
  );
}
