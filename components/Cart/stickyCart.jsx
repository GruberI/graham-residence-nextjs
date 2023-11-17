import Cart from "../Cart/index";
import OpenCart from "../Cart/open-cart";
import { Suspense } from "react";

export default function StickyCart() {
  return (
    <div className="fixed z-50 lg:top-4 lg:right-4 md:right-4 top-4 right-16">
      <span className="">
        <Suspense fallback={<OpenCart />}>
          <Cart />
        </Suspense>
      </span>
    </div>
  );
}
