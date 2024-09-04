"use client";
import Link from 'next/link';

export const bannerInfo = [
  {
    handle: "kyle-steed",
    artist: "Kyle Steed",
    imgSrc:
      "https://ipfs.filebase.io/ipfs/QmWiLw6GMHjBmEs137UAgGZkKeZgxo7mzAMhSbnqrK2bxj/QmbVuKk4UdELdq7qnBhUHk4xEkBxAkUDH1Pqh9htv2MFEQ",
    imgAltText: "Kyle Steed painting in the Graham Residence living room",
    text: "Kyle Steed is a self-taught painter, photographer, muralist and typographer. His work lies in the exploration of the relationship between the human body and the landscapes we inhabit.",
    type: "art",
  },
  {
    handle: "thai-mainhard",
    artist: "Thai Mainhard",
    imgSrc:
      "https://siteimagery.nyc3.cdn.digitaloceanspaces.com/Exhibitions/ThaiDesertSpring/005.jpg",
    imgAltText: "Thai Mainhard sitting on stool surrounded by her paintings",
    text: "Thai Mainhard is a Brazilian born artist based in Los Angeles. In her works she encounters human nature, exploring happiness, frustration, surprise, connection, spirituality, and overall thinking processing.",
    type: "art",
  },
  {
    handle: "yoni-goldberg",
    artist: "Yoni Goldberg",
    imgSrc:
      "https://ipfs.filebase.io/ipfs/QmcHQJjQw1tbvCbhPkq8SXpfzhJ5WSLpk84kWihd51WisR/QmTHRhpRttN8oEqUAGkSUc6fDRQLnnHoxKWgQ2yvzURdV5",
    imgAltText: "Yoni Goldberg behind the camera",
    text: "Yoni Goldberg is a Los Angeles based photographer and co-owner of The Graham Residence and Graham Collective.",
    type: "art",
  },
  {
    handle: "atelier-saucier",
    artist: "Atelier Saucier",
    imgSrc:
      "https://ipfs.filebase.io/ipfs/QmVnULTTRqEmx2kMXkpkjHG69vKTVegjhXpefevNctn1sx",
    imgAltText: "Kyle Steed painting in the Graham Residence living room",
    text: "Based in Los Angeles, ATELIER SAUCIER is a modern tablescape design house for sustainable + customizable linens. With backgrounds in the food + fashion industries, founders (and best friends) Nikki Reed and Staci Inspektor set out to combine their varied experiences and shared passion for hosting; and introduce a fresh, elevated perspective to all things table linens. ATELIER SAUCIER is where entertaining, dining and design intersect.",
    type: "home",
  },
  {
    handle: "sophie-lou-jacobsen",
    artist: "Sophie Lou Jacobsen",
    imgSrc:
      "https://ipfs.filebase.io/ipfs/QmatPDsurpdYLRTsgUyLHDUvLE5onEfSFgqc6Z4cRjErwF/QmQ4uvkvcyadr6FN5sRWAHicFvN2QdXU8tjzXtxFBjGqSr",
    imgAltText: "Dinner table set up with glassware by Sophie Lou Jacobsen",
    text: "Sophie Lou Jacobsen is a French-American designer currently based in New York City. She established her studio in 2019, with an initial focus on objects of everyday use, mostly using glass as a medium and exploring the interaction between object and user. Her work stems from the idea that objects have an innate power to enhance their user's mood through form and function. She focuses on simple objects and rituals, to see how she can alter these in ways that are surprising, delightful, and elevate the user experience. She believes that the objects which we surround ourselves with can and should be imbued with a certain poetry, creating a relationship between humans and objects built on mutual respect.",
    type: "home",
  },
  {
    handle: "loll-designs",
    artist: "Loll Designs",
    imgSrc:
      "https://ipfs.filebase.io/ipfs/QmSi2SaJWbxooVAaHFzPks62jPcFS7KFPPd9SHFsrPfAxp/QmfTzU3PKJ98Ghrfm4C2JwYnscaijQuErCemtiCCP9ybZz",
    imgAltText: "Red Loll Design chair with matching outdoor side table",
    text: "Loll products are a staple of The Graham Residence. They design and manufacture durable, all-weather, outdoor furniture with great silhouttes utilizing recycled plastics. Designed and manufactured in the US.",
    type: "home",
  },
  {
    handle: "david-matthew-king",
    artist: "David Matthew King",
    imgSrc:
      "https://ipfs.filebase.io/ipfs/QmSAUVmRBkzishf8LjH4mwSbWaD2VhgMT3Zd7yQo3zfDoD",
    imgAltText: "David Matthew King",
    text: "David Mathew King unleashes his creative freedom by combining his poetic sense of rhythm and elision with self-imposed constraints.",
    type: "art",
  },
  {
    handle: "marcel-rozek",
    artist: "Marcel Rozek",
    imgSrc:
      "https://ipfs.filebase.io/ipfs/QmTGSWvQgJ93LmDcyvUCWf79tUjb4YeatUSP9vMJPSz7xE",
    imgAltText: "Marcel Rozek",
    text: "Marcel Rozek creates his multilayered compositions by employing a staining technique popularized by the early abstractionists and artists of the Washington Color School.",
    type: "art",
  },
];

const handleClickScroll = (id) => {
  const element = document.getElementById(id);
  if (element) {
    // Will scroll smoothly to the top of the next section
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Banner({ title, type }) {
  return (
    <div className={`mb-20 ${title === undefined ? "hidden" : "block"}`}>
      {bannerInfo.map((banner, i) => {
        return banner.handle === title ? (
          <div className="m-auto border-t border-black max-w-7xl" key={i}>
            <div className="mx-auto px-4 sm:px-6 lg:px-6 my-5 sm:my-6 pt-6 sm:pb-2">
              <div className="grid grid-cols-1 items-center gap-x-10 gap-y-4 lg:grid-cols-2">
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
                  <div className="m-auto space-y-2 sm:space-y-2 flex flex-col justify-center items-center w-11/12">
                    <p>{type === "art" ? "MEET" : "WHAT WE LOVE ABOUT"}</p>
                    <h1 className="sm:text-5xl text-4xl sm:font-thin font-semibold">
                      {banner.artist}
                    </h1>

                    <p className="tracking-wide leading-7 text-center">
                      {banner.text}
                    </p>
                    {type === "art" ? (
                      <Link
                        href={`/art/${banner.handle}`}
                        className="text-black hover:text-black-500 flex justify-center pt-4"
                      >
                        <button
                          type="submit"
                          className="max-w-md text-base font-light text-black underline underline-offset-8 hover:text-neutral-500 sm:mb-0 mb-6"
                        >
                          {`MORE BY ${banner.artist.toUpperCase()}`}
                        </button>
                      </Link>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
            {/* Divider line added below the content */}
            <div className="border-b border-black mt-10"></div>
          </div>
        ) : null;
      })}
    </div>
  );
}
