import { Suspense } from "react";
import Header from "@/components/Exhibition/DavidMarcel/Header";
import HeaderImage from "@/components/Exhibition/DavidMarcel/HeaderImage";
import Banner from "@/components/Exhibition/Banner";
import Quote from "@/components/Exhibition/Quote";
import SecondQuote from "@/components/Exhibition/DavidMarcel/SecondQuote";
import TwoImageGrid from "@/components/Exhibition/TwoImageGrid";
import SixImageGrid from "@/components/Exhibition/SixImageGrid";
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
    "https://ipfs.filebase.io/ipfs/QmWHNmQVHhGeUn9wezZjwTZXstigVrq1d8KAB9spPfRLWC/RackMultipart20240501-107-14tknqf.jpg",
  imgAltText:
    "",
  artist: "David Matthew King & Marcel Rozek",
  text: "About the artist. Lorem Ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
  href: "/art/david-marcel",
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
      <TwoImageGrid products={twoImgProducts} />
      <SecondQuote />
      <SixImageGrid products={sixProductSet} />
      <Banner banner={banner} />
    </div>
  );
}
