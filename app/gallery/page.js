import ExhibitionList from "@/components/Exhibition/ExhibitionList";
import HeroImageText from "@/components/Exhibition/HeroImage";
import GalleryQuote from "@/components/Exhibition/GalleryQuote";
import LargeImageTwo from "@/components/Exhibition/LargeImageTwo";
import Section from "@/components/Exhibition/Section";
import MeetArtist from "@/components/Exhibition/MeetArtist";

const artistExhibitions = [
  {
    artist: "Kyle Steed",
    name: "A Quiet Noise",
    imgSrc:
      "https://ipfs.filebase.io/ipfs/QmZUP4GfbWpnwySsEh2jJ1KdG96dPEK7fSnoGRK7AeCaZc/QmdFrNgmbK3FwH8DTjzPQJEXfk8CHXBeb72HSe37ArVRgW",
    imgAltText:
      "Painting by Kyle Steed hung in living room of Graham Residence",
    href: "/exhibition/kyle-steed",
  },
  {
    artist: "Thai Mainhard",
    name: "Desert Spring",
    imgSrc:
      "https://ipfs.filebase.io/ipfs/QmWjsuayG2e1Nt996UGJEXEZGvd9x3DCqe9FyijEUxwQyD",
    imgAltText:
      "Various paintings by Thai resting on porch at the graham residence",
    href: "/exhibition/thai-mainhard",
  },
];
export default function MainExhibition() {
  return (
    <div>
      <HeroImageText />
      <GalleryQuote />
      <LargeImageTwo />
      <Section />
      <ExhibitionList />
      <MeetArtist />
    </div>
  );
}
