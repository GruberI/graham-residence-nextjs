const bannerInfo = [
  {
    handle: "kyle-steed",
    artist: "Kyle Steed",
    imgSrc:
      "https://ipfs.filebase.io/ipfs/QmWiLw6GMHjBmEs137UAgGZkKeZgxo7mzAMhSbnqrK2bxj/QmbVuKk4UdELdq7qnBhUHk4xEkBxAkUDH1Pqh9htv2MFEQ",
    imgAltText: "Kyle Steed painting in the Graham Residence living room",
    text: "Kyle Steed is a self-taught painter, photographer, muralist and typographer. His work lies in the exploration of the relationship between the human body and the landscapes we inhabit.",
  },
  {
    handle: "thai-mainhard",
    artist: "Thai Mainhard",
    imgSrc:
      "https://ipfs.filebase.io/ipfs/QmdajQkhoMRCbL1kXwsphD6QYhcEGYpdqD9wvZwwmuQpay",
    imgAltText: "Thai Mainhard sitting on stool surrounded by her paintings",
    text: "Thai Mainhard is a Brazilian born artist based in Los Angeles. In her works she encounters human nature, exploring happiness, frustration, surprise, connection, spirituality, and overall thinking processing.",
  },
  {
    handle: "yoni-goldberg",
    artist: "Yoni Goldberg",
    imgSrc:
      "https://ipfs.filebase.io/ipfs/QmcHQJjQw1tbvCbhPkq8SXpfzhJ5WSLpk84kWihd51WisR/QmTHRhpRttN8oEqUAGkSUc6fDRQLnnHoxKWgQ2yvzURdV5",
    imgAltText: "Yoni Goldberg behind the camera",
    text: "Yoni Goldberg is a Newport Beach based photographer, some say the best that ever lived and finding info about him online is hard.",
  },
];

const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

export default function Banner({ artistName }) {

  return (
    <div className="m-auto border-t border-b border-black max-w-7xl">
      <div className="mx-auto px-4 sm:px-6 lg:px-6 my-16">
        {bannerInfo.map((banner, i) => {
          return banner.handle === artistName ? (
            <div className="grid grid-cols-1 items-center gap-x-10 gap-y-16 lg:grid-cols-2" key={i}>
              <div>
                <div className="overflow-hidden bg-black-100 aspect-[4/3]">
                  <img
                    src={banner.imgSrc}
                    alt={banner.imgAltText}
                    className="object-cover h-full w-full"
                  />
                </div>
              </div>
              <div>
                <div className="m-auto space-y-6 flex flex-col justify-center items-center w-10/12">
                  <p>MEET</p>
                  <h1 className="sm:text-5xl text-4xl sm:font-thin font-semibold">
                    {banner.artist}
                  </h1>

                  <p className="tracking-wide leading-7">{banner.text}</p>
                  <a
                    onClick={() => handleClickScroll('shopAllAbout')}
                    className="text-black hover:text-black-500 flex justify-center pt-4"
                  >
                    <button
                      type="submit"
                      className="max-w-md text-base font-light text-black underline underline-offset-8 hover:text-neutral-500 sm:mb-0 mb-12"
                    >
                      LEARN MORE
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
}
