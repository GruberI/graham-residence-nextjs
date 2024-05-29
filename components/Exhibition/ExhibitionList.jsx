import Link from "next/link";

const artistExhibitions = [
  {
    artist: "David Mathew King & Marcel Rozek",
    name: "CONVERGENCE",
    imgSrc:
      "https://ipfs.filebase.io/ipfs/QmR4MdakCJMN97PTbavV7Lj3NCoY2sDAF5PEPmDPtgPwE9/RackMultipart20240501-85-1ky2nl0.jpg",
    imgAltText: "David Mathew King & Marcel Rozek at the graham residence",
    href: "gallery/convergence",
    date: "May 2024 - July 2024",
  },
  {
    artist: "Kyle Steed",
    name: "A QUIET NOISE",
    imgSrc:
      "https://ipfs.filebase.io/ipfs/QmZUP4GfbWpnwySsEh2jJ1KdG96dPEK7fSnoGRK7AeCaZc/QmdFrNgmbK3FwH8DTjzPQJEXfk8CHXBeb72HSe37ArVRgW",
    imgAltText:
      "Painting by Kyle Steed hung in living room of Graham Residence",
    href: "/gallery/kyle-steed",
    date: "Oct 2023 - Jan 2024",
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

const recentExhibits = artistExhibitions.slice(0, 2);

export default function ExhibitionList() {
  return (
    <div className="sm:mt-10 border-t border-black pt-10 max-w-7xl m-auto pb-20 mt-10 sm:mt-0">
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
                <p className="text-lg pt-1">{exhibit.artist}</p>
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
