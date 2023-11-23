import Header from "../../components/About/Header";
import Hero from "../../components/About/Hero";
import Section from '../../components/About/Section'
import ImageCarousel from '../../components/Carousel/ImageCarousel'
// import AltHeader from '../../components/About/AltHeader'

export default async function About() {
  
    return (
     <>
        <Hero />
        <Header />
        <Section />
        <ImageCarousel />
     </>
    );
  }
  