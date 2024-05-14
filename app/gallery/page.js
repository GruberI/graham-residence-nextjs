import ExhibitionList from "@/components/Exhibition/ExhibitionList";
import HeroImageText from "@/components/Exhibition/HeroImage";
import Section from "@/components/Exhibition/Section";
import MeetArtist from "@/components/Exhibition/MeetArtist";
import Featured from "@/components/Shop/Featured";
import ArtServicesText from "@/components/Exhibition/ArtServicesText";
import VisitUs from "@/components/Exhibition/VisitUs";
import ArtistSubmissionContact from "@/components/Exhibition/ArtistSubmissionContact";

export const metadata = {
  title: "Graham Collective | Gallery, Exhibitions, Residencies & Artwork",
  description:
    "A rotating exhibition space featuring original artwork by emerging & mid career contemporary artists. Set in context unlike a typical gallery, our experiential space transports and inspires",
};

export default function MainExhibition() {
  return (
    <div>
      <HeroImageText />
      <Section />
      <ExhibitionList />
      <Featured />
      <MeetArtist />
      <ArtServicesText />
      <VisitUs />
      <ArtistSubmissionContact />
    </div>
  );
}
