import Hero from "@/components/Residence/Hero";
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
      "https://ipfs.filebase.io/ipfs/QmW8UUk56Qbr47pRVnzZc4aQMUMAJydvSjFjYnnDzGsjcv/QmT541GQpg2qZhJ4JQa94rEJBxPWjoYkbGxPRDCy2688Bi",
  },
  {
    imgSrc:
      "https://ipfs.filebase.io/ipfs/QmV39MLBLsMtxi7ZMUA7CUaP8uPbsP6BqfUBVn6P7SYaLh/QmYRtJQwPp1KwczWak8p61h8v6wydHTAwP3sdAEAASuYm3",
  },
  {
    imgSrc:
      "https://ipfs.filebase.io/ipfs/QmZyRYS1GjGNB3EMCFieDVyzmtYrdBKA5KdcEx93abvR21",
  },
];

const imagesSecond = [
  {
    imgSrc:
      "https://ipfs.filebase.io/ipfs/Qmbd4FWxjiDw2VzcsjTVXZnhLRwVjQJF1w42KeCaLL5PfN/Qmb2NMXEKqzVVNYurkxEYvrABw5Pn1RhzWdtt4Wggp96eg",
  },
  {
    imgSrc:
      "https://ipfs.filebase.io/ipfs/QmTkXg3TM3XrvuAVRM4x3ztaKpri9MRbLGajFKMepXAiTG/QmbHzkjhzmdjgBpkxzg1jmrLp5bkLEhFGCjK2czduPsiWS",
  },
  {
    imgSrc:
      "https://ipfs.filebase.io/ipfs/QmZ3zm4PhNqiNEMgVg2ZuebquKVYwDkdKQhJFjLrvfzfA8",
  },
];

export default function Residence() {
  return (
    <>
      <Hero />
      <SectionFirst />
      <TwoRowGrid imgSrc={imagesFirst} />
      <Text text={text} />
      <TwoRowGrid imgSrc={imagesSecond} />
      <HouseSpecs />
      <Book />
      <div className="hidden sm:block">
        <Carousel />
        <Instagram />
      </div>
    </>
  );
}
