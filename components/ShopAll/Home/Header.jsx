export default function ShopAllHomeHeader() {
  return (
    <div className="relative isolate overflow-hidden sm:pt-24 pt-40">
      <img
        src="https://ipfs.filebase.io/ipfs/QmQNn2LNn6UdzbuqiSSXJpknNF62sDQbzugxGJm2E9cG8b"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />

      <div className="mx-auto max-w-2xl py-32 sm:py-50">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
        <div className="text-center mb-10">
          <h1 className="text-4xl font-normal tracking-tight text-white sm:text-6xl animate-fade">
            Curation is about intentionality
          </h1>
        </div>
      </div>
    </div>
  );
}
