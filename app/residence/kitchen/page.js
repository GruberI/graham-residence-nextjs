
import Header from "@/components/About/Header";
import Instagram from "@/components/Instagram";
import PageHeaderHero from "@/components/global/PageHeaderHero";
import Recs from "../../../components/Residence/Kitchen";
export default function About() {
  return (
    <div className="overflow-x-hidden">
      <PageHeaderHero
        imgSrc="https://siteimagery.nyc3.cdn.digitaloceanspaces.com/About/002.jpg"
        title="Kitchen Inventory"
        classes={{
          title: "mb-8 md:mb-0",
        }}
      />
      <Recs />
      <Instagram />
    </div>
  );
}
