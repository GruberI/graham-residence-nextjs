import SectionFirst from "@/components/Property/SectionFirst";
import TwoRowGrid from "@/components/Property/TwoRowGrid";
import HouseSpecs from "@/components/Property/HouseSpecs";
import Text from "@/components/Property/Text";
import Book from "@/components/Property/Book";
import Instagram from "@/components/Instagram";
import Carousel from "@/components/CarouselReviews/Carousel";

export const metadata = {
  title: "The Graham Residence | Secluded Mid-Century Modern Getaway",
  description:
    "Nestled into the boulders on 20 acres of pristine land just outside Joshua Tree National Park, this is Mojave Desert living at its finest.",
};

const text =
  "Surrounded by weather boulders, ancient junipers, and piñon pines. Serenity and solitude are pervasive, and the only neighbors in sight are blue jays, hummingbirds, and the occasional coyote.";

const imagesFirst = [
  {
    imgSrc:
      "https://siteimagery.nyc3.cdn.digitaloceanspaces.com/Residence/_DSC2009copy-(1).jpg",
  },
  {
    imgSrc:
      "https://siteimagery.nyc3.cdn.digitaloceanspaces.com/Residence/005.jpg",
  },
  {
    imgSrc:
      "https://siteimagery.nyc3.cdn.digitaloceanspaces.com/Residence/007.jpg",
  },
];

const imagesSecond = [
  {
    imgSrc:
      "https://siteimagery.nyc3.cdn.digitaloceanspaces.com/Residence/008.jpg",
  },
  {
    imgSrc:
      "https://siteimagery.nyc3.cdn.digitaloceanspaces.com/Residence/009.jpg",
  },
  {
    imgSrc:
      "https://siteimagery.nyc3.cdn.digitaloceanspaces.com/Residence/006.jpg",
  },
];

export default function Residence() {
  return (
    <>
      
      <SectionFirst />
      <TwoRowGrid imgSrc={imagesFirst} />
      <Text text={text} />
      <TwoRowGrid imgSrc={imagesSecond} />
      <HouseSpecs />
      <Book />
      <Carousel />
      <Instagram />
    </>
  );
}
