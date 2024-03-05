import { Suspense } from "react";
import Header from "@/components/Exhibition/ThaiMainhard/Header";
import HeaderImage from "@/components/Exhibition/ThaiMainhard/HeaderImage";
import Banner from "@/components/Exhibition/Banner";
import Quote from "@/components/Exhibition/Quote";
import SecondQuote from "@/components/Exhibition/ThaiMainhard/SecondQuote";
import TwoImageGrid from "@/components/Exhibition/TwoImageGrid";
import SixImageGrid from "@/components/Exhibition/SixImageGrid";
import { getCollectionProducts } from "@/lib/shopify";

const twoImgProducts = [
  {
    href: "/product/freefall-by-thai-mainhard",
    imgSrc:
      "https://ipfs.filebase.io/ipfs/QmZ5qt2VKWvpKGxsj8ytEEmKpJW14GF87MaG3mnjFykQxH/Qmewdaobh9iovKd1HKLCgVYFXcGddCqRBHtAZF5DPKzvkk",
    imgAltText:
      "Thai Mainhard painting hung in hallway of the graham residence.",
    title: "Freefall",
  },
  {
    href: "/product/hands-in-the-air",
    imgSrc:
      "https://ipfs.filebase.io/ipfs/QmfGobtVtxcrkVwc2unU7mzkTUDuLCjNbqsbtQE1PkTyRw",
    imgAltText: "Two Thai Mainhard paintings hung up in livingroom.",
    title: "Hands in the Air",
  },
];

const quote = {
  text: `MY WORK IS A WAY OF COPING WITH EXTREME EMOTIONS AND EXTREME HUMAN EXPERIENCES. IT'S A WAY TO ALLEVIATE AND BUILD TENSION AT THE SAME TIME.`,
  size: "3",
  artist: "Thai Mainhard",
};

const banner = {
  imgSrc:
    "https://ipfs.filebase.io/ipfs/QmWjsuayG2e1Nt996UGJEXEZGvd9x3DCqe9FyijEUxwQyD",
  imgAltText:
    "Acrylic paintings by Thai Mainhard on display at the graham residence",
  artist: "Thai Mainhard",
  text: "Thai Mainhard is an abstract painter that works and lives in Los Angeles, CA. Originally from Rio de Janeiro, Brazil, Thai draws inspiration from human experiences and tension found in daily life and her own memories of it.",
  href: "/art/thai-mainhard",
};

export default async function Exhibition() {
  const products = await getCollectionProducts({ collection: "Artwork" });
  const productsByTag = products.filter((product) => {
    return product.tags.includes("thai-mainhard");
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
      <TwoImageGrid products={twoImgProducts} />
      <SecondQuote />
      <SixImageGrid products={sixProductSet} />
      <Banner banner={banner} />
    </div>
  );
}
