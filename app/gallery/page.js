import ExhibitionList from "@/components/Exhibition/ExhibitionList";
import HeroImageText from "@/components/Exhibition/HeroImage";
import Section from "@/components/Exhibition/Section";
import MeetArtist from "@/components/Exhibition/MeetArtist";
import Featured from "@/components/Shop/Featured";

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
