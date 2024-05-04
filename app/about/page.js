import Header from "@/components/About/Header";
import Hero from "@/components/About/Hero";
import TwoColumnGrid from "@/components/About/TwoColumnGrid";
import TwoColumnGrid2 from "@/components/About/TwoColumnGrid2";
import AboutGoldberg from "@/components/About/AboutGoldberg";
import Instagram from "@/components/Instagram";
import Text from "@/components/About/Text";
import ArtServices from "@/components/Exhibition/ArtServices";
import VisitUs from "@/components/Exhibition/VisitUs";

export const metadata = {
  title: "Discover The Graham Residence",
  description:
    "The Graham Residence is a mid-century modern retreat near Joshua Tree National Park where the lines between home and gallery are blurred.",
};

const text =
  " Since launching in 2017, The Graham Residence has hosted over a thousand guests from all over the world. It has also been home to countless photoshoots, small weddings, elopements, and events.";

export default async function About() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Header />
      <AboutGoldberg />
      <TwoColumnGrid />
      <ArtServices />
      <VisitUs />
      {/* <Text text={text} />
      <TwoColumnGrid2 /> */}
      <Instagram />
    </div>
  );
}
