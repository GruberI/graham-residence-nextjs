import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-white mt-48 lg:mt-40 pb-8 sm:pb-0">
      <div className="mx-10">
        <Link href={"/gallery/alex-maceda"}>
          <div className="flex flex-col">
            <img
              src="https://siteimagery.nyc3.cdn.digitaloceanspaces.com/Exhibitions/AlexMacedaTheDesertWillHoldYou/0220_L1011973.jpg"
              alt=""
              className="object-cover object-center w-screen max-h-[500px]"
            />
            <div className="my-4">
              <h1 className="my-2 text-3xl">THE DESERT WILL HOLD YOU</h1>
              <p className="w-11/12 lg:w-9/12 text-xl">
                {" "}
                Solo show by Alex Maceda
              </p>
              <p className="w-11/12 lg:w-8/12 mt-2 sm:mt-0">
                {" "}
                On display at the Graham Residence, September 24th - November 5th
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div id="upcoming-exhibitions"></div>
    </div>
  );
}
