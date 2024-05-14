// import SectionFirst from "@/components/Property/SectionFirst";
// import TwoColumnGrid from "@/components/Property/TwoColumnGrid";
// import Text from "@/components/Property/Text";
import TextFirst from "@/components/Property/TextFirst";
import TwoRowGrid from "@/components/Property/TwoRowGrid";
// import Book from "@/components/Property/Book";
import HeroImageText from "@/components/Property/HeroImageText";
import Instagram from "@/components/Instagram";
// import HouseSpecs from "@/components/Property/HouseSpecs";
// import Modal from "@/components/Modal";
import EditorialSection from "@/components/Property/EditorialSection";
import ExhibitionList from "@/components/Property/RecentExhibitions";
import { getProducts } from "@/lib/shopify";
import { getCollectionProducts } from "@/lib/shopify/index";
// import Carousel from "@/components/Carousel/Carousel";
import NewArrivalsSection from "@/components/Shop/NewArrivalsSection";
// import Script from 'next/script'

const products = await getProducts({});
const productsByCollection = await getCollectionProducts({
  collection: "home-goods",
});
const productsByTag = productsByCollection.filter((product) => {
  return product.tags.includes("home-new-carousel");
});

export const metadata = {
  title:
    "Graham Collective | A Mid-Century Retreat, Fine Art & Curated Home Goods",
  description:
    "Shop curated fine art & home goods found within The Graham Residence, a contextualized art space just outside Joshua Tree National Park.",
};

// const text =
//   "A celebration of California modernity and the quiet transcendence of the high desert, with destinations, fine art, and intentionally curated home essentials from leading craftsman.";

const imagesFirst = [
  {
    imgSrc:
      "https://ipfs.filebase.io/ipfs/QmayojLyPFZXZvzX5gBzis26uVZSdB27Y85EfSSGvvdGMB/QmVVSQswM9dDiPjLvwfvMXf3P8F8spNp47WEsPXjTSZvQV",
  },
  {
    imgSrc:
      "https://ipfs.filebase.io/ipfs/QmUk5k6m3tinH7SxfMCMNwuQLuCHgLdzzLmLAF518c5uvi/QmTLfehxT5ZBtuBv99Hxgctm9B4xfyhdmsDuttSWdiDTWy",
  },
  {
    imgSrc:
      "https://ipfs.filebase.io/ipfs/QmUEvAXAGLRsykuXrfvJUZEQJ8Hbv2gmioa3YQFN6d3Mjw/QmXPYP1vawqAM1cDTtt3Suqh8NgtPZdSPZ5zdfctddDP5M",
  },
];

export default function Property() {
  return (
    <div className="overflow-x-hidden">
      {/* <Modal /> */}
      <HeroImageText />
      {/* <TextFirst text={text} /> */}
      <EditorialSection />
      {/* <SectionFirst /> */}
      {/* <TwoColumnGrid /> */}
      <TwoRowGrid imgSrc={imagesFirst} />
      <ExhibitionList />
      <NewArrivalsSection />
      {/* <Text text={text[1]} /> */}
      {/* <HouseSpecs /> */}
      {/* <Book />  */}
      <Instagram />
      {/* <Script src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=RWhpnR" /> */}
    </div>
  );
}
