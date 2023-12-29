"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function OpenCal() {
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
    <div className="relative flex items-center justify-center rounded-md transition-colors dark:border-neutral-700 dark:text-white animate-fadeTwo">
      <p
        className={`rounded-sm border font-light px-8 py-2.5 lg:text-sm text-xs ml-2 md:ml-0 font-normal shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-800 bg-${
          pathname == "/" ? buttonBg : "black"
        } text-white`}
        style={
          pathname == "/"
            ? { border: `1px solid ${color}` }
            : { border: "1px solid black" }
        }
      >
        STAY
      </p>
    </div>
  );
}
