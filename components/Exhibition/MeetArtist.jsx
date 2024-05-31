import Link from "next/link";

const artistExhibitions = [
  // {
  //   artist: "Kyle Steed",
  //   imgSrc:
  //     "https://ipfs.filebase.io/ipfs/QmQTWf7mwwEodd5RUH2ShWPtbNqqJDr5DwXbwPJgv33Qhs",
  //   imgAltText:
  //     "Painting by Kyle Steed hung in living room of Graham Residence",
  //   href: "/art/kyle-steed",
  // },
  {
    artist: "David Matthew King",
    imgSrc:
      "https://ipfs.filebase.io/ipfs/QmSAUVmRBkzishf8LjH4mwSbWaD2VhgMT3Zd7yQo3zfDoD",
    imgAltText:
      "David Matthew King",
    href: "/art/david-matthew-king",
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
    <div className="m-auto max-w-7xl pt-10 pb-16">
       <div className="mb-10 pl-4 sm:pl-0">
        <h2 className="sm:text-4xl text-3xl pb-2">Meet the Artists</h2>
        <a
          href="/gallery/artists"
          className="text-sm font-thin leading-6 hover:text-neutral-300 underline underline-offset-8"
        >
          VIEW ALL
        </a>
      </div>
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
              <p className="sm:text-2xl text-lg pt-4">{exhibit.artist}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
