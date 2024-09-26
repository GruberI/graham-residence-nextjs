import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-white mt-24 sm:mt-32 lg:mt-40 pb-16"> {/* Changed pb-8 to pb-16 */}
      <div className="mx-10"> {/* Changed mx-4 sm:mx-8 lg:mx-10 to just mx-10 */}
        <Link href={"/gallery/alex-maceda"}>
          <div className="flex flex-col">
            <div className="relative w-full aspect-w-16 aspect-h-9">
              <img
                src="https://siteimagery.nyc3.cdn.digitaloceanspaces.com/Exhibitions/AlexMacedaTheDesertWillHoldYou/0171_2024_aM70298.jpg"
                alt="The Desert Will Hold You by Alex Maceda"
                className="object-cover object-center w-full h-full"
              />
            </div>
            <div className="my-4">
              <h1 className="my-2 text-xl sm:text-2xl lg:text-3xl">
                THE DESERT WILL HOLD YOU
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl w-full sm:w-11/12 lg:w-9/12">
                Solo show by Alex Maceda
              </p>
              <p className="text-base sm:text-lg lg:text-xl w-full sm:w-11/12 lg:w-8/12 mt-2 sm:mt-0">
                On display at the Graham Residence, Autumn 2024
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div id="upcoming-exhibitions"></div>
    </div>
  );
}
