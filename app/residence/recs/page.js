
import Instagram from "@/components/Instagram";
import PageHeaderHero from "@/components/global/PageHeaderHero";
import Recs from "../../../components/Residence/Recs";
export default function About() {
  return (
    <div className="overflow-x-hidden">
      <PageHeaderHero
        imgSrc="https://siteimagery.nyc3.cdn.digitaloceanspaces.com/About/002.jpg"
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
