import Hero from "@/components/Residence/Hero";
import SectionFirst from "@/components/Property/SectionFirst";
import TwoRowGrid from "@/components/Property/TwoRowGrid";
import HouseSpecs from "@/components/Property/HouseSpecs";
import Text from "@/components/Property/Text";
import Book from "@/components/Property/Book";
import Instagram from "@/components/Instagram";
import Carousel from '@/components/CarouselReviews/Carousel'

const text =  "Surrounded by weather boulders, ancient junipers, and piñon pines. Serenity and solitude are pervasive, and the only neighbors in sight are blue jays, hummingbirds, and the occasional coyote."

export default function Residence() {
  return (
    <>
      <Hero />
      <SectionFirst />
      <TwoRowGrid />
      <Text text={text} />
      <TwoRowGrid />
      <HouseSpecs />
      <Book />
      <Carousel />
      <Instagram />
    </>
  );
}
