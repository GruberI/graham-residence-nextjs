import Header from "@/components/Exhibition/AllArtists/Header";
import ArtistGrid from "@/components/Exhibition/AllArtists/ArtistGrid";

const artists = [
  {
    name: "Thai Mainhard",
    src: "https://ipfs.filebase.io/ipfs/QmdajQkhoMRCbL1kXwsphD6QYhcEGYpdqD9wvZwwmuQpay",
    altText: "",
    href: "/art/thai-mainhard",
  },
  {
    name: "Kyle Steed",
    src: "https://ipfs.filebase.io/ipfs/QmbVuKk4UdELdq7qnBhUHk4xEkBxAkUDH1Pqh9htv2MFEQ",
    altText: "",
    href: "/art/kyle-steed",
  },
  {
    name: "David Matthew King",
    src: "https://ipfs.filebase.io/ipfs/QmNyE25m4kwN6cWhRtkP89DZE8tXwBL32RVZb5x4pXUPHr",
    altText: "",
    href: "/art/david-matthew-king",
  },
  {
    name: "Marcel Rozek",
    src: "https://ipfs.filebase.io/ipfs/QmZv3MNH2ynMf3u9guCgxgqov8GcfiB3pUXvYp4aZvNjpp",
    altText: "",
    href: "/art/marcel-rozek",
  },
  {
    name: "Yoni Goldberg",
    src: "https://ipfs.filebase.io/ipfs/QmUpCy4feyYcSqSfzsbahHQVPDpS4jHvBLN6ZZjtyw96R4",
    altText: "",
    href: "/art/yoni-goldberg",
  },
];
export default function Artists() {
  return (
    <div>
      <Header />
      <ArtistGrid artists={artists} />
    </div>
  );
}
