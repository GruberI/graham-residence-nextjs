"use client";
import { Suspense } from "react";
import PopoverItems from "./PopoverItems";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [clientWindowHeight, setClientWindowHeight] = useState("");
  const [color, setColor] = useState("#d9d2ca");
  const pathname = usePathname();

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
    window.scrollY < 80 ? setColor("#d9d2ca") : setColor("black");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 600;

    if (backgroundTransparacyVar > 0) {
      setBackgroundTransparacy(backgroundTransparacyVar);
    }
  }, [clientWindowHeight]);

  return (
    <div
      className={`fixed top-0 z-40 animate-fadeTwo`}
      style={
        pathname == "/"
          ? { background: `rgba(255, 255, 255, ${backgroundTransparacy})` }
          : { background: "white" }
      }
    >
      <header className="relative" id="page-begin">
        <nav aria-label="Top" className="w-screen sm:px-0 lg:px-0">
          <div
            className={`border-b border-${
              pathname == "/" ? color : "black"
            } px-4 pb-14 sm:px-0 sm:pb-0`}
          >
            <div className="flex h-20 items-center justify-between">
              {/* Logo */}
              <div className="flex flex-1">
                <a href="/">
                  <p
                    className={`font-light sm:pl-2 lg:px-4 lg:text-4xl md:text-1xl sm:text-1xl semibold`}
                    style={
                      pathname == "/"
                        ? { color: `${color}` }
                        : { color: "black" }
                    }
                  >
                    TGR<span className="lg:text-2xl"> SHOP</span>
                  </p>
                </a>
              </div>

              {/* Flyout menus */}
              <PopoverItems color={color} pathname={pathname} />

              <div className="flex flex-1 items-center justify-end mr-20">
                <a
                  href="https://www.airbnb.com/rooms/18312865?source_impression_id=p3_1697958503_wgsynyWLg4S60ges"
                  className="p-2 text-black hover:text-slate-500"
                  target="_blank"
                >
                  {/* <span className="sr-only">Search</span>
                  <MagnifyingGlassIcon
                    className="h-6 w-6 ease-in-out hover:scale-110"
                    aria-hidden="true"
                  /> */}
                  <button
                    type="submit"
                    className="flex max-w-md bg-black text-white hover:bg-slate-800 px-6 lg:py-2 md:py-2 max-sm:py-2 sm:px-4 text-base font-light text-white[0] hover:bg-black focus:outline-none focus:ring-2 focus:ring-stone-600 focus:ring-offset-2 focus:ring-offset-black-50 hover:text-white hover:font-medium lg:text-[14px] md:text-[13px] sm:text-[12px] animate-fadeFour">
                   STAY WITH US
                  </button>
                </a>
                {/* Cart */}
                {/* <div className="ml-4 flow-root mr-7">
                  <Suspense fallback={<OpenCart />}>
                    <Cart />
                  </Suspense>
                </div> */}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
