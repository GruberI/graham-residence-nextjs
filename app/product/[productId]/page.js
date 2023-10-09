"use client";
// import SingleProduct from "@/components/SingleProduct/SingleProduct";
import { ProductDescription } from "@/components/product/product-description";
import { artwork } from "@/components/Shop/ArtSection";

const sampleProduct = [
  {
    variants: {
      id: "0",
      title: "A Quiet Noise 1",
      name: "Kyle Steed",
      availableForSale: true,
      selectedOptions: null,
      price: {
        amount: "1200",
        currencyCode: "$",
      },
    },
    images: [
      {
        id: 1,
        name: "Angled view",
        url: "https://ipfs.filebase.io/ipfs/QmT6UGEBSpLUYGP3hHopye3Rn67JTErs6eNBufTS4p7G1k",
        altText: "Angled front view with bag zipped and handles upright.",
      },
      {
        id: 2,
        name: "Angled view",
        url: "https://ipfs.filebase.io/ipfs/QmV3eRyrqjm3Btet75umR5d9sP9CSeoJ8GLkq3ouVe6pym",
        altText: "Angled front view with bag zipped and handles upright.",
      },
      {
        id: 3,
        name: "Angled view",
        url: "https://ipfs.filebase.io/ipfs/QmVmbeMmM9h244UCofAkThHxYzWUpTbYJRi5y6r2y2bpZA",
        altText: "Angled front view with bag zipped and handles upright.",
      },
    ],
    description: "Following his graduation from...",
    details: [
      {
        name: "DESCRIPTION",
        items: ["Following his graduation from..."],
      },
    ],
  },
];

export default function Page({ params }) {
  const productId = parseInt(params.productId);

  // const product = artwork.find((art) => art.id === productId);

  // if (product === undefined) {
  //   return null;
  // }

  return <ProductDescription product={sampleProduct} />;
}
