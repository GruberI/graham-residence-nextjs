const aboutInfo = [
  {
    handle: "kyle-steed",
    artist: "Kyle Steed",
    imgSrc:
      "https://ipfs.filebase.io/ipfs/QmQTWf7mwwEodd5RUH2ShWPtbNqqJDr5DwXbwPJgv33Qhs",
    imgAltText: "Kyle Steed painting in living room of the graham residence",
    text: "Kyle Andrew Steed is a self-taught painter, photographer, muralist and typographer. For the first fourteen years of his life he moved across the southern US before his family settled in Nashville, Tennessee. This itinerant childhood where he often sought stability and a sense of home gave way to his singular visual language that draws on a range of influences including meditations, loss, sought utopias, memory, identity as well as longing and understanding of self. Following his graduation from high school he enlisted in the US Air Force where he was assigned to an intelligence outpost in Misawa, Japan. He relocated to Dallas, Texas in 2007. For the next five years he worked in the digital creative space and created over a dozen hand-written font libraries. This time in his life greatly informs his latest series of work which borrows font makings structural guidelines and the human form.",
  },
  {
    handle: "thai-mainhard",
    artist: "Thai Mainhard",
    imgSrc:
      "https://ipfs.filebase.io/ipfs/QmWsdYRhborxuwVwuZh9aBdVYBfj4REw9s6skbxbR241g2/QmPTsikynbqneuVguJtRKhqDyy1T4McPGUVZP8S7uimsqH",
    imgAltText: "Thai Mainhard sitting on stool surrounded by her paintings",
    text: "Brazilian born painter Thai Mainhard's practice harnesses her own raw and immediate need to create. Each abstract painting combines expressive mark making with dense blocks of color exploring the opposing forces that make up our lives. Mainhard encounters human nature, exploring happiness, frustration, surprise, connection, spirituality, and overall thinking processing. Each of her works is emotional; it is a lush expression of her inner jungle. Going through a deep internal process, the artist creates artwork that represents human nature’s fragility and opposes it to the robustness of emotions and feelings.",
  },
  {
    handle: "yoni-goldberg",
    artist: "Yoni Goldberg",
    imgSrc:
      "https://ipfs.filebase.io/ipfs/QmedvMhXHkATo8RM28psWPEEsawxE35iTYZckzVmi5cC8n",
    imgAltText: "Yoni Goldberg behind the camera",
    text: "Yoni Goldberg is a Los Angeles based Photographer and Director. He has been shooting commercially for the past 14 years whilst also pursuing his artistic practice. He began his journey in New York City after graduating NYU with a degree in psychology and chemistry. After a few years of honing his skills under the tutelage of some of the industry’s top photographers, he moved to LA and began shooting. His work is often inspired by nature and he finds great comfort living in close proximity to the ocean.",
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
            <div className="mx-auto px-4 sm:px-6 lg:px-6 mt-16 sm:mt-20">
              <div className="grid grid-cols-1 sm:gap-x-10 sm:gap-y-16 lg:grid-cols-2 m-auto">
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
                  <div className="m-auto space-y-6 sm:w-10/12 text-center sm:text-left">
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
