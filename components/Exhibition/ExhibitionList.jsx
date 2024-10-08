import Link from "next/link";

const artistExhibitions = [
  {
    artist: "David Mathew King",
    artistSecond: "Marcel Rozek",
    name: "CONVERGENCE",
    imgSrc:
      "https://siteimagery.nyc3.cdn.digitaloceanspaces.com/Gallery/006.jpg",
    imgAltText: "David Mathew King & Marcel Rozek at the graham residence",
    href: "/gallery/david-marcel",
    date: "May 2024 - July 2024",
    link: "/art/david-matthew-king",
    linkSecond: "/art/marcel-rozek",
  },
  {
    artist: "Kyle Steed",
    name: "A QUIET NOISE",
    imgSrc:
      "https://siteimagery.nyc3.cdn.digitaloceanspaces.com/Gallery/005.jpg",
    imgAltText:
      "Painting by Kyle Steed hung in living room of Graham Residence",
    href: "/gallery/kyle-steed",
    date: "Oct 2023 - Jan 2024",
    link: "/art/kyle-steed",
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
    link: "/art/thai-mainhard",
  },
];

const recentExhibits = artistExhibitions.slice(0, 2);

export default function ExhibitionList() {
  return (
    <div className="border-t border-black max-w-7xl m-auto py-10">
      <div className="mb-10 pl-4 sm:pl-0">
        <h2 className="sm:text-4xl text-3xl pb-2">Exhibitions</h2>
        <a
          href="/exhibitions"
          className="text-sm font-thin leading-6 hover:text-neutral-300 underline underline-offset-8"
        >
          VIEW ALL
        </a>
      </div>
      <div className="grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2 px-4 sm:px-2 md:px-0">
        {recentExhibits.map((exhibit, i) => {
          return (
            <Link href={exhibit.href} key={i}>
              <div className="aspect-[7/5]">
                <img
                  src={exhibit.imgSrc}
                  alt={exhibit.imgAltText}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              {/* <p className="pt-4 text-2xl">Exhibition</p> */}
              <h2 className="sm:text-2xl text-xl pt-4">{exhibit.name}</h2>
              <p className="text-lg pt-1">
                {" "}
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
                Graham Residence, {exhibit.date}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
