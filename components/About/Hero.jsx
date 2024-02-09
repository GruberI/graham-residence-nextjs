export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden sm:pt-30 pt-40">
      <img
        src="https://ipfs.filebase.io/ipfs/QmYTuXismQUCXVPb6MTPNd1AMwVbi7BjQRYAG6gtHQHymP/QmNqmfpcLzdfj9CeVsURAbP8ZfWGUndiRifrHAp8veYiwa"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />

      <div className="mx-auto max-w-4xl py-32 sm:py-30">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
        <div className="text-center mb-36">
          <p className="font-thin tracking-tight text-white sm:text-3xl text-lg animate-fadeTwo">
            About the
          </p>
          <h1 className="font-thin tracking-wide text-white sm:text-6xl text-5xl animate-fadeTwo font-[cormorant]">
            THE GRAHAM RESIDENCE
          </h1>
        </div>
      </div>
    </div>
  );
}
