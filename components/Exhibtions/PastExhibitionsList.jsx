import Link from "next/link";
const artistExhibitions = [
  {
    artist: "Kyle Steed",
    name: "A QUIET NOISE",
    imgSrc:
      "https://siteimagery.nyc3.cdn.digitaloceanspaces.com/Gallery/005.jpg",
    imgAltText:
      "Painting by Kyle Steed hung in living room of Graham Residence",
    href: "/gallery/kyle-steed",
    link: "/art/kyle-steed",
    date: "October 2023 - January 2024",
  },
  {
    artist: "Thai Mainhard",
    name: "DESERT SPRING",
    imgSrc:
      "https://siteimagery.nyc3.cdn.digitaloceanspaces.com/Exhibitions/ThaiDesertSpring/004.jpg",
    imgAltText:
      "Various paintings by Thai resting on porch at the graham residence",
    href: "/gallery/thai-mainhard",
    link: "/art/thai-mainhard",
    date: "June 2023 - October 2023",
  },
];

export default function PastExhibitionList() {
  return (
    <div className="pt-10 m-auto pb-10 mx-10">
      <div className="mb-10">
        <h1 className="sm:text-4xl text-3xl text-center sm:text-left">
          Past Exhibitions
        </h1>
      </div>
      <div className="grid grid-cols-1 items-center gap-x-10 gap-y-16 sm:grid-cols-2 px-4 sm:px-2 md:px-0">
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
              <Link href={exhibit.link}>
                <p className="text-lg pt-1 hover:text-zinc-500">{exhibit.artist}</p>
              </Link>
              <p className="tracking-tight font-thin text-lg">
                {" "}
                Graham Residence, {exhibit.date}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
