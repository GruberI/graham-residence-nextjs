import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import React from "react";

export default function OpenCart({
  className,
  quantity,
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <div className="relative flex h-11 w-11 items-center justify-center rounded-md text-black transition-colors dark:border-neutral-700 dark:text-white">
      <ShoppingCartIcon
        className={clsx(
          "h-6 transition-all ease-in-out hover:scale-110 ",
          className
        )}
      />

      {quantity ? (
        <div className="absolute right-0 top-0 -mr-2 -mt-2 pl-0.5 pt-0.4 h-5 w-5 bg-red-400 rounded-full text-[12px] font-medium text-white">
          {quantity}
        </div>
      ) : null}
    </div>
  );
}
