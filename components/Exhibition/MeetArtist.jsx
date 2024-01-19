import Link from "next/link";

const artistExhibitions = [
  {
    artist: "Kyle Steed",
    imgSrc:
      "https://ipfs.filebase.io/ipfs/QmQTWf7mwwEodd5RUH2ShWPtbNqqJDr5DwXbwPJgv33Qhs",
    imgAltText:
      "Painting by Kyle Steed hung in living room of Graham Residence",
    href: "/art/kyle-steed",
  },
  {
    artist: "Thai Mainhard",
    imgSrc:
      "https://ipfs.filebase.io/ipfs/QmdajQkhoMRCbL1kXwsphD6QYhcEGYpdqD9wvZwwmuQpay",
    imgAltText:
      "Various paintings by Thai resting on porch at the graham residence",
    href: "/art/thai-mainhard",
  },
];

export default function MeetArtist() {
  return (
    <div className="mt-20 border-t border-black pt-20 m-auto max-w-7xl">
      <h1 className="sm:text-5xl text-4xl text-center pb-16">
        Meet the Artists
      </h1>
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
              <h1 className="sm:text-xl text-lg pt-4">{exhibit.artist}</h1>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
