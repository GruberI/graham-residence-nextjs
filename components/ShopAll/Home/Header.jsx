const imageByHandle = [
  {
    imageHandle: "atelier-saucier",
    src: "https://ipfs.filebase.io/ipfs/QmZ3xMFpfF5q6bT1WDv9eGCCswDKzf69ZwYrEHUMJcmV2c/QmbPMLL9ccr3Bf769zGT2EaDpHmy3VHAMQpWMc8x9zVdTx",
  },
];
export default function ShopAllHomeHeader({ productHandle }) {
  return (
    <div className="relative isolate overflow-hidden sm:pt-24 pt-40">
      <img
        src={productHandle === 'atelier-saucier' ? 'https://ipfs.filebase.io/ipfs/QmZ3xMFpfF5q6bT1WDv9eGCCswDKzf69ZwYrEHUMJcmV2c/QmbPMLL9ccr3Bf769zGT2EaDpHmy3VHAMQpWMc8x9zVdTx' : 'https://ipfs.filebase.io/ipfs/QmQNn2LNn6UdzbuqiSSXJpknNF62sDQbzugxGJm2E9cG8b'}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />

      <div className="mx-auto max-w-3xl my-36 pb-24">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
        <div className="text-center">
          <h1 className="font-thin tracking-tight text-white text-7xl animate-fadeTwo hidden sm:block capitalize font-[cormorant]">
            {productHandle === undefined
              ? "Every detail tells a story"
              : productHandle.replaceAll("-", " ")}
          </h1>
        </div>
      </div>
    </div>
  );
}
