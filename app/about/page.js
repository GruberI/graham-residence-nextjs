import Header from "../../components/About/Header";
import Hero from "../../components/About/Hero";
import Text from '../../components/About/Text'
import TwoColumnGrid from '../../components/About/TwoColumnGrid'
import TwoColumnGrid2 from '../../components/About/TwoColumnGrid2'
import AboutGoldberg from '../../components/About/AboutGoldberg'

export default async function About() {
  
    return (
     <>
        <Hero />
        <Header />
        <Text />
        <AboutGoldberg />
        <TwoColumnGrid />
        <TwoColumnGrid2 />
     </>
    );
  }
  