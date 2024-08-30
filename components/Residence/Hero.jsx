export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden mt-[80px] md:mt-[0px] h-[440px] md:h-[600px]">
      <img
        src="https://siteimagery.nyc3.cdn.digitaloceanspaces.com/About/QmQH3YRaFjaqw6e9EVY6iGztdDxGZnu3Q5tJEKaAi6NoTW.jpg"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />

      <div className="mx-auto w-full mt-0 h-full flex items-center justify-center">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
        <div className="text-center">
          <h1 className="mb-10 font-thin tracking-wide text-white sm:text-7xl text-4xl animate-fadeTwo font-[cormorant]">
            The Graham Residence
          </h1>
        </div>
      </div>
    </div>
  );
}
