import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Suspense } from "react";
import Cart from "./Cart/index.tsx";
import OpenCart from "./Cart/open-cart";

const navigation = {
  categories: [
    {
      name: "THE PROPERTY",
      href: "https://www.grahamresidence.com/",
    },
    {
      name: "THE SHOP",
      href: "/shop",
    },
    {
      name: "THE EXHIBIT",
      href: "/exhibition",
    },
  ],
};

export default function Navigation() {
  return (
    <div className="bg-white">
      <header className="relative bg-white">
        <nav aria-label="Top" className="w-screen sm:px-1 lg:px-1">
          <div className="border-b border-black-200 px-4 pb-14 sm:px-0 sm:pb-0">
            <div className="flex h-20 items-center justify-between">
              {/* Company Name */}
              <div className="flex flex-1">
                <a href="/shop">
                  <p className="font-light sm:pl-2 lg:px-4 sm:text-2xl ">
                    THE GRAHAM RESIDENCE
                  </p>
                </a>
              </div>

              {/* Middle menu */}
              <div className="absolute inset-x-0 bottom-0 sm:static sm:flex-1 sm:self-stretch">
                <div className="flex h-14 space-x-8 overflow-x-auto border-t px-4 pb-px sm:h-full sm:justify-center sm:overflow-visible sm:border-t-0 sm:pb-0">
                  {navigation.categories.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center font-normal text-black-700 hover:text-slate-600 sm:text-1xl text-[12px]"
                      target={item.name === "The Property" ? "_blank" : null}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex flex-1 items-center justify-end">
                {/* Search */}
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
                    className="flex max-w-md items-center justify-center border-2 border-black px-6 py-2 text-base font-light text-black hover:bg-black hover:black focus:outline-none focus:ring-2 focus:ring-stone-600 focus:ring-offset-2 focus:ring-offset-black-50 hover:text-white hover:font-medium sm:w-full text-[12px]"
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
  );
}
