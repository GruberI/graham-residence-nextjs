export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden mt-[135px] md:mt-[0px] h-[440px] md:h-[600px]">
      <img
        src="https://ipfs.filebase.io/ipfs/QmQH3YRaFjaqw6e9EVY6iGztdDxGZnu3Q5tJEKaAi6NoTW"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />

      <div className="mx-auto w-full mt-0 h-full flex items-center justify-center px-10">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
        <div className="text-center">
          <h1 className="font-thin tracking-wide text-white sm:text-7xl text-4xl animate-fadeTwo font-[cormorant]">
            The Graham Residence
          </h1>
        </div>
      </div>
    </div>
  );
}
