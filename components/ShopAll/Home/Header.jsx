import PageHeaderHero from "@/components/global/PageHeaderHero";

const imageByHandle = [
  {
    imageHandle: "atelier-saucier",
    src: "https://siteimagery.nyc3.cdn.digitaloceanspaces.com/HomeGoods/AtelierSaucier/QmbPMLL9ccr3Bf769zGT2EaDpHmy3VHAMQpWMc8x9zVdTx.jpeg",
    alt: "Atalier Saucier set table",
    title: " Atelier Saucier",
  },
  {
    imageHandle: "sophie-lou-jacobsen",
    src: "https://siteimagery.nyc3.cdn.digitaloceanspaces.com/HomeGoods/SophieLou/QmWJ2ZeTDfLr8Ng8H7ynR8o1tPjJVeeUARds3ipechFGrG.jpeg",
    alt: "Sophie Lou Jacobsen set table with glass vases",
    title: "Sophie Lou Jacobsen",
  },
  {
    imageHandle: "loll-designs",
    title: "Loll Designs",
    src: "https://siteimagery.nyc3.cdn.digitaloceanspaces.com/HomeGoods/loll-designs.jpg",
    alt: "Loll designs loungers by the hot tub",
  },
  {
    imageHandle: "west-bourne",
    src: "https://siteimagery.nyc3.cdn.digitaloceanspaces.com/HomeGoods/WestBourne/QmcxTaiyxAMAkF9WyRbPYWvnfCdAXReEWLbmjmNWoP2RjF.jpeg",
    alt: "West Bourne",
    title: "West Bourne",
  },
  {
    imageHandle: "new-arrivals",
    title: "New Arrivals",
    src: "https://ipfs.filebase.io/ipfs/QmQNn2LNn6UdzbuqiSSXJpknNF62sDQbzugxGJm2E9cG8b",
    alt: "The Graham Residence living room",
  },
];
export default function ShopAllHomeHeader({ productHandle }) {
  const headerData = productHandle
    ? imageByHandle.find((image) => image.imageHandle == productHandle)
    : undefined;

  if (headerData !== undefined)
    return <PageHeaderHero imgSrc={headerData.src} title={headerData.title} />;

  return (
    <div className="relative isolate overflow-hidden mt-[80px] md:mt-[0px] h-[440px] md:h-[600px]">
      {productHandle === undefined ? (
        <img
          src="https://siteimagery.nyc3.cdn.digitaloceanspaces.com/Residence/232.jpeg"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
      ) : (
        imageByHandle.map((image, i) => {
          return image.imageHandle == productHandle ? (
            <img
              key={i}
              src={image.src}
              alt={image.alt}
              className="absolute inset-0 -z-10 h-full w-full object-cover"
            />
          ) : null;
        })
      )}

      {/* <div className="mx-auto max-w-3xl my-36 pb-24">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
      </div> */}
    </div>
  );
}
