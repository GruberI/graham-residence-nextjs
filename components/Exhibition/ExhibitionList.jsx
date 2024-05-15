import Link from "next/link";

const artistExhibitions = [
  {
    artist: "David Mathew King & Marcel Rozek",
    name: "Convergence",
    imgSrc:
      "https://ipfs.filebase.io/ipfs/QmR4MdakCJMN97PTbavV7Lj3NCoY2sDAF5PEPmDPtgPwE9/RackMultipart20240501-85-1ky2nl0.jpg",
    imgAltText:
      "David Mathew King & Marcel Rozek at the graham residence",
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

const recentExhibits = artistExhibitions.slice(0, 2);

export default function ExhibitionList() {
  return (
    <div className="sm:mt-10 border-t border-black pt-10 max-w-7xl m-auto pb-20 mt-10 sm:mt-0">
      <div className="mb-10 pl-4 sm:pl-0">
        <h1 className="sm:text-3xl text-2xl pb-2">Exhibitions</h1>
        <a
          href="/exhibitions"
          className="text-[10px] font-thin leading-6 hover:text-neutral-300 underline underline-offset-8"
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
              <p className="pt-4 text-xs">Exhibition</p>
              <h1 className="sm:text-2xl text-lg pt-2">
                {exhibit.name} by {exhibit.artist}
              </h1>
              <p className="pt-1 tracking-tight font-thin text-xs sm:text-base">
                {" "}
                At the Graham Residence, {exhibit.date}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
