import { GridTileImage } from "./tile";
import Label from "./label";
import Link from "next/link";

export default function Carousel({ products }) {
  // const label =  {
  //     title: produ;
  // amount: string;
  // currencyCode: string;
  // position?: 'bottom' | 'center';
  // }

  if (!products.length) return null;

  return (
    <div className="py-8">
      <ul className="flex w-full gap-6 overflow-x-auto pt-1">
        {products.map((product) => (
          <li
            key={product.handle}
            className="aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
          >
            <Link
              className="relative h-full w-full"
              href={`/product/${product.handle}`}
            >
              <GridTileImage
                alt={product.title}
                label={{
                  title: product.title,
                  amount: product.priceRange.maxVariantPrice.amount,
                  currencyCode: product.priceRange.maxVariantPrice.currencyCode,
                }}
                src={product.featuredImage?.url}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
              />
            </Link>

            <Label
              title={product.title}
              amount={product.priceRange.maxVariantPrice.amount}
              currencyCode={product.currencyCode}
              position={product.position}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
