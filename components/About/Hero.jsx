export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden sm:pt-20 pt-40">
      <img
        src="https://ipfs.filebase.io/ipfs/QmRNe1ozYPmn3kgLTkuTe9PvEgYZR3maqTYQBarpNSf7wD"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />

      <div className="mx-auto max-w-4xl py-32 sm:py-30">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
        <div className="text-center mb-24">
          <p className="font-thin tracking-tight text-white sm:text-3xl text-lg animate-fadeTwo">
            Welcome to
          </p>
          <h1 className="font-thin tracking-wide text-white sm:text-6xl text-5xl animate-fadeTwo font-[cormorant]">
            THE GRAHAM RESIDENCE
          </h1>
        </div>
      </div>
    </div>
  );
}
