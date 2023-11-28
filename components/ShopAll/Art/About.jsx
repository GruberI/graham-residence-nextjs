const aboutInfo = [
  {
    handle: "kyle-steed",
    artist: "Kyle Steed",
    imgSrc:
      "https://ipfs.filebase.io/ipfs/QmWiLw6GMHjBmEs137UAgGZkKeZgxo7mzAMhSbnqrK2bxj/QmbVuKk4UdELdq7qnBhUHk4xEkBxAkUDH1Pqh9htv2MFEQ",
    imgAltText: "Kyle Steed painting in living room of the graham residence",
    text: "Kyle Andrew Steed is a self-taught painter, photographer, muralist and typographer. For the first fourteen years of his life he moved across the southern US before his family settled in Nashville, Tennessee. This itinerant childhood where he often sought stability and a sense of home gave way to his singular visual language that draws on a range of influences including meditations, loss, sought utopias, memory, identity as well as longing and understanding of self. Following his graduation from high school he enlisted in the US Air Force where he was assigned to an intelligence outpost in Misawa, Japan. He relocated to Dallas, Texas in 2007. For the next five years he worked in the digital creative space and created over a dozen hand-written font libraries. This time in his life greatly informs his latest series of work which borrows font makings structural guidelines and the human form. Kyle Andrew Steed is a self-taught painter, photographer, muralist and typographer. For the first fourteen years of his life he moved across the southern US before his family settled in Nashville, Tennessee. This itinerant childhood where he often sought stability and a sense of home gave way to his singular visual language that draws on a range of influences including meditations, loss, sought utopias, memory, identity as well as longing and understanding of self.",
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
      "https://ipfs.filebase.io/ipfs/QmedvMhXHkATo8RM28psWPEEsawxE35iTYZckzVmi5cC8n",
    imgAltText: "Yoni Goldberg behind the camera",
    text: "Yoni Goldberg is a Newport Beach based photographer, some say the best that ever lived and finding info about him online is hard",
  },
];

export default function About({ artistName }) {
  return (
    <>
      {aboutInfo.map((about, i) => {
        return about.handle === artistName ? (
          <div
            className="m-auto border-t border-black max-w-7xl"
            id="shopAllAbout"
            key={i}
          >
            <div className="mx-auto px-4 sm:px-6 lg:px-6 mt-20">
              <div className="grid grid-cols-1 items-center gap-x-10 gap-y-16 lg:grid-cols-2">
                <div>
                  <div className="overflow-hidden bg-black-100 aspect-[3/4] h-5/6 w-10/12 m-auto">
                    <img
                      src={about.imgSrc}
                      alt={about.imgAltText}
                      className="object-cover h-full w-full"
                    />
                  </div>
                </div>
                <div>
                  <div className="m-auto space-y-6 w-10/12">
                    <h1 className="text-2xl font-thin underline underline-offset-8">
                      ABOUT THE ARTIST
                    </h1>
                    <p className="tracking-wide leading-7">{about.text}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null;
      })}
    </>
  );
}
