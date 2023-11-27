import ExhibitionList from "@/components/Exhibition/ExhibitionList";

const artistExhibitions = [
  {
    artist: "Kyle Steed",
    name: "A Quiet Noise",
    imgSrc:
      "https://ipfs.filebase.io/ipfs/QmZUP4GfbWpnwySsEh2jJ1KdG96dPEK7fSnoGRK7AeCaZc/QmdFrNgmbK3FwH8DTjzPQJEXfk8CHXBeb72HSe37ArVRgW",
    imgAltText:
      "Painting by Kyle Steed hung in living room of Graham Residence",
    href: "/exhibition/kyle-steed",
  },
  {
    artist: "Thai Mainhard",
    name: "Desert Spring",
    imgSrc:
      "https://ipfs.filebase.io/ipfs/QmWjsuayG2e1Nt996UGJEXEZGvd9x3DCqe9FyijEUxwQyD",
    imgAltText:
      "Various paintings by Thai resting on porch at the graham residence",
    href: "/exhibition/thai-mainhard",
  },
];
export default function MainExhibition() {
  return (
    <div className="m-auto max-w-7xl py-26 lg:px-6 sm:px-2 sm:mt-36 mt-48 mb-28">
      <div className="text-center mb-16">
        <h1 className="font-thin sm:text-6xl text-5xl ">
          Exhibitions
        </h1>
      </div>
      <ExhibitionList />
    </div>
  );
}
