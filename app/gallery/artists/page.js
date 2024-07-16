import Header from "@/components/Exhibition/AllArtists/Header";
import ArtistGrid from "@/components/Exhibition/AllArtists/ArtistGrid";

const artists = [
  {
    name: "Marcel Rozek",
    src: "https://ipfs.filebase.io/ipfs/QmbKrYmSnjHLCtjSH4gaZUh68wJECaeuXwBUSKqHFL78Ep",
    altText: "",
    href: "/gallery/david-marcel",
  },
  {
    name: "David Matthew King",
    src: "https://ipfs.filebase.io/ipfs/QmNf6xc84xSjKfvRy8yh1KpDfcETgmKkMJ65deSqCBRyvM",
    altText: "",
    href: "/gallery/david-marcel",
  },
  {
    name: "Yoni Goldberg",
    src: "https://ipfs.filebase.io/ipfs/QmZhHgj8aYH37cfu4N8XPqXnDU1d2K9PmSG43rj2sz553D",
    altText: "",
    href: "/art/yoni-goldberg",
  },
  {
    name: "Thai Mainhard",
    src: "https://ipfs.filebase.io/ipfs/QmarW4hQzqpRsEBE3NsEDBmbqPTSBvcQ5iYXa4wpU5qseG",
    altText: "",
    href: "/art/thai-mainhard",
  },
  {
    name: "Kyle Steed",
    src: "https://ipfs.filebase.io/ipfs/QmZDJyiEUP5mncx3fYrPdreAq2i5gmsvkSr7ZThcKfxT37",
    altText: "",
    href: "/art/kyle-steed",
  }
  // {
  //   name: "Alex Maceda",
  //   src: "https://ipfs.filebase.io/ipfs/Qmc1vcmrBJDzuvArAhqDuiE9SLygtXuHQYsiR6nCUt1Zju",
  //   altText: "",
  //   href: "/art/marcel-rozek",
  // },
];
export default function Artists() {
  return (
    <div>
      <Header />
      <ArtistGrid artists={artists} />
    </div>
  );
}
