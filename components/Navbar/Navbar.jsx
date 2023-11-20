"use client";
import { Suspense } from "react";
import PopoverItems from "./PopoverItems";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [clientWindowHeight, setClientWindowHeight] = useState("");
  const [color, setColor] = useState("white");
  const [buttonBg, setButtonBg] = useState("");
  const pathname = usePathname();

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
    window.scrollY < 80
      ? (setColor("white"), setButtonBg("none"))
      : (setColor("black"), setButtonBg("black"));
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
      className={`fixed top-0 z-40 animate-fadeTwo w-screen`}
      style={
        pathname == "/"
          ? { background: `rgba(255, 255, 255, ${backgroundTransparacy})` }
          : { background: "white" }
      }
    >
      <header className="relative" id="page-begin">
        <nav aria-label="Top" className="sm:w-screen sm:px-0 lg:px-0">
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
                    className={`font-light sm:pl-2 lg:px-4 lg:text-4xl text-3xl semibold`}
                    style={
                      pathname == "/"
                        ? { color: `${color}` }
                        : { color: "black" }
                    }
                  >
                    TGR<span className="text-2xl"> SHOP</span>
                  </p>
                </a>
              </div>

              {/* Flyout menus */}
              <PopoverItems color={color} pathname={pathname} />

              <div className="flex flex-1 items-center justify-end mr-20">
                <a
                  href="https://www.grahamresidence.com/"
                  className={`rounded-sm border px-3.5 py-2.5 text-sm font-normal shadow-sm hover:bg-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-800 bg-${
                    pathname == "/" ? buttonBg : "black"
                  } text-white`}
                  target="_blank"
                  style={
                    pathname == "/"
                      ? { border: `1px solid ${color}` }
                      : { border: "1px solid black" }
                  }
                >
                  Stay With Us
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
