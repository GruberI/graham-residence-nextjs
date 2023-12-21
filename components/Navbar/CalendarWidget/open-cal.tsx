'use client';
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function OpenCal({
  className,
  buttonBg
}: {
  className?: string;
  buttonBg?: string;
}) {
  const [clientWindowHeight, setClientWindowHeight] = useState(0);
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

  return (
    <div className="relative flex items-center justify-center rounded-md transition-colors dark:border-neutral-700 dark:text-white animate-fadeTwo">
      <p
       className={`rounded-sm border lg:px-3.5 px-3 py-2.5 lg:text-sm text-xs ml-2 md:ml-0 font-normal shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-800 bg-${
        pathname == "/" ? buttonBg : "black"
      } text-white`}
      style={
        pathname == "/"
          ? { border: `1px solid ${color}` }
          : { border: "1px solid black" }
      }
      ><span className='inline sm:hidden md:hidden lg:inline'>STAY WITH US</span><span className='hidden sm:inline md:inline lg:hidden'>BOOK</span></p>
    </div>
  );
}
