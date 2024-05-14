const artistExhibitions = [
  {
    artist: "Nicole Taylor DeWitt",
    name: "Bend",
    imgSrc:
      "https://ipfs.filebase.io/ipfs/QmeF2jropWjRdpn3zR2ePGjuPAhng21z5SPC78HoQm5xV2",
    imgAltText: "Nicole Taylor DeWitt",
    date: "August 2024 - October 2024",
  },
  {
    artist: "Alex Maceda",
    name: "Savoring",
    imgSrc:
      "https://ipfs.filebase.io/ipfs/Qmc1vcmrBJDzuvArAhqDuiE9SLygtXuHQYsiR6nCUt1Zju",
    imgAltText: "Alex Maceda",
    date: "November 2024 - January 2025",
  },
];

export default function UpcomingExhibitionList() {
  return (
    <div className="sm:mt-10 border-t border-b border-black pt-10 sm:pt-16 m-auto mx-10 pb-10 sm:pb-20">
      <div className="mb-10">
        <h1 className="sm:text-3xl text-2xl text-center sm:text-left">
          Upcoming Exhibitions
        </h1>
      </div>
      <div className="grid grid-cols-1 items-center gap-x-10 gap-y-16 sm:grid-cols-2 px-4 sm:px-2 md:px-0">
        {artistExhibitions.map((exhibit, i) => {
          return (
            <div className="flex flex-col" key={i}>
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
          );
        })}
      </div>
    </div>
  );
}
