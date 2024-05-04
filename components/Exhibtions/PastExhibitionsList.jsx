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
    date: "October 2023 - January 2024",
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

export default function PastExhibitionList() {
  return (
    <div className="sm:mt-24 border-t border-b border-black pt-10 sm:pt-16 m-auto pb-10 mx-10">
      <div className="mb-10">
        <h1 className="sm:text-3xl text-2xl text-center sm:text-left">Past Exhibitions</h1>
      </div>
      <div className="grid grid-cols-1 items-center gap-x-10 gap-y-16 sm:grid-cols-2 px-4 sm:px-2 md:px-0">
        {artistExhibitions.map((exhibit, i) => {
          return (
            <Link href={exhibit.href} key={i}>
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
                  On display at the Graham Residence, {exhibit.date}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}