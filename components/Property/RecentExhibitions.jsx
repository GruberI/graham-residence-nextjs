import Link from "next/link";

const artistExhibitions = [
  {
    artist: "Alex Maceda",
    name: "The Desert Will Hold You",
    imgSrc:
      "https://alexmaceda.nyc3.cdn.digitaloceanspaces.com/AlexMaceda/2024_aM70298.jpg",
    imgAltText:
      "Alex Maceda",
    href: "/gallery/alex-maceda",
    date: "September 24th - November 5th",
    link: "/art/alex-maceda",
  },
  {
    artist: "David Mathew King",
    artistSecond: "Marcel Rozek",
    name: "CONVERGENCE",
    imgSrc:
      "https://siteimagery.nyc3.cdn.digitaloceanspaces.com/Homepage/QmbapwiUd9S4ZFEq9ht8mYoN2JQsv7fhMosahi47hCGXYh.jpeg",
    imgAltText:
      "Various paintings by Thai resting on porch at the graham residence",
    href: "/gallery/david-marcel",
    date: "June 4th - July 31st",
    link: "/art/david-matthew-king",
    linkSecond: "/art/marcel-rozek",
  },
];

export default function ExhibitionList() {
  return (
    <div className="sm:mt-10 border-t border-b border-black pt-10 m-auto pb-16 max-w-7xl mx-auto">
      <div className="mb-10 ml-4 sm:ml-0">
        <h2 className="sm:text-4xl text-3xl pb-2">Exhibitions</h2>
        <a
          href="/exhibitions"
          className="text-sm font-thin leading-6 hover:text-neutral-300 underline underline-offset-8"
        >
          VIEW ALL
        </a>
      </div>
      <div className="grid grid-cols-1 flex align-start gap-x-10 gap-y-16 sm:grid-cols-2 px-4 sm:px-2 md:px-0">
        {artistExhibitions.map((exhibit, i) => {
          return (
            <div className="flex flex-col" key={i}>
              <Link href={exhibit.href}>
                <div className="aspect-[7/5] overflow-hidden" key={i}>
                  <img
                    src={exhibit.imgSrc}
                    alt={exhibit.imgAltText}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h2 className="sm:text-2xl text-xl pt-4">{exhibit.name}</h2>
              </Link>
              <p className="text-lg pt-1">
                {exhibit.artistSecond ? (
                  <>
                    <Link href={exhibit.link}>
                      <span className="hover:text-zinc-500">
                        {exhibit.artist}
                      </span>
                    </Link>
                    <span> & </span>
                    <span className="hover:text-zinc-500">
                      <Link href={exhibit.linkSecond}>
                        {exhibit.artistSecond}
                      </Link>
                    </span>
                  </>
                ) : (
                  <>
                    <Link href={exhibit.link}>
                      {" "}
                      <span className="hover:text-zinc-500">
                        {exhibit.artist}
                      </span>
                    </Link>
                  </>
                )}
              </p>
              <p className="tracking-tight font-thin text-lg">
                {" "}
                The Graham Residence, {exhibit.date}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
