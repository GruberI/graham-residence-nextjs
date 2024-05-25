'use client';
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function OpenCart({
  className,
  quantity,
}: {
  className?: string;
  quantity?: number;
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
    <div className="relative flex h-11 w-11 items-center justify-center rounded-md transition-colors animate-fadeTwo">
      <ShoppingCartIcon
        className={clsx(
          "h-6 transition-all ease-in-out hover:scale-110",
          className
        )}
        style={
          pathname == "/"
            ? { color: `${color}` }
            : { color: "black" }
        }
      />

      {quantity ? (
        <div className="absolute right-0 top-0 -mr-2 -mt-2 pl-0.5 pt-0.4 h-5 w-5 bg-red-400 rounded-full text-[12px] font-medium text-white">
          {quantity}
        </div>
      ) : null}
    </div>
  );
}
