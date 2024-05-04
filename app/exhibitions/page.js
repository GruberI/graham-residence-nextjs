import Header from "@/components/Exhibtions/Header";
import UpcomingExhibitionList from "@/components/Exhibtions/UpcomingExhibitionList";
import PastExhibitionsList from "@/components/Exhibtions/PastExhibitionsList";
import JoinList from "@/components/Exhibtions/JoinList";
import ArtistSubmissionContact from '@/components/Exhibition/ArtistSubmissionContact'

export default function Exhibitions() {
  return (
    <div>
      <Header />
      <UpcomingExhibitionList />
      <JoinList />
      <PastExhibitionsList />
      <ArtistSubmissionContact />
    </div>
  );
}
