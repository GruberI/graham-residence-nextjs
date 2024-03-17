import Header from "@/components/About/Header";
import Hero from "@/components/About/Hero";
import TwoColumnGrid from "@/components/About/TwoColumnGrid";
import TwoColumnGrid2 from "@/components/About/TwoColumnGrid2";
import AboutGoldberg from "@/components/About/AboutGoldberg";
import Instagram from "@/components/Instagram";

// export const metadata = {
//   title: 'Discover The Graham Residence',
//   description: 'The Graham Residence is a mid-century modern retreat near Joshua Tree National Park where the lines between home and gallery are blurred.',
// }

export default async function About() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Header />
      <AboutGoldberg />
      <TwoColumnGrid />
      <TwoColumnGrid2 />
      <Instagram />
    </div>
  );
}
