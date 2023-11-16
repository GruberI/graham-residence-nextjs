import Cart from "../Cart/index";
import OpenCart from "../Cart/open-cart";
import { Suspense } from "react";

export default function StickyCart() {
  return (
    <div className="fixed z-50 top-4 right-6">
      <span className="">
        <Suspense fallback={<OpenCart />}>
          <Cart />
        </Suspense>
      </span>
    </div>
  );
}
