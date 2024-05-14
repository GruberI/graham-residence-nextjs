import Link from "next/link";

const artistExhibitions = [
  {
    artist: "David Mathew King & Marcel Rozek",
    name: "Convergence",
    imgSrc:
      "https://ipfs.filebase.io/ipfs/QmbapwiUd9S4ZFEq9ht8mYoN2JQsv7fhMosahi47hCGXYh",
    imgAltText:
      "Various paintings by Thai resting on porch at the graham residence",
    href: "/gallery/david-marcel",
    date: "May 2024 - July 2024",
  },
  {
    artist: "Kyle Steed",
    name: "A Quiet Noise",
    imgSrc:
      "https://ipfs.filebase.io/ipfs/QmZUP4GfbWpnwySsEh2jJ1KdG96dPEK7fSnoGRK7AeCaZc/QmdFrNgmbK3FwH8DTjzPQJEXfk8CHXBeb72HSe37ArVRgW",
    imgAltText:
      "Painting by Kyle Steed hung in living room of Graham Residence",
    href: "/gallery/kyle-steed",
    date: "October 2023 - Current",
  },
];

export default function ExhibitionList() {
  return (
    <div className="sm:mt-10 border-t border-b border-black pt-10 sm:pt-16 m-auto pb-20 mx-10 max-w-7xl mx-auto">
      <div className="mb-10">
        <h1 className="sm:text-3xl text-2xl">Recent Exhibitions</h1>
        <a
          href="/exhibitions"
          className="text-[10px] font-thin leading-6 hover:text-neutral-300 underline underline-offset-8 "
        >
          VIEW ALL
        </a>
      </div>
      <div className="grid grid-cols-1 flex align-start gap-x-10 gap-y-16 sm:grid-cols-2 px-4 sm:px-2 md:px-0">
        {artistExhibitions.map((exhibit, i) => {
          return (
            <Link href={exhibit.href} key={i} >
              <div className="flex flex-col">
                <div className="aspect-[7/5] overflow-hidden" key={i}>
                  <img
                    src={exhibit.imgSrc}
                    alt={exhibit.imgAltText}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <p className="pt-4 text-xs">Exhibition</p>
                <h1 className="sm:text-2xl text-lg pt-2">
                  {exhibit.name} by {exhibit.artist}
                </h1>
                <p className="pt-1 tracking-tight font-thin text-xs sm:text-base">
                  {" "}
                  At the Graham Residence, {exhibit.date}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
