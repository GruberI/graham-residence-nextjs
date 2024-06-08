
import Header from "@/components/About/Header";
import Instagram from "@/components/Instagram";
import PageHeaderHero from "@/components/global/PageHeaderHero";
import Recs from "../../../components/Residence/Recs";
export default function About() {
  return (
    <div className="overflow-x-hidden">
      <PageHeaderHero
        imgSrc="https://ipfs.filebase.io/ipfs/QmYTuXismQUCXVPb6MTPNd1AMwVbi7BjQRYAG6gtHQHymP/QmNqmfpcLzdfj9CeVsURAbP8ZfWGUndiRifrHAp8veYiwa"
        title="Our Recs"
        classes={{
          title: "mb-8 md:mb-0",
        }}
      />
      <Recs />
      <Instagram />
    </div>
  );
}
