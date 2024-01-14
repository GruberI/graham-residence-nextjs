import Header from "@/components/Exhibition/KyleSteed/Header";
import TwoImageGrid from "@/components/Exhibition/TwoImageGrid";
import Quote from "@/components/Exhibition/Quote";
import FourImageGrid from "@/components/Exhibition/KyleSteed/FourImageGrid";
import ArtExhibition from "@/components/Exhibition/KyleSteed/About/ArtExhibition";
import SixImageGrid from "@/components/Exhibition/SixImageGrid";
import Artist from "@/components/Exhibition/KyleSteed/About/Artist";
import { Suspense } from "react";
import { getCollectionProducts } from "../../../lib/shopify";

const twoImgProducts = [
  {
    href: "/product/dos-donts",
    imgSrc:
      "https://ipfs.filebase.io/ipfs/QmQdoTPfZoTxpVxAcn1s6HhU1CpwUv9PsZwaP3kz2JMuiL",
    imgAltText: "Acrylic painting called Dos and Donts by Kyle Steed.",
    title: "Do's & Don'ts",
  },
  {
    href: "/product/manhood-by-kyle-steed",
    imgSrc:
      "https://ipfs.filebase.io/ipfs/QmQNosX6WjSFEcNGLFonBPXFwmV9psowsJQTmyvSgvP9hZ",
    imgAltText: "Acrylic painting called Manhood by Kyle Steed.",
    title: "Manhood",
  },
];

const quote = { text: 'In nature I believe there is no concept of chaos, only cosmos.', size: '4',  artist: 'Kyle Steed'}

export default async function Exhibition() {
  const products = await getCollectionProducts({ collection: "Artwork" });
  const productsByTag = products.filter((product) => {
    return product.tags.includes("forgotten-lexicon");
  });

  if (!products?.length) return null;

  const sixProductSet = productsByTag.slice(0, 6);
  return (
    <div className="bg-white py-1 sm:py-10">
      <Header />
      <Suspense>
        <TwoImageGrid products={twoImgProducts} />
      </Suspense>
      <Quote quote={quote}/>
      <FourImageGrid />
      <ArtExhibition />
      <SixImageGrid products={sixProductSet} />
      <Artist />
    </div>
  );
}
