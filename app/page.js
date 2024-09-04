import TextFirst from "@/components/Property/TextFirst";
import TwoRowGrid from "@/components/Property/TwoRowGrid";
import HeroImageText from "@/components/Property/HeroImageText";
import Instagram from "@/components/Instagram";
import Editorial from "@/components/Property/Editorial";
import ExhibitionList from "@/components/Property/RecentExhibitions";
import NewArrivalsSection from "@/components/Shop/NewArrivalsSection";
import Section from "@/components/Exhibition/Section";
import Featured from "@/components/Shop/Featured";

export const metadata = {
  title:
    "Graham Collective | A Mid-Century Retreat, Fine Art & Curated Home Goods",
  description:
    "Shop curated fine art & home goods found within The Graham Residence, a contextualized art space just outside Joshua Tree National Park.",
};

const imagesFirst = [
  {
    imgSrc:
      "https://siteimagery.nyc3.cdn.digitaloceanspaces.com/david-marcel-tgr.jpg",
  },
  {
    imgSrc:
      "https://siteimagery.nyc3.cdn.digitaloceanspaces.com/Homepage/lkw.jpg",
  },
  {
    imgSrc:
      "https://siteimagery.nyc3.cdn.digitaloceanspaces.com/Homepage/morning.jpeg",
  },
];

export default function Property() {
  return (
    <div>
      <HeroImageText />
      <Section />
      {/* <Editorial /> */}
      {/* <TwoRowGrid imgSrc={imagesFirst} /> */}
      <ExhibitionList />
      <NewArrivalsSection />
      <Featured />
      <Instagram />
    </div>
  );
}
