import Header from "@/components/Exhibition/DavidMarcel/Header";
import Quote from "@/components/Exhibition/Quote";
import ThreeImageGrid from "@/components/Exhibition/DavidMarcel/ThreeImageGrid";
import SectionFirst from "@/components/Exhibition/DavidMarcel/SectionFirst";
import ProductGridThree from "@/components/Product/ProductGridThree";
import ArtistBio from "@/components/Exhibition/DavidMarcel/ArtistBio";
import { getCollectionProducts } from "@/lib/shopify";

const quote = {
  text: `I am always trying to make the most with the least. I like to present things in a new way, taking something that might feel familiar and making it disorienting or slightly less familiar.`,
  size: "3",
  artist: "David Matthew King",
};

const marcelBio = {
  imgSrc:
    "https://siteimagery.nyc3.cdn.digitaloceanspaces.com/Gallery/MarcelRozek/marcel-rozekw.jpg",
  title: "Marcel Rozek (b. 1992, Akron, Ohio)",
  text: "Rozek, who now resides in Los Angeles, creates his multilayered compositions by employing a staining technique popularized by the early abstractionists and artists of the Washington Color School. Rozek is a process oriented painter, working by pouring diluted oil paint onto raw unprimed canvas, allowing interactions between the materials he uses and the space the work exists within to become the subject. With this technique, pools of color spread out and blend together before permeating the canvas. Organic shapes naturally take form and when colors mix, they absorb at different rates, resulting in new color palettes and dreamy, spectral shapes. Rozek sees in his art a reflection of himself, with each piece conveying a different meaning. Rozek’s message is one that compels the viewer to reflect on their own vision of the world. Rozek graduated from Ohio’s Myers School of Art in 2017 earning a bachelor’s degree in studio art, with a minor in drawing and painting. Since finishing his undergraduate degree, Rozek’s artwork has been displayed in Istanbul, London, and Amsterdam.",
};

const davidBio = {
  imgSrc:
    "https://siteimagery.nyc3.cdn.digitaloceanspaces.com/Gallery/DavidMatthewKing/David-Matthew-King2w.jpg",
  title: "David Matthew King (b. 1981, Southern California)",
  text: "David Matthew King was born in San Pedro, California. After moving to New York City in 2004 to pursue a career in songwriting, he began studying painting and drawing at the City University of New York where he earned a Bachelor’s Degree in English Literature with a minor in Studio Art. After teaching English for 8 years King resumed study in painting, drawing, collage, color theory and abstraction technique at the Art Students League of New York. He has had several solo and two-person exhibitions across the US and Europe. King unleashes his creative freedom by combining his poetic sense of rhythm and elision with self-imposed constraints. The artist limits his palette to predominantly elementary colors with the deliberate omission of black and white. This constellation of solid colored, humble components suggests the reduction of art to its basic material elements. King stages oppositions between clear contours of forms and freshness of the unprimed canvas, that left in the raw material state becomes absolutely necessary in the same way silence is necessary to music, conversation, thought or reflection.",
};

export default async function Exhibition() {
  const products = await getCollectionProducts({ collection: "Artwork" });
  if (!products || !products.length) return notFound();

  const productsByTag = products.filter((product) => {
    return product?.tags?.includes("david-matthew-king") || product?.tags?.includes("marcel-rozek");
  });

  return (
    <div>
      <Header />
      <SectionFirst />
      <ThreeImageGrid />
      <Quote quote={quote} />
      {/* Updated: Removed hidePrice prop */}
      <ProductGridThree products={productsByTag} />
      <ArtistBio bio={marcelBio} />
      <ArtistBio bio={davidBio} />
      <div className="pb-16"></div>
    </div>
  );
}
