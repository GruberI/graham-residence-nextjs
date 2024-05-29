const artistExhibitions = [
  {
    artist: "Nicole Taylor DeWitt",
    name: "BEND",
    imgSrc:
      "https://ipfs.filebase.io/ipfs/QmeF2jropWjRdpn3zR2ePGjuPAhng21z5SPC78HoQm5xV2",
    imgAltText: "Nicole Taylor DeWitt",
    date: "August 15th - September 12th",
  },
  {
    artist: "Alex Maceda",
    name: "SAVORING",
    imgSrc:
      "https://ipfs.filebase.io/ipfs/Qmeau1sVkRRnTb5zUMnWzbCbRtdf6UqAvYfAJ26aYzeE3k",
    imgAltText: "Alex Maceda",
    date: "September 19th - November 5th",
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
              <h2 className="sm:text-2xl text-xl pt-4">{exhibit.name}</h2>
              <p className="text-lg pt-1">{exhibit.artist}</p>
              <p className="tracking-tight font-thin text-lg">
                {" "}
                Graham Residence, {exhibit.date}
              </p>
            </div>
          );
        })}
      </div>
      <div id="past-exhibitions"></div>
    </div>
  );
}
