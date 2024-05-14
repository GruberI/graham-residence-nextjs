export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden h-[600px]">
      <img
        src="https://ipfs.filebase.io/ipfs/QmSj81HkBTKDeavdAuhSnNgLSkqderZfq6NCFneNDzZG4d"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />

      <div className="mx-auto max-w-4xl mt-80 sm:mt-64">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
        <div className="text-center mb-36">
          <h1 className="font-thin tracking-wide text-white sm:text-7xl text-5xl animate-fadeTwo font-[cormorant]">
            The Graham Gallery
          </h1>
        </div>
      </div>
    </div>
  );
}
