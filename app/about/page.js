import Header from "../../components/About/Header";
import Hero from "../../components/About/Hero";
import Text from '../../components/About/Text'
import TwoColumnGrid from '../../components/About/TwoColumnGrid'
import TwoRowGrid from '../../components/About/TwoRowGrid'
import AboutGoldberg from '../../components/About/AboutGoldberg'

export default async function About() {
  
    return (
     <>
        <Hero />
        <Header />
        <TwoColumnGrid />
        <Text />
        <TwoRowGrid />
        <AboutGoldberg />
     </>
    );
  }
  