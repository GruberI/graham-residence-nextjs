import Header from "@/components/Exhibition/DavidMarcel/Header";
import Quote from "@/components/Exhibition/Quote";
import SecondQuote from "@/components/Exhibition/DavidMarcel/SecondQuote";
import ThreeImageGrid from "@/components/Exhibition/DavidMarcel/ThreeImageGrid";
import SectionFirst from "@/components/Exhibition/DavidMarcel/SectionFirst";
import TwoImageSection from "@/components/Exhibition/DavidMarcel/TwoImageSection";
import ThreeImageSection from "@/components/Exhibition/DavidMarcel/ThreeImageSection";
import TwoImageSectionLandscape from "@/components/Exhibition/DavidMarcel/TwoImageSectionLandscape";
import TwoImageSectionSquare from "@/components/Exhibition/DavidMarcel/TwoImageSectionSquare";
import OneImage from "@/components/Exhibition/DavidMarcel/OneImage";
import ArtistBio from "@/components/Exhibition/DavidMarcel/ArtistBio";

const quote = {
  text: `I am always trying to make the most with the least. My function is to present things in a new way and to take something that you might be familiar with and make it disorienting or slightly less familiar.`,
  size: "3",
  artist: "David Matthew King",
};

const twoImageSectionData = [
  {
    artist: "David Matthew King",
    title: "Untitled (12.3.22)",
    href: "/product/untitled-12-3-22",
    size: "60 x 52 in.",
    type: "Acrylic",
    price: "$6,200",
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
    price: "$4,800",
    imgFirst: {
      imgSrc:
        "https://ipfs.filebase.io/ipfs/QmYRiF3HbU2TR7TwHxhkZJ866twWnf5qMwxF3ubkdbx4Jt",
    },
    imgSecond: {
      imgSrc:
        "https://ipfs.filebase.io/ipfs/QmZwYjs5U8k1aQbN767N2ga8uVFGEWsuaYvmvHCANB5T5K",
    },
  },
  {
    artist: "David Matthew King",
    title: "Untitled 10.11.22",
    href: "/product/untitled-10-11-22",
    size: "40 x 30 in.",
    type: "Acrylic",
    price: "$3,800",
    imgFirst: {
      imgSrc:
        "https://ipfs.filebase.io/ipfs/QmXCcipQvR2hwmpk6h95YZsL4K2Jyw3ecKoM9YFcTTHkkm",
    },
    imgSecond: {
      imgSrc:
        "https://ipfs.filebase.io/ipfs/QmXyHncUksnDL916JNoBhq8NmdrAZefKhHNMdYQ5KcAPBr",
    },
  },
  {
    artist: "Marcel Rozek",
    title: "Red Entry",
    href: "/product/red-entry",
    size: "42 x 42 in.",
    type: "Oil",
    price: "Sold",
    imgFirst: {
      imgSrc:
        "https://ipfs.filebase.io/ipfs/QmZLEgNQRLzQygV2v12CEFdJcJWrn4JKyv6H1ykaoFsg2t",
    },
    imgSecond: {
      imgSrc:
        "https://ipfs.filebase.io/ipfs/QmSz1LHaCdcKcAaCHa1ppvFXpLMoMLPqRuVBEAJsyRqDgc",
    },
  },
  {
    artist: "Marcel Rozek",
    title: "Winnow",
    href: "/product/winnow",
    size: "72 x 60 in.",
    type: "Oil",
    price: "$10,600",
    imgFirst: {
      imgSrc:
        "https://ipfs.filebase.io/ipfs/QmZLEgNQRLzQygV2v12CEFdJcJWrn4JKyv6H1ykaoFsg2t",
    },
    imgSecond: {
      imgSrc:
        "https://ipfs.filebase.io/ipfs/QmSz1LHaCdcKcAaCHa1ppvFXpLMoMLPqRuVBEAJsyRqDgc",
    },
  },
  {
    artist: "Marcel Rozek",
    title: "Comet",
    href: "/product/coment",
    size: "72 x 60 in.",
    type: "Oil",
    price: "$10,600",
    imgFirst: {
      imgSrc:
        "https://ipfs.filebase.io/ipfs/QmZLEgNQRLzQygV2v12CEFdJcJWrn4JKyv6H1ykaoFsg2t",
    },
    imgSecond: {
      imgSrc:
        "https://ipfs.filebase.io/ipfs/QmSz1LHaCdcKcAaCHa1ppvFXpLMoMLPqRuVBEAJsyRqDgc",
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
    price: "$6,200",
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
    price: "$6,200",
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
  {
    artist: "Marcel Rozek",
    title: "Thresher #10",
    href: "/product/thresher-10",
    size: "64 x 78 in.",
    type: "Acrylic",
    price: "$11,400",
    imgFirst: {
      imgSrc:
        "https://ipfs.filebase.io/ipfs/QmWkLpHJo3QXXwF8d3mVdd9NMMfkS5v2vAUEMnE5u8P3VA",
    },
    imgSecond: {
      imgSrc:
        "https://ipfs.filebase.io/ipfs/QmNuETrsfU5Qtihn85foFNnJ9cokAvak5WSvVJUdTRXCuR",
    },
    imgThird: {
      imgSrc:
        "https://ipfs.filebase.io/ipfs/Qmcjf1EbzsQNPejDxixC9wKQE2sviwixbqpCjPjN36qo4p",
    },
  },
];

const landscapeImgData = [
  {
    artist: "David Matthew King",
    title: "Untitled (8.8.23)",
    href: "/product/untitled-8-8-23",
    size: "30 x 40 in.",
    type: "Acrylic",
    price: "$6,800",
    imgSrc:
      "https://ipfs.filebase.io/ipfs/QmbgX83DNvMYtEsGiVNUtAgau4HzmDgvMdfdvF4ZGmUZ3M",
  },
  {
    artist: "David Matthew King",
    title: "Untitled (8.17.23)",
    href: "/products/untitled-east-bedroom",
    size: "30 x 40 in.",
    type: "Acrylic",
    price: "$6,800",
    imgSrc:
      "https://ipfs.filebase.io/ipfs/QmWhSTrgZbcdMNbp2zvdjKJkEriYjpxs3VkL9t59zfWRwo",
  },
];

const marcelBio = {
  imgSrc:
    "https://ipfs.filebase.io/ipfs/QmZv3MNH2ynMf3u9guCgxgqov8GcfiB3pUXvYp4aZvNjpp",
  title: "Marcel Rozek (b. 1992, Akron, Ohio)",
  text: "Rozek, who now resides in Los Angeles, creates his multilayered compositions by employing a staining technique popularized by the early abstractionists and artists of the Washington Color School. Rozek is a process oriented painter, working by pourin diluted oil paint onto raw unprimed canvas, allowing interactions between the materials he uses and the space the work exists within to become th subject. With this technique, pools of color spread out and blend together before permeating the canvas. Organic shapes naturally tak form and when colors mix, they absorb at different rates, resulting in new color palettes and dreamy, spectral shapes. Roze sees in his ar a reflection of himself, with each piece conveying a different meaning. Rozek’s message is one tha compels the viewer to reflect on their ow vision of the world. Rozek graduated from Ohio’s Myers School of Art in 2017 earning a bachelor’s degree in studio art, with a minor i drawing and painting. Since finishing his undergraduat degree, Rozek’s artwork has been displayed in Istanbul, London, and Amsterdam",
};

const davidBio = {
  imgSrc:
    "https://ipfs.filebase.io/ipfs/QmXEkQboKC81Tu9k63hnzYetB1Fgj8yJMDDxq9wKh5nnU8",
  title: "David Matthew King (b. 1981, Southern California)",
  text: "David Matthew King was born in San Pedro, California. After moving to New York City in 2004 to pursue a career in songwriting, he began studying painting and drawing at the City University of New York where he earned a Bachelor’s Degree in English Literature with a minor in Studio Art. After teaching English for 8 years King resumed study in painting, drawing, collage, color theory and abstraction technique at the Art Students League of New York. He has had several solo and two-person exhibitions across the US and Europe. King unleashes his creative freedom by combining his poetic sense of rhythm and elision with self-imposed constraints. The artist limits his palette to predominantly elementary colors with the deliberate omission of black and white. This constellation of solid colored, humble components suggests the reduction of art to its basic material elements. King stages oppositions between clear contours of forms and freshness of the unprimed canvas, that left in the raw material state becomes absolutely necessary in the same way silence is necessary to music, conversation, thought or reflection.",
};

const oneImageComponentSrcFirst =
  "https://ipfs.filebase.io/ipfs/QmNuETrsfU5Qtihn85foFNnJ9cokAvak5WSvVJUdTRXCuR";

const oneImageComponentSrcSecond =
  "https://ipfs.filebase.io/ipfs/Qmcjf1EbzsQNPejDxixC9wKQE2sviwixbqpCjPjN36qo4p";

const oneImageComponentSrcThird =
  "https://ipfs.filebase.io/ipfs/QmTGSWvQgJ93LmDcyvUCWf79tUjb4YeatUSP9vMJPSz7xE";

export default async function Exhibition() {
  return (
    <div>
      <Header />
      <SectionFirst />
      <OneImage imgSrc={oneImageComponentSrcFirst} />
      <ThreeImageGrid />
      <Quote quote={quote} />
      <TwoImageSection imageData={twoImageSectionData[0]} />
      <ThreeImageSection imageData={threeImageSectionData[0]} />
      <TwoImageSection imageData={twoImageSectionData[2]} />
      <TwoImageSectionLandscape imageData={landscapeImgData} />
      <OneImage imgSrc={oneImageComponentSrcSecond} />
      <TwoImageSection imageData={twoImageSectionData[1]} />
      <ThreeImageSection imageData={threeImageSectionData[1]} />
      <TwoImageSectionSquare imageData={twoImageSectionData[3]} />
      <ThreeImageSection imageData={threeImageSectionData[2]} />
      <TwoImageSection imageData={twoImageSectionData[4]} />
      <TwoImageSection imageData={twoImageSectionData[4]} />
      <SecondQuote />
      <ArtistBio bio={marcelBio} />
      <ArtistBio bio={davidBio} />
      <div className="pb-16"></div>
      <OneImage imgSrc={oneImageComponentSrcThird} />
    </div>
  );
}
