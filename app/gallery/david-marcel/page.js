import Header from "@/components/Exhibition/DavidMarcel/Header";
// import HeaderImage from "@/components/Exhibition/DavidMarcel/HeaderImage";
import Banner from "@/components/Exhibition/Banner";
import Quote from "@/components/Exhibition/Quote";
import SecondQuote from "@/components/Exhibition/DavidMarcel/SecondQuote";
// import TwoImageGrid from "@/components/Exhibition/TwoImageGrid";
import SixImageGrid from "@/components/Exhibition/SixImageGrid";
// import FourImageGrid from "@/components/Exhibition/DavidMarcel/FourImageGrid";
import ThreeImageGrid from "@/components/Exhibition/DavidMarcel/ThreeImageGrid";
import { getCollectionProducts } from "@/lib/shopify";
import SectionFirst from "@/components/Exhibition/DavidMarcel/SectionFirst";
import TwoImageSection from "@/components/Exhibition/DavidMarcel/TwoImageSection";
import ThreeImageSection from "@/components/Exhibition/DavidMarcel/ThreeImageSection";

const quote = {
  text: `Sometimes the thing that’s being communicated is too dark for words or symbols. The paintings are sometimes just a signal that the light inside is still on.`,
  size: "3",
  artist: "David Matthew King",
};

const banner = {
  imgSrc:
    "https://ipfs.filebase.io/ipfs/QmbYUMVCrxRBHhp1CYFks2iScTP177RyT7tciNFuECdZQc/RackMultipart20240501-97-1qxik96.jpg",
  imgAltText: "",
  artist: "David Matthew King",
  text: "King unleashes his creative freedom by combining his poetic sense of rhythm and elision with self-imposed constraints. The artist limits his palette to predominantly elementary colors with the deliberate omission of pure black and pure white. This constellation of solid colored, humble components suggests the reduction of art to its basic material elements. The simplicity of the form is played down by a deceptive form of mark making: scraping and scrubbing acrylic paint into raw canvas in repeating forms until they billow or leap from the natural ground. King stages oppositions between clear contours of forms and freshness of the unprimed canvas, that left in the raw material state becomes absolutely necessary in the same way silence is necessary to music, conversation, thought or reflection.",
  href: "/art/david-matthew-king",
};

const bannerTwo = {
  imgSrc:
    "https://ipfs.filebase.io/ipfs/QmZv3MNH2ynMf3u9guCgxgqov8GcfiB3pUXvYp4aZvNjpp",
  imgAltText: "",
  artist: "Marcel Rozek",
  text: " Rozek, who now resides in Los Angeles, creates his multilayered compositions by employing a staining technique popularized by the early abstractionists and artists of the Washington Color School. When he begins a painting, he pours a mixture of diluted paint onto an unprimed canvas, allowing the paint to create the organic forms and movement. With this technique, pools of color spread out and blend together before permeating the canvas. When colors mix, they absorb at different rates, resulting in new color palettes and dreamy, spectral shapes. Rozek sees in his art a reflection of himself, with each piece conveying a different meaning. Rozek's message is one that compels the viewer to reflect on their own vision of the world.",
  href: "/art/marcel-rozek",
};

const twoImageSectionData = [
  {
    artist: "David Matthew King",
    title: "Untitled (12.3.22)",
    href: "/product/untitled-12-3-22",
    size: "60 x 52 in.",
    type: "Acrylic",
    price: "6,200",
    imgFirst: {
      imgSrc:
        "https://ipfs.filebase.io/ipfs/QmRTsK696AZY88Uxg4qwjv228kya4bR6FY9iSpGVDadJZf",
    },
    imgSecond: {
      imgSrc:
        "https://ipfs.filebase.io/ipfs/QmWZ2yxNFNJCFSVc3B1Wm5n1ZwifSfiCLB5kXJRs3KXY1B",
    },
  },
  {
    artist: "Marcel Rozek",
    title: "Blue Shield",
    href: "/product/blue-shield",
    size: "36 x 24 in.",
    type: "Oil",
    price: "4,800",
    imgFirst: {
      imgSrc:
        "https://ipfs.filebase.io/ipfs/QmQRmBxujoauPovt4c7LP2fvGPjzr8FPj1tkxWhDvAPy6m",
    },
    imgSecond: {
      imgSrc:
        "https://ipfs.filebase.io/ipfs/QmZwYjs5U8k1aQbN767N2ga8uVFGEWsuaYvmvHCANB5T5K",
    },
  },
];

const threeImageSectionData = [
  {
    artist: "David Matthew King",
    title: "Untitled (10.9.22)",
    href: "/product/untitled-2",
    size: "60 x 52 in.",
    type: "Acrylic",
    price: "6,200",
    imgFirst: {
      imgSrc:
        "https://ipfs.filebase.io/ipfs/QmaMPzHRD6eNLbUCMNcHEnDjK7YuQUwTgco1AyWARVGjHA",
    },
    imgSecond: {
      imgSrc:
        "https://ipfs.filebase.io/ipfs/Qmcyp5USTorxJ9DmneRo6oVQ4v8jnBNnfL5pW4CF3uqHGN",
    },
    imgThird: {
      imgSrc:
        "https://ipfs.filebase.io/ipfs/Qmae4rg7X3oZwTVrwQrmCcmfkV54TvpUP11WM1TdWiNtEo",
    },
  },
  {
    artist: "Marcel Rozek",
    title: "Cold Grey Over Warm",
    href: "/product/cold-grey-over-warm",
    size: "60 x 52 in.",
    type: "Acrylic",
    price: "6,200",
    imgFirst: {
      imgSrc:
        "https://ipfs.filebase.io/ipfs/QmZRLE1qXk7NxDamYJBiExKMDrabBxbbkKHrVz2S7N4pNK",
    },
    imgSecond: {
      imgSrc:
        "https://ipfs.filebase.io/ipfs/QmPVEHPoqHvCqSaSrz96PWMtBdiHsujxJwgYPzKk7NmTua",
    },
    imgThird: {
      imgSrc:
        "https://ipfs.filebase.io/ipfs/QmRBUiYHVmn3y5owVHHYsLo3nDabuo8s9qJLzHBnhChFcz",
    },
  },
];

export default async function Exhibition() {
  const products = await getCollectionProducts({ collection: "Artwork" });
  const productsByTag = products.filter((product) => {
    return product.tags.includes("david-matthew-king");
  });

  const productsByTagMarcel = products.filter((product) => {
    return product.tags.includes("marcel-rozek");
  });

  if (!products?.length) return null;

  const sixProductSet = productsByTag.slice(0, 3);

  const sixProductMarcel = productsByTagMarcel.slice(0, 3);
  return (
    <div>
      <Header />
      <SectionFirst />
      <ThreeImageGrid />
      <div className="mb-16 sm:mb-0">
        <Quote quote={quote} />
      </div>
      <TwoImageSection imageData={twoImageSectionData[0]} />
      <ThreeImageSection imageData={threeImageSectionData[0]} />
      <SixImageGrid products={sixProductSet} />
      <Banner banner={banner} />
      <TwoImageSection imageData={twoImageSectionData[1]} />
      <ThreeImageSection imageData={threeImageSectionData[1]} />
      <SecondQuote />
      <SixImageGrid products={sixProductMarcel} />
      <Banner banner={bannerTwo} />
    </div>
  );
}
