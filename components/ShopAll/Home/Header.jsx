export default function ShopAllHomeHeader() {
  return (
    <div className="relative isolate overflow-hidden sm:pt-24 pt-40">
      <img
        src="https://ipfs.filebase.io/ipfs/QmQNn2LNn6UdzbuqiSSXJpknNF62sDQbzugxGJm2E9cG8b"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />

      <div className="mx-auto max-w-2xl my-36 sm:pb-24">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
        <div className="text-center">
          <h1 className="text-4xl font-thin tracking-tight text-white sm:text-6xl animate-fadeTwo">
            Every detail tells a story
          </h1>
        </div>
      </div>
    </div>
  );
}
