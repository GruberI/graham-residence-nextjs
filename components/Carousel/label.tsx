import clsx from "clsx";
import Price from "../price";

const Label = ({
  title,
  amount,
  currencyCode,
  position = "bottom",
  vendor,
}: {
  title: string;
  amount: string;
  currencyCode: string;
  position?: "bottom" | "center";
  vendor: string;
}) => {
  return (
    <div className="mr-4">
      <div className="flex flex-col bg-white/70 text-xs sm:text-base text-black backdrop-blur-md ml-3">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Vendor name with multi-line wrapping */}
          <p className="text-sm pt-2 whitespace-normal">{vendor}</p>
          <div className="hidden">
            <Price
              className="pt-2 text-xs sm:text-base"
              amount={amount}
              currencyCode={currencyCode}
              currencyCodeClassName="hidden @[275px]/label:inline"
            />
          </div>
        </div>

        {/* Title with ellipsis after two lines and fixed height */}
        <h3 className="line-clamp-2 flex-grow leading-none tracking-wide pt-2 text-lg md:text-inherit h-12">
          {title}
        </h3>

        {/* Price below the title */}
        <div className="pt-2">
          <Price
            className="text-xs"
            amount={amount}
            currencyCode={currencyCode}
            currencyCodeClassName="hidden @[275px]/label:inline"
          />
        </div>
      </div>
    </div>
  );
};

export default Label;
