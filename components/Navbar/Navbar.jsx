"use client";
import { usePathname } from "next/navigation";
import PopoverItems from "./PopoverItems";
import { useState, useEffect } from "react";
import { NavDrawer } from "../NavDrawer";

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
        pathname == "/" || pathname == "/residence"
          ? { background: `rgba(255, 255, 255, ${backgroundTransparacy})` }
          : { background: "white" }
      }
    >
      <header className="relative" id="page-begin">
        <nav aria-label="Top">
          <div
            className={`border-b border-${
              pathname == "/" || pathname == "/residence" ? color : "black"
            } px-4 pb-0 sm:px-0 sm:pb-0`}
          >
            <div className="flex h-20 items-center justify-between">
              {/* Logo */}
              <div className="flex items-center space-x-2.5 flex-2 lg:flex-1">
                <NavDrawer
                  color={
                    (color === "white") & (pathname === "/") ? "#fff" : "#000"
                  }
                />
                <a href="/">
                  <p
                    className={`font-thin sm:pl-1 md:pl-6 ml-0 sm:ml-2 md:ml-0 w-full sm:w-[100px] md:w-full font-[cormorant]`}
                    style={
                      pathname == "/" || pathname == "/residence"
                        ? { color: `${color}` }
                        : { color: "black" }
                    }
                  >
                    <span className="hidden lg:inline text-xl text-2xl">
                      The Graham Collective
                    </span>
                    <span className="inline lg:hidden text-2xl font-[cormorant]">
                      TGC
                    </span>
                  </p>
                </a>
              </div>

              {/* Flyout menus */}
              <PopoverItems color={color} pathname={pathname} />

              {/* Booking widget */}
              <div className="flex flex-1 items-center justify-end sm:mr-20 mr-14">
              {/*  <Calendar /> */}
              </div> 
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
