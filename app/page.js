// import Header from "../components/Property/Header";
// import HeaderImage from "../components/Property/HeaderImage";
// import Navigation from '../components/Property/Navigation'
import SectionFirst from "../components/Property/SectionFirst";
import TwoColumnGrid from "../components/Property/TwoColumnGrid";
import Text from "../components/Property/Text";
// import FourImageGrid from "../components/Property/FourImageGrid";
import TwoRowGrid from "../components/Property/TwoRowGrid";
import Book from "../components/Property/Book";
import HeroImageText from "../components/Property/HeroImageText";
import Instagram from "../components/Instagram";
import HouseSpecs from "../components/Property/HouseSpecs";
import Modal from "../components/Modal";

export default function Property() {
  return (
    <div>
      {/* <Header />
      <Navigation />
      <HeaderImage /> */}
      <Modal />
      <HeroImageText />
      <SectionFirst />
      <TwoColumnGrid />
      <Text />
      <TwoRowGrid />
      <HouseSpecs />
      <Book />
      <Instagram />
      {/* <FourImageGrid /> */}
    </div>
  );
}
