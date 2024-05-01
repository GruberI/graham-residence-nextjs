import { Suspense } from "react";
import Header from "@/components/Exhibition/DavidMarcel/Header";
import HeaderImage from "@/components/Exhibition/DavidMarcel/HeaderImage";
import Banner from "@/components/Exhibition/Banner";
import Quote from "@/components/Exhibition/Quote";
import SecondQuote from "@/components/Exhibition/DavidMarcel/SecondQuote";
import TwoImageGrid from "@/components/Exhibition/TwoImageGrid";
import SixImageGrid from "@/components/Exhibition/SixImageGrid";
import FourImageGrid from "@/components/Exhibition/DavidMarcel/FourImageGrid";
import { getCollectionProducts } from "@/lib/shopify";

const twoImgProducts = [
  {
    href: "/product/freefall-by-thai-mainhard",
    imgSrc:
      "https://ipfs.filebase.io/ipfs/QmQ7R22qBmqQNYBW4RN1kGMnefZ8TnnsX1KvBKYqwnexBq/RackMultipart20240501-154-somzfy.jpg",
    imgAltText:
      "David and Marcel painting hung in hallway of the graham residence.",
    title: "New Title",
  },
  {
    href: "/product/hands-in-the-air",
    imgSrc:
      "https://ipfs.filebase.io/ipfs/QmZN3H4MJ7ve9onP2aChVe365KSUHFJDeGG9EpuBo9KA8q/RackMultipart20240501-170-1nhak7c.jpg",
    imgAltText: "David and Marcel paintings hung up in livingroom.",
    title: "New Title"
  },
];

const quote = {
  text: `LOREM IPSUM LOREM IPSUM IPSUM LOREM IPSUM IPSUM LOREM IPSUM IPSUM LOREM IPSUM IPSUM LOREM IPSUM IPSUM LOREM IPSUM.`,
  size: "3",
  artist: "David Matthew King",
};

const banner = {
  imgSrc:
    "https://ipfs.filebase.io/ipfs/QmbYUMVCrxRBHhp1CYFks2iScTP177RyT7tciNFuECdZQc/RackMultipart20240501-97-1qxik96.jpg",
  imgAltText:
    "",
  artist: "David Matthew King",
  text: "King unleashes his creative freedom by combining his poetic sense of rhythm and elision with self-imposed constraints. The artist limits his palette to predominantly elementary colors with the deliberate omission of pure black and pure white. This constellation of solid colored, humble components suggests the reduction of art to its basic material elements. The simplicity of the form is played down by a deceptive form of mark making: scraping and scrubbing acrylic paint into raw canvas in repeating forms until they billow or leap from the natural ground. King stages oppositions between clear contours of forms and freshness of the unprimed canvas, that left in the raw material state becomes absolutely necessary in the same way silence is necessary to music, conversation, thought or reflection.",
  href: "/art/david-matthew-king",
};

const bannerTwo = {
    imgSrc:
      "https://ipfs.filebase.io/ipfs/QmZv3MNH2ynMf3u9guCgxgqov8GcfiB3pUXvYp4aZvNjpp",
    imgAltText:
      "",
    artist: "Marcel Rozek",
    text: " Rozek, who now resides in Los Angeles, creates his multilayered compositions by employing a staining technique popularized by the early abstractionists and artists of the Washington Color School. When he begins a painting, he pours a mixture of diluted paint onto an unprimed canvas, allowing the paint to create the organic forms and movement. With this technique, pools of color spread out and blend together before permeating the canvas. When colors mix, they absorb at different rates, resulting in new color palettes and dreamy, spectral shapes. Rozek sees in his art a reflection of himself, with each piece conveying a different meaning. Rozek's message is one that compels the viewer to reflect on their own vision of the world.",
    href: "/art/marcel-rozek",
  };

export default async function Exhibition() {
  const products = await getCollectionProducts({ collection: "Artwork" });
  const productsByTag = products.filter((product) => {
    return product.tags.includes("david-matthew-king");
  });

  if (!products?.length) return null;

  const sixProductSet = productsByTag.slice(0, 6);
  return (
    <div className="bg-white py-1 sm:py-20">
      <Header />
      <Suspense>
        <HeaderImage />
      </Suspense>
      <Quote quote={quote} />
      <FourImageGrid />
      <SecondQuote />
      <SixImageGrid products={sixProductSet} />
      <Banner banner={banner} />
      <Banner banner={bannerTwo} />
    </div>
  );
}
