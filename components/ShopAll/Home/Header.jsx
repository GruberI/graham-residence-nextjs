const imageByHandle = [
  {
    imageHandle: "atelier-saucier",
    src: "https://ipfs.filebase.io/ipfs/QmZ3xMFpfF5q6bT1WDv9eGCCswDKzf69ZwYrEHUMJcmV2c/QmbPMLL9ccr3Bf769zGT2EaDpHmy3VHAMQpWMc8x9zVdTx",
    alt: "Atalier Saucier set table",
  },
  {
    imageHandle: "sophie-lou-jacobsen",
    src: "https://ipfs.filebase.io/ipfs/QmbvZNPAsQda7iz8DV5jbp8x4iMeBrUUDvkYoZJA3CUbKy/QmYEiT9GLBmVUG94r4rFSNUQXog4BP7xZzT4TSofPEnFMA",
    alt: "Sophie Lou Jacobsen set table with glass vases",
  },
  {
    imageHandle: "loll-designs",
    src: "https://ipfs.filebase.io/ipfs/QmSx8x1TUhyA6RzVtbdA9cqptig7ymmu53DaXuFiFjyBzQ/Qmd8XYCy2TMujYDW4LRVHeA5T653vprGKy1p6YTX9udehB",
    alt: "Loll designs outdoor chairs infront of Graham Residence firepit",
  },
];
export default function ShopAllHomeHeader({ productHandle }) {
  return (
    <div className="relative isolate overflow-hidden sm:pt-24 pt-40">
      {productHandle === undefined ? (
        <img
          src="https://ipfs.filebase.io/ipfs/QmQofT4Jvs8XVEnFiKDHsa3ZG5hBnFU3Jy8qGq2fEDrpdn/QmdLMUMfk9YmKVdidfJAtTqKPsxrSKa45mvc6viq8bBjoi"
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

      <div className="mx-auto max-w-3xl my-36 pb-24">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
        <div className="text-center">
          <h1 className="font-thin tracking-tight text-white text-7xl animate-fadeTwo hidden sm:block capitalize font-[cormorant]">
            {productHandle === undefined
              ? "Shop Home"
              : productHandle.replaceAll("-", " ")}
          </h1>
        </div>
      </div>
    </div>
  );
}
