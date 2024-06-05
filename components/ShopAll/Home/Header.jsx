import PageHeaderHero from "@/components/global/PageHeaderHero";

const imageByHandle = [
  {
    imageHandle: "atelier-saucier",
    src: "https://ipfs.filebase.io/ipfs/QmZ3xMFpfF5q6bT1WDv9eGCCswDKzf69ZwYrEHUMJcmV2c/QmbPMLL9ccr3Bf769zGT2EaDpHmy3VHAMQpWMc8x9zVdTx",
    alt: "Atalier Saucier set table",
    title: " Atelier Saucier",
  },
  {
    imageHandle: "sophie-lou-jacobsen",
    src: "https://ipfs.filebase.io/ipfs/QmU7bKqnKnEWBXTJZRTL6SJLgczTvXoGNUowZ1hJiCyWkb/QmWJ2ZeTDfLr8Ng8H7ynR8o1tPjJVeeUARds3ipechFGrG",
    alt: "Sophie Lou Jacobsen set table with glass vases",
    title: "Sophie Lou Jacobsen",
  },
  {
    imageHandle: "loll-designs",
    title: "Loll Designs",
    src: "https://ipfs.filebase.io/ipfs/QmfMtsvcvGdWVqgwESF3gatXebQAoXku3oLpbv9rF5rcMG",
    alt: "Loll designs outdoor chairs infront of Graham Residence firepit",
  },
  {
    imageHandle: "west-bourne",
    src: "https://ipfs.filebase.io/ipfs/QmcxTaiyxAMAkF9WyRbPYWvnfCdAXReEWLbmjmNWoP2RjF",
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
          src="https://ipfs.filebase.io/ipfs/QmQ61VnMppAA4kboH8eqNj6evSJEMAfgdVjAG1gYzGireH"
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
