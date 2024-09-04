import Header from "@/components/About/Header";
import AboutGoldberg from "@/components/About/AboutGoldberg";
import Instagram from "@/components/Instagram";
import ArtServices from "@/components/Exhibition/ArtServices";
import VisitUs from "@/components/Exhibition/VisitUs";
import OneImage from "@/components/About/OneImage";
import PageHeaderHero from "@/components/global/PageHeaderHero";

export const metadata = {
  title: "About The Graham Collective | ",
  description:
    "A celebration of California modernity and the quiet transcendence of the Mojave Desert, with fine art and intentionally curated objects.",
};

const text =
  "Since launching in 2017, The Graham Residence has hosted over a thousand guests from all over the world. It has also been home to countless photoshoots, small weddings, elopements, and events";

const images = [
  {
    imgSrc:
      "https://siteimagery.nyc3.cdn.digitaloceanspaces.com/About/005.jpg",
  },
  {
    imgSrc:
      "https://ipfs.filebase.io/ipfs/QmNdt9bpx4hYyB4KMckJc3b3Swt4w1PwH9zYvM32K5g5HJ",
  },
  {
    imgSrc:
      "https://ipfs.filebase.io/ipfs/QmfBrg5ZBp1mjgKS7AqGKd4e8MbLFVvT33ND3WfbadEY7k/QmbyitaXxSxH1pWtT1TTzD7PgsujdfZTEEpqD5PGdDb9DX",
  },
];

const oneImageComponentSrc =
  "https://siteimagery.nyc3.cdn.digitaloceanspaces.com/About/005.jpg";

export default async function About() {
  return (
    <div className="overflow-x-hidden">
      <PageHeaderHero
        imgSrc="https://siteimagery.nyc3.cdn.digitaloceanspaces.com/About/002.jpg"
        title="Graham Collective"
        smallTitle="About the"
        classes={{
          title: "mb-8 md:mb-0",
        }}
      />

      <Header />
    {/* <AboutGoldberg /> */}
      <OneImage imgSrc={oneImageComponentSrc} />
    {/*  <ArtServices /> */}
      <VisitUs />
      <Instagram />
    </div>
  );
}
