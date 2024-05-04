import Header from "@/components/Exhibition/AllArtists/Header";
import ArtistGrid from "@/components/Exhibition/AllArtists/ArtistGrid";

const artists = [
  { name: "Yoni Goldberg", src: "https://ipfs.filebase.io/ipfs/QmedvMhXHkATo8RM28psWPEEsawxE35iTYZckzVmi5cC8n", altText: "", href: "/art/yoni-goldberg" },
  { name: "Thai Mainhard", src: "https://ipfs.filebase.io/ipfs/QmdajQkhoMRCbL1kXwsphD6QYhcEGYpdqD9wvZwwmuQpay", altText: "", href: "/art/thai-mainhard" },
  { name: "Kyle Steed", src: "https://ipfs.filebase.io/ipfs/QmbVuKk4UdELdq7qnBhUHk4xEkBxAkUDH1Pqh9htv2MFEQ", altText: "", href: "/art/kyle-steed" },
  { name: "David Matthew King", src: "https://ipfs.filebase.io/ipfs/QmZN3H4MJ7ve9onP2aChVe365KSUHFJDeGG9EpuBo9KA8q/RackMultipart20240501-170-1nhak7c.jpg", altText: "", href: "/art/david-matthew-king" },
  { name: "Marcel Rozek", src: "https://ipfs.filebase.io/ipfs/QmZv3MNH2ynMf3u9guCgxgqov8GcfiB3pUXvYp4aZvNjpp", altText: "", href: "/art/marcel-rozek" },
];
export default function Artists() {
  return (
    <div>
      <Header />
      <ArtistGrid artists={artists} />
    </div>
  );
}
