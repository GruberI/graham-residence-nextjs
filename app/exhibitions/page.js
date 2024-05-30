import Header from "@/components/Exhibtions/Header";
import UpcomingExhibitionList from "@/components/Exhibtions/UpcomingExhibitionList";
import PastExhibitionsList from "@/components/Exhibtions/PastExhibitionsList";
import ArtistSubmissionContact from "@/components/Exhibition/ArtistSubmissionContact";

export const metadata = {
  title:
    "Graham Collective | View Curated Exhibitions by Leading Contemporary Artists.",
  description:
    "Within the walls of The Graham Residence, lies Graham Gallery, a contextualized art space featuring rotating art exhibitions by the best emerging & mid-career contemporary artists.",
};

export default function Exhibitions() {
  return (
    <div>
      <Header />
      <UpcomingExhibitionList />
      <PastExhibitionsList />
      <ArtistSubmissionContact />
    </div>
  );
}
