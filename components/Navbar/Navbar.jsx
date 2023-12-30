"use client";
import PopoverItems from "./PopoverItems";
import { Fragment, useRef, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Calendar from "./CalendarWidget/Calendar";

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
        <nav aria-label="Top">
          <div
            className={`border-b border-${
              pathname == "/" ? color : "black"
            } px-4 pb-14 sm:px-0 sm:pb-0`}
          >
            <div className="flex h-20 items-center justify-between">
              {/* Logo */}
              <div className="flex flex-2 lg:flex-1">
                <a href="/">
                  <p
                    className={`font-light sm:pl-1 md:pl-6 ml-0 sm:ml-2 md:ml-0 text-3xl sm:text-[18px] md:text-4xl semibold w-full sm:w-[100px] md:w-full font-[cormorant]`}
                    style={
                      pathname == "/"
                        ? { color: `${color}` }
                        : { color: "black" }
                    }
                  >
                    TGR<span className="md:text-2xl text-sm"> SHOP</span>
                  </p>
                </a>
              </div>

              {/* Flyout menus */}
              <PopoverItems color={color} pathname={pathname} />

              <div className="flex flex-1 items-center justify-end sm:mr-20 mr-14">
                {/* <a
                  href="https://www.grahamresidence.com/"
                  className={`rounded-sm border lg:px-3.5 px-3 py-2.5 lg:text-sm text-xs ml-2 md:ml-0 font-normal shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-800 bg-${
                    pathname == "/" ? buttonBg : "black"
                  } text-white`}
                  target="_blank"
                  style={
                    pathname == "/"
                      ? { border: `1px solid ${color}` }
                      : { border: "1px solid black" }
                  }
                >
                 STAY <span className="inline sm:hidden lg:inline">WITH US</span>
                </a> */}
                <Calendar />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
