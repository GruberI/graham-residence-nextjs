import Link from "next/link";
export default function TwoImageGrid({products}) {
  return (
    <div className="w-screen sm:px-0 px-10 mt-20">
      <div className="mx-auto sm:max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-x-10 gap-y-16 sm:grid-cols-2">
          <Link href={products[0].href}>
            <div className="aspect-[7/5] overflow-hidden bg-black-100">
              <img
                src={products[0].imgSrc}
                alt={products[0].imgAltText}
                className="h-full w-full object-cover object-center"
              />
            </div> 
            <h2 className="pt-6 tracking-widest leading-7">{products[0].title}</h2>
          </Link>

          <Link href={products[1].href}>
            <div className="aspect-[7/5] overflow-hidden">
              <img
                src={products[1].imgSrc}
                alt={products[1].imgAltText}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <h2 className="pt-6 tracking-widest leading-7">{products[1].title}</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}
