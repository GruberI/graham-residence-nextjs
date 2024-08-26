import TextFirst from "@/components/Property/TextFirst";
import TwoRowGrid from "@/components/Property/TwoRowGrid";
import HeroImageText from "@/components/Property/HeroImageText";
import Instagram from "@/components/Instagram";
import Editorial from "@/components/Property/Editorial";
import ExhibitionList from "@/components/Property/RecentExhibitions";
import NewArrivalsSection from "@/components/Shop/NewArrivalsSection";

export const metadata = {
  title:
    "Graham Collective | A Mid-Century Retreat, Fine Art & Curated Home Goods",
  description:
    "Shop curated fine art & home goods found within The Graham Residence, a contextualized art space just outside Joshua Tree National Park.",
};

const text =
  "A celebration of California modernity and the quiet transcendence of the Mojave desert";

const imagesFirst = [
  {
    imgSrc:
      "https://siteimagery.nyc3.cdn.digitaloceanspaces.com/david-marcel-tgr.jpg",
  },
  {
    imgSrc:
      "https://ipfs.filebase.io/ipfs/QmbVDJcsqbLmaA1bZTL8AC5dS59PFqG9rmeZQkKpuPHt8b",
  },
  {
    imgSrc:
      "https://ipfs.filebase.io/ipfs/QmUEvAXAGLRsykuXrfvJUZEQJ8Hbv2gmioa3YQFN6d3Mjw/QmXPYP1vawqAM1cDTtt3Suqh8NgtPZdSPZ5zdfctddDP5M",
  },
];

export default function Property() {
  return (
    <div>
      <HeroImageText />
      <TextFirst text={text} />
      <Editorial />
      <TwoRowGrid imgSrc={imagesFirst} />
      <ExhibitionList />
      <NewArrivalsSection />
      <Instagram />
    </div>
  );
}
