import ProductsGrid from "../ProductsGrid";
//   {
//     id: 0,
//     name: "A Quiet Noise",
//     href: "#",
//     price: "$6000",
//     description: "Kyle Steed",
//     imageSrc:
//       "https://ipfs.filebase.io/ipfs/QmZzKzkY6vyn9K8J6UcCyfdeNnYsFSMZPjY13We4EDvPpf",
//     hoverImageSrc:
//       "https://ipfs.filebase.io/ipfs/Qmf5Z8FyZ11TZ3r93sBpsxdcjr5F6G7qygxw82SYhRjg52",
//     imageAlt:
//       "Person using a pen to cross a task off a productivity paper card.",
//   },
//   {
//     id: 1,
//     name: "A Quiet Noise 2",
//     href: "#",
//     price: "$7200",
//     description: "Kyle Steed",
//     imageSrc:
//       "https://ipfs.filebase.io/ipfs/QmTbAeVrcSrxttFnv5J2LHnAiYKprgzc94vgtcn7gHjXHy",
//     hoverImageSrc:
//       "https://ipfs.filebase.io/ipfs/QmYcu2AT6EikaLemSr57Kp4bRhaBKyiLd17tdzv3kbxx3G",
//     imageAlt:
//       "Textured black felt pouch for paper cards with snap button flap and elastic pen holder loop.",
//   },
//   {
//     id: 2,
//     name: "A Quiet Noise 3",
//     href: "#",
//     price: "$3200",
//     description: "Kyle Steed",
//     imageSrc:
//       "https://ipfs.filebase.io/ipfs/QmUMyJ18KZBY7SyKetPetGxpjM8RgjN58dkA9YgYPWrLLe",
//     hoverImageSrc:
//       "https://ipfs.filebase.io/ipfs/QmUMpcRBL5ZZs1JaGm9NsvQTTBE7jgK2NTfYXnXyDZ9PK9",
//     imageAlt:
//       "Textured black felt pouch for paper cards with snap button flap and elastic pen holder loop.",
//   },
//   {
//     id: 3,
//     name: "A Quiet Noise 4",
//     href: "#",
//     price: "$3280",
//     description: "Kyle Steed",
//     imageSrc:
//       "https://ipfs.filebase.io/ipfs/QmSLbxBbhQo5gpMd1zrfrXj4Bm8peKVcbY4N8VNUTmGK6A",
//     hoverImageSrc:
//       "https://ipfs.filebase.io/ipfs/QmVV6AA7SwTvFBifraqujfNmbazpqMDby4kjMMhjidRtkA",
//     imageAlt:
//       "Textured black felt pouch for paper cards with snap button flap and elastic pen holder loop.",
//   },
//   {
//     id: 4,
//     name: "A Quiet Noise 5",
//     href: "#",
//     price: "$6200",
//     description: "Kyle Steed",
//     imageSrc:
//       "https://ipfs.filebase.io/ipfs/QmWARsmfMwSUUfTJmjvoxYmu4BPLvVNR8Mhso9e31tHiqG",
//     hoverImageSrc:
//       "https://ipfs.filebase.io/ipfs/QmSpME4b7DWNqf3Q8b1M9By9AkR92dSgACsygBuTLAbqCs",
//     imageAlt:
//       "Textured black felt pouch for paper cards with snap button flap and elastic pen holder loop.",
//   },
//   {
//     id: 5,
//     name: "A Quiet Noise 6",
//     href: "#",
//     price: "$6400",
//     description: "Kyle Steed",
//     imageSrc:
//       "https://ipfs.filebase.io/ipfs/QmQZvVJy6zCkwmJcdz9XRejpHx9xwkrAdzHPYcSkzsa3JQ",
//     hoverImageSrc:
//       "https://ipfs.filebase.io/ipfs/QmVML4rLgKKom3yiCgpbcpUAJZo6kLTu8ehQte5SqevvaS",
//     imageAlt: "Paper card sitting upright in walnut card holder on desk.",
//   },
// ];

export default async function ArtSection({products}) {
  if (!products?.length) return null;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-1xl px-4 py-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mx-auto text-left pb-6" id="artwork">
          <h2 className="text-1xl text-black border-b border-black pb-2">
            ARTWORKS
          </h2>
        </div>
        <ProductsGrid products={products} />
      </div>
    </div>
  );
}
