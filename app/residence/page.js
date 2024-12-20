import SectionFirst from "@/components/Property/SectionFirst";
import HeroImageTextResidence from "@/components/Property/HeroImageTextResidence"
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
  "The approach to the home is a one-lane, bumpy, winding dirt road. You snake around boulders and hug their curves. As you drive, houses get more and more spaced out until they all but completely fall away. Once you arrive, serenity and solitude are pervasive, and the only neighbors in sight are bluejays, hummingbirds and the occasional coyote.";

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
      <HeroImageTextResidence />
      <SectionFirst />
      <TwoRowGrid imgSrc={imagesFirst} />
      <Text text={text} />
      <TwoRowGrid imgSrc={imagesSecond} />
    {/*  <HouseSpecs />
      <Book />
      <Carousel />
  <Instagram /> */}
    </>
  );
}
