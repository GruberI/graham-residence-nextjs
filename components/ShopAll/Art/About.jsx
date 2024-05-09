"use client";
import Link from "next/link";

const aboutInfo = [
  {
    handle: "kyle-steed",
    artist: "Kyle Steed",
    href: '/gallery/kyle-steed',
    imgSrc:
      "https://ipfs.filebase.io/ipfs/QmQTWf7mwwEodd5RUH2ShWPtbNqqJDr5DwXbwPJgv33Qhs",
    imgAltText: "Kyle Steed painting in living room of the graham residence",
    text: "Kyle Andrew Steed is a self-taught painter, photographer, muralist and typographer. For the first fourteen years of his life he moved across the southern US before his family settled in Nashville, Tennessee. This itinerant childhood where he often sought stability and a sense of home gave way to his singular visual language that draws on a range of influences including meditations, loss, sought utopias, memory, identity as well as longing and understanding of self. Following his graduation from high school he enlisted in the US Air Force where he was assigned to an intelligence outpost in Misawa, Japan. He relocated to Dallas, Texas in 2007. For the next five years he worked in the digital creative space and created over a dozen hand-written font libraries. This time in his life greatly informs his latest series of work which borrows font makings structural guidelines and the human form.",
  },
  {
    handle: "thai-mainhard",
    artist: "Thai Mainhard",
    href: '/gallery/thai-mainhard',
    imgSrc:
      "https://ipfs.filebase.io/ipfs/QmWsdYRhborxuwVwuZh9aBdVYBfj4REw9s6skbxbR241g2/QmPTsikynbqneuVguJtRKhqDyy1T4McPGUVZP8S7uimsqH",
    imgAltText: "Thai Mainhard sitting on stool surrounded by her paintings",
    text: "Brazilian born painter Thai Mainhard's practice harnesses her own raw and immediate need to create. Each abstract painting combines expressive mark making with dense blocks of color exploring the opposing forces that make up our lives. Mainhard encounters human nature, exploring happiness, frustration, surprise, connection, spirituality, and overall thinking processing. Each of her works is emotional; it is a lush expression of her inner jungle. Going through a deep internal process, the artist creates artwork that represents human nature’s fragility and opposes it to the robustness of emotions and feelings.",
  },
  {
    handle: "yoni-goldberg",
    artist: "Yoni Goldberg",
    href: '/art/yoni-goldberg',
    imgSrc:
      "https://ipfs.filebase.io/ipfs/QmedvMhXHkATo8RM28psWPEEsawxE35iTYZckzVmi5cC8n",
    imgAltText: "Yoni Goldberg behind the camera",
    text: "Yoni Goldberg is a Los Angeles based Photographer and Director. He has been shooting commercially for the past 14 years whilst also pursuing his artistic practice. He began his journey in New York City after graduating NYU with a degree in psychology and chemistry. After a few years of honing his skills under the tutelage of some of the industry’s top photographers, he moved to LA and began shooting. His work is often inspired by nature and he finds great comfort living in close proximity to the ocean.",
  },
  {
    handle: "david-matthew-king",
    artist: "David Matthew King",
    href: '/gallery/david-marcel',
    imgSrc:
      "https://ipfs.filebase.io/ipfs/QmbYUMVCrxRBHhp1CYFks2iScTP177RyT7tciNFuECdZQc/RackMultipart20240501-97-1qxik96.jpg",
    imgAltText: "David Matthew King",
    text: "David Matthew King was born in San Pedro, California. After moving to New York City in 2004 to pursue a career in songwriting, he began studying painting and drawing at the City University of New York where he earned a Bachelor’s Degree in English Literature with a minor in Studio Art. After teaching English for 8 years King resumed study in painting, drawing, collage, color theory and abstraction technique at the Art Students League of New York. He has had several solo and two-person exhibitions across the US and Europe.  King unleashes his creative freedom by combining his poetic sense of rhythm and elision with self-imposed constraints. The artist limits his palette to predominantly elementary colors with the deliberate omission of black and white. This constellation of solid colored, humble components suggests the reduction of art to its basic material elements. King stages oppositions between clear contours of forms and freshness of the unprimed canvas, that left in the raw material state becomes absolutely necessary in the same way silence is necessary to music, conversation, thought or reflection.",
  },
  ,
  {
    handle: "marcel-rozek",
    artist: "Marcel Rozek",
    href: '/gallery/david-marcel',
    imgSrc:
      "https://ipfs.filebase.io/ipfs/QmZv3MNH2ynMf3u9guCgxgqov8GcfiB3pUXvYp4aZvNjpp",
    imgAltText: "Marcel Rozek",
    text: "Marcel Rozek (b. 1992, Akron, Ohio ) Rozek, who now resides in Los Angeles, creates his multilayered compositions by employing a staining technique popularized by the early abstractionists and artists of the Washington Color School. When he begins a painting, he pours a mixture of diluted paint onto an unprimed canvas, allowing the paint to create the organic forms and movement. With this technique, pools of color spread out and blend together before permeating the canvas. When colors mix, they absorb at different rates, resulting in new color palettes and dreamy, spectral shapes. Rozek sees in his art a reflection of himself, with each piece conveying a different meaning. Rozek's message is one that compels the viewer to reflect on their own vision of the world. Rozek graduated from Ohio's Myers School of Art in 2017, earning a bachelor's degree in studio art, with a minor in drawing and painting. Since finishing his undergraduate degree, Rozek's artwork has been displayed in Istanbul, London, and Amsterdam.",
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
                    <div className="pt-4 pb-4 text-center">
                      <Link
                        href={about.href}
                        className="hover:text-neutral-600 text-sm hover:underline hover:underline-offset-8"
                      >
                        SEE THE EXHIBITION
                      </Link>
                    </div>
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
