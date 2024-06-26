import clsx from "clsx";
import Image from "next/image";

export function GridTileImage({
  isInteractive = true,
  active,
  label,
  ...props
}: {
  isInteractive?: boolean;
  active?: boolean;
  label?: {
    title: string;
    amount: string;
    currencyCode: string;
    position?: "bottom" | "center";
  };
} & React.ComponentProps<typeof Image>) {
  return (
    <>
      <div
        // to change square to rectangle chnage h to full and w to 11/12
        className={clsx(
          "group flex mx-3 items-center justify-center overflow-hidden bg-white hover:border-blue-600 dark:bg-black aspect-[3/4]",
          {
            relative: label,
            "border-2 border-blue-600": active,
            "border-neutral-200 dark:border-neutral-800": !active,
          }
        )}
      >
        {props.src ? (
          // eslint-disable-next-line jsx-a11y/alt-text -- `alt` is inherited from `props`, which is being enforced with TypeScript
          <Image
            className={clsx("relative object-cover h-full w-full", {
              "transition duration-300 ease-in-out group-hover:scale-105":
                isInteractive,
            })}
            {...props}
          />
        ) : null}
      </div>
    </>
  );
}
