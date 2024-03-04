import Link from "next/link";

const artistExhibitions = [
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
  {
    artist: "Thai Mainhard",
    name: "Desert Spring",
    imgSrc:
      "https://ipfs.filebase.io/ipfs/QmWjsuayG2e1Nt996UGJEXEZGvd9x3DCqe9FyijEUxwQyD",
    imgAltText:
      "Various paintings by Thai resting on porch at the graham residence",
    href: "/gallery/thai-mainhard",
    date: "June 2023 - October 2023",
  },
];

export default function ExhibitionList() {
  return (
    <div
      className="sm:mt-10 border-t border-black pt-20 max-w-7xl m-auto pb-20"
    >
      <h1 className="sm:text-5xl text-4xl text-center pb-16">Exhibitions</h1>
      <div className="grid grid-cols-1 items-center gap-x-10 gap-y-16 sm:grid-cols-2 px-4 sm:px-2 md:px-0">
        {artistExhibitions.map((exhibit, i) => {
          return (
            <Link href={exhibit.href} className="flex flex-col" key={i}>
              <div className="aspect-[7/5] overflow-hidden">
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
                On display at the Graham Residence, {exhibit.date}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
