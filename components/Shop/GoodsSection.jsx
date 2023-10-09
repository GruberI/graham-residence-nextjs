import ProductsGrid from "./ProductsGrid";

export const homeGoods = [
  {
    id: 0,
    name: "Travel Tumbler Pink",
    href: "#",
    price: "$20",
    description: "HydroFlask",
    imageSrc:
      "https://fellowproducts.com/cdn/shop/products/01_Hero_MatteGrey_900x.png?v=1684254344",
    hoverImageSrc:
      "https://ipfs.filebase.io/ipfs/QmaXZF8cihmbdV9WkZLT62SmgyU7x3xDJBqbPJR3TwzeBL",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 1,
    name: "Wool Throw Blanket",
    href: "#",
    price: "$120",
    description: "Brooklinen",
    imageSrc:
      "https://www.brooklinen.com/cdn/shop/products/Throw_Pure_Wool_Latte_Silo_b1b515da-e6f1-40d6-8f90-325f724ea4c4_768x.progressive.jpg?v=1629409020",
    hoverImageSrc:
      "https://ipfs.filebase.io/ipfs/QmfEVnMSpKsjC77EYhAbStco8nPWCxNTr4qZ7rDwxh7NC5",
    imageAlt:
      "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
  },
  {
    id: 2,
    name: "Outdoor Rattan Chairs",
    href: "#",
    price: "$320",
    description: "Joss & Main",
    imageSrc:
      "https://ipfs.filebase.io/ipfs/QmbezAQaHAozA4fNAULYezD5CCbehKSaUMDSiq5B7R8ecC",
    hoverImageSrc:
      "https://ipfs.filebase.io/ipfs/QmRSgZoDwSYbWAAnoqq3QP67fJC6t4iGsYaWL6S85nJuHv",
    imageAlt:
      "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
  },
  {
    id: 3,
    name: "Wool Throw Blanket",
    href: "#",
    price: "$120",
    description: "Brooklinen",
    imageSrc:
      "https://www.brooklinen.com/cdn/shop/products/Throw_Pure_Wool_Latte_Silo_b1b515da-e6f1-40d6-8f90-325f724ea4c4_768x.progressive.jpg?v=1629409020",
    hoverImageSrc:
      "https://ipfs.filebase.io/ipfs/QmfEVnMSpKsjC77EYhAbStco8nPWCxNTr4qZ7rDwxh7NC5",
    imageAlt:
      "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
  },
  {
    id: 4,
    name: "Travel Tumbler Pink",
    href: "#",
    price: "$20",
    description: "HydroFlask",
    imageSrc:
      "https://fellowproducts.com/cdn/shop/products/01_Hero_MatteGrey_900x.png?v=1684254344",
    hoverImageSrc:
      "https://ipfs.filebase.io/ipfs/QmaXZF8cihmbdV9WkZLT62SmgyU7x3xDJBqbPJR3TwzeBL",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 5,
    name: "Outdoor Rattan Chairs",
    href: "#",
    price: "$320",
    description: "Joss & Main",
    imageSrc:
      "https://ipfs.filebase.io/ipfs/QmbezAQaHAozA4fNAULYezD5CCbehKSaUMDSiq5B7R8ecC",
    hoverImageSrc:
      "https://ipfs.filebase.io/ipfs/QmRSgZoDwSYbWAAnoqq3QP67fJC6t4iGsYaWL6S85nJuHv",
    imageAlt:
      "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
  },
  {
    id: 6,
    name: "Travel Tumbler Pink",
    href: "#",
    price: "$20",
    description: "HydroFlask",
    imageSrc:
      "https://fellowproducts.com/cdn/shop/products/01_Hero_MatteGrey_900x.png?v=1684254344",
    hoverImageSrc:
      "https://ipfs.filebase.io/ipfs/QmaXZF8cihmbdV9WkZLT62SmgyU7x3xDJBqbPJR3TwzeBL",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 7,
    name: "Outdoor Rattan Chairs",
    href: "#",
    price: "$320",
    description: "Joss & Main",
    imageSrc:
      "https://ipfs.filebase.io/ipfs/QmbezAQaHAozA4fNAULYezD5CCbehKSaUMDSiq5B7R8ecC",
    hoverImageSrc:
      "https://ipfs.filebase.io/ipfs/QmRSgZoDwSYbWAAnoqq3QP67fJC6t4iGsYaWL6S85nJuHv",
    imageAlt:
      "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
  },
];

export default function ArtSection() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mx-auto text-left pb-6 scroll-smooth" id="homegoods">
          <h2
            className="text-1xl text-gray-900 border-b pb-2"
            id="products-grid"
          >
            Home Goods
          </h2>
        </div>
        <ProductsGrid products={homeGoods} />
      </div>
    </div>
  );
}
