import Link from "next/link";

const artistExhibitions = [
  {
    artist: "Karolina Maszkiewicz",
    name: "",
    imgSrc:
      "https://siteimagery.nyc3.cdn.digitaloceanspaces.com/Exhibitions/Karolina/IMG_4653.jpg",
    imgAltText: "TBA",
    date: "Winter 2025",
    link: "/exhibitions",
  },
  {
    artist: "TBA",
    name: "",
    imgSrc:
      "https://siteimagery.nyc3.cdn.digitaloceanspaces.com/Exhibitions/tgr.jpg",
    imgAltText: "TBA",
    date: "Spring 2025",
    link: "",
  },
];

export default function UpcomingExhibitionList() {
  return (
    <div className="sm:mt-10 border-t border-b border-black pt-10 m-auto mx-10 pb-16">
      <div className="mb-10">
        <h1 className="sm:text-4xl text-3xl text-center sm:text-left">
          Upcoming Exhibitions
        </h1>
      </div>
      <div className="grid grid-cols-1 items-start gap-x-10 gap-y-16 sm:grid-cols-2 px-4 sm:px-2 md:px-0">
        {artistExhibitions.map((exhibit, i) => {
          return (
            <div className="flex flex-col" key={i}>
              <div className="aspect-[7/5] overflow-hidden">
                <Link href={exhibit.link}>
                  <img
                    src={exhibit.imgSrc}
                    alt={exhibit.imgAltText}
                    className="h-full w-full object-cover object-center"
                  />
                </Link>
              </div>
              <Link href={exhibit.link}>
                <h2 className="sm:text-2xl text-xl pt-4">{exhibit.name}</h2>
                <p className="text-lg pt-1 hover:text-zinc-500">{exhibit.artist}</p>
              </Link>
              <p className="tracking-tight font-thin text-lg">{exhibit.date}</p>
            </div>
          );
        })}
      </div>
      <div id="past-exhibitions"></div>
    </div>
  );
}
