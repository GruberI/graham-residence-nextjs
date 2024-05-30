const imageByHandle = [
  {
    imageHandle: "atelier-saucier",
    src: "https://ipfs.filebase.io/ipfs/QmZ3xMFpfF5q6bT1WDv9eGCCswDKzf69ZwYrEHUMJcmV2c/QmbPMLL9ccr3Bf769zGT2EaDpHmy3VHAMQpWMc8x9zVdTx",
    alt: "Atalier Saucier set table",
  },
  {
    imageHandle: "sophie-lou-jacobsen",
    src: "https://ipfs.filebase.io/ipfs/QmU7bKqnKnEWBXTJZRTL6SJLgczTvXoGNUowZ1hJiCyWkb/QmWJ2ZeTDfLr8Ng8H7ynR8o1tPjJVeeUARds3ipechFGrG",
    alt: "Sophie Lou Jacobsen set table with glass vases",
  },
  {
    imageHandle: "loll-designs",
    src: "https://ipfs.filebase.io/ipfs/QmfMtsvcvGdWVqgwESF3gatXebQAoXku3oLpbv9rF5rcMG",
    alt: "Loll designs outdoor chairs infront of Graham Residence firepit",
  },
  {
    imageHandle: "west-bourne",
    src: "https://ipfs.filebase.io/ipfs/QmWRcXMpJychjC4w678Ln691fkMYP6KdeiXA38uWWnWLNk",
    alt: "West Bourne",
  },
  {
    imageHandle: 'new-arrivals',
    src: "https://ipfs.filebase.io/ipfs/QmQNn2LNn6UdzbuqiSSXJpknNF62sDQbzugxGJm2E9cG8b",
    alt: "The Graham Residence living room",
  }
];
export default function ShopAllHomeHeader({ productHandle }) {
  return (
    <div className="relative isolate overflow-hidden h-[600px]">
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
