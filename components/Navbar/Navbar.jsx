import { Suspense } from "react";
import Cart from "../Cart/index";
import OpenCart from "../Cart/open-cart";
import PopoverItems from "./PopoverItems";

export default function Navbar() {
  return (
    <div className="bg-white">
      <header className="relative" id="page-begin">
        <nav aria-label="Top" className="w-screen sm:px-1 lg:px-1">
          <div className="border-b border-black px-4 pb-14 sm:px-0 sm:pb-0">
            <div className="flex h-20 items-center justify-between">

              {/* Logo */}
               <div className="flex flex-1">
                <a href="/">
                  <p className="font-light sm:pl-2 lg:px-4 sm:text-2xl ">
                    THE GRAHAM RESIDENCE
                  </p>
                </a>
              </div>

              {/* Flyout menus */}
              <PopoverItems />
             

              <div className="flex flex-1 items-center justify-end">
              <a
                  href="https://www.airbnb.com/rooms/18312865?source_impression_id=p3_1697958503_wgsynyWLg4S60ges"
                  className="p-2 text-black hover:text-black-500"
                >
                  {/* <span className="sr-only">Search</span>
                  <MagnifyingGlassIcon
                    className="h-6 w-6 ease-in-out hover:scale-110"
                    aria-hidden="true"
                  /> */}
                  <button
                    type="submit"
                    className="flex max-w-md items-center justify-center border-2 border-black px-6 py-2 sm:px-4 text-base font-light text-black hover:bg-black hover:black focus:outline-none focus:ring-2 focus:ring-stone-600 focus:ring-offset-2 focus:ring-offset-black-50 hover:text-white hover:font-medium sm:w-full lg:text-[14px] sm:text-[10px]"
                  >
                    BOOK ON AIRBNB
                  </button>
                </a>
                {/* Cart */}
                <div className="ml-4 flow-root mr-7">
                  <Suspense fallback={<OpenCart />}>
                    <Cart />
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
