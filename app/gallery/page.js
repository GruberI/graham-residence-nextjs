import ExhibitionList from "@/components/Exhibition/ExhibitionList";
import HeroImageText from "@/components/Exhibition/HeroImage";
import Section from "@/components/Exhibition/Section";
import MeetArtist from "@/components/Exhibition/MeetArtist";
import Featured from "@/components/Shop/Featured";

// export const metadata = {
//   title: 'Graham Gallery',
//   description: 'Graham Gallery is a rotating exhibition space featuring original artwork by emerging contemporary artists',
// }

export default function MainExhibition() {
  return (
    <div>
      <HeroImageText />
      <Section />
      <ExhibitionList />
      <Featured />
      <MeetArtist />
    </div>
  );
}
