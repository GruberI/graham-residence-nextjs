// import SectionFirst from "@/components/Property/SectionFirst";
// import TwoColumnGrid from "@/components/Property/TwoColumnGrid";
// import Text from "@/components/Property/Text";
import TextFirst from "@/components/Property/TextFirst";
import TwoRowGrid from "@/components/Property/TwoRowGrid";
// import Book from "@/components/Property/Book";
import HeroImageText from "@/components/Property/HeroImageText";
import Instagram from "@/components/Instagram";
// import HouseSpecs from "@/components/Property/HouseSpecs";
import Modal from "@/components/Modal";
import EditorialSection from "@/components/Property/EditorialSection";
import ExhibitionList from "@/components/Property/RecentExhibitions";
import { getProducts } from "@/lib/shopify";
import { getCollectionProducts } from "@/lib/shopify/index";
import Carousel from "@/components/Carousel/Carousel";

const products = await getProducts({});
const productsByCollection = await getCollectionProducts({
  collection: "home-goods",
});
const productsByTag = productsByCollection.filter((product) => {
  return product.tags.includes("home-new-carousel");
});

console.log('products', productsByTag.length)

// const text =
//   "A celebration of California modernity and the quiet transcendence of the high desert, with destinations, fine art, and intentionally curated home essentials from leading craftsman.";

export default function Property() {
  return (
    <div className="overflow-x-hidden">
      <Modal />
      <HeroImageText />
      {/* <TextFirst text={text} /> */}
      <EditorialSection />
      {/* <SectionFirst /> */}
      {/* <TwoColumnGrid /> */}
      <TwoRowGrid />
      <ExhibitionList />
      <Carousel products={productsByTag} />
      {/* <Text text={text[1]} /> */}
      {/* <HouseSpecs /> */}
      {/* <Book />  */}
      <Instagram />
    </div>
  );
}
