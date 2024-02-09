import Header from "../../components/About/Header";
// import Hero from "../../components/About/Hero";
import Text from '../../components/About/Text'
import TwoColumnGrid from '../../components/About/TwoColumnGrid'
import TwoRowGrid from '../../components/About/TwoRowGrid'

export default async function About() {
  
    return (
     <>
        <Header />
        <TwoColumnGrid />
        <Text />
        <TwoRowGrid />
     </>
    );
  }
  