export default function ShopAllHomeHeader({ productHandle }) {
  return (
    <div className="relative isolate overflow-hidden sm:pt-24 pt-40">
      <img
        src="https://ipfs.filebase.io/ipfs/QmQNn2LNn6UdzbuqiSSXJpknNF62sDQbzugxGJm2E9cG8b"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />

      <div className="mx-auto max-w-2xl my-36 pb-24">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
        <div className="text-center">
          <h1 className="font-thin tracking-tight text-white text-6xl animate-fadeTwo hidden sm:block capitalize">
            {productHandle === undefined
              ? "Every detail tells a story"
              : productHandle.replaceAll("-", " ")}
          </h1>
        </div>
      </div>
    </div>
  );
}
