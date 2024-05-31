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
          <p className="text-sm pt-2 truncate">{vendor}</p>
          <div className="hidden">
            <Price
              className="pt-2 text-xs sm:text-base"
              amount={amount}
              currencyCode={currencyCode}
              currencyCodeClassName="hidden @[275px]/label:inline"
            />
          </div>
        </div>

        <h3 className="line-clamp-2 flex-grow leading-none tracking-wide truncate pt-2 text-lg md:text-inherit">
          {title}
        </h3>
        <div className="">
          <Price
            className="pt-2 text-xs"
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
