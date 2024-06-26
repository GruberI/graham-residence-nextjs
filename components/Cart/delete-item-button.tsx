import { XMarkIcon } from "@heroicons/react/24/outline";
import LoadingDots from "../loading-dots";
import { useRouter } from "next/navigation";

import clsx from "clsx";
import { removeItem } from "./actions";
import type { CartItem } from "../../lib/shopify/types";
import { useTransition } from "react";
import React from "react";

export default function DeleteItemButton({ item }: { item: CartItem }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <button
      aria-label="Remove cart item"
      onClick={() => {
        // **** WHERE I SWITCHED THE CODE FROM ORIGINAL *** //
        startTransition(async () => {
          const error = await removeItem(item.id);

          if (error) {
            // Trigger the error boundary in the root error.js
            throw new Error(error.toString());
          }

          router.refresh();
        });
      }}
      disabled={isPending}
      className={clsx(
        "ease flex h-[17px] w-[17px] items-center justify-center rounded-full bg-white transition-all duration-200",
        {
          "cursor-not-allowed px-0": isPending,
        }
      )}
    >
      {isPending ? (
        <LoadingDots className="bg-white" />
      ) : (
        <XMarkIcon className="hover:text-accent-3 mx-[1px] h-4 w-4 text-black dark:text-slate-900" />
      )}
    </button>
  );
}
