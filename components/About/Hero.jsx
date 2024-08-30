export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden h-[600px]">
      <img
        src="https://siteimagery.nyc3.cdn.digitaloceanspaces.com/About/002.jpg"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />

      <div className="mx-auto max-w-4xl mt-72 sm:mt-48">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
        <div className="text-center mb-36">
          <p className="font-thin tracking-tight text-white sm:text-3xl text-xl animate-fadeTwo">
            About the
          </p>
          <h1 className="font-thin tracking-wide text-white sm:text-7xl text-4xl animate-fadeTwo font-[cormorant]">
            The Graham Collective
          </h1>
        </div>
      </div>
    </div>
  );
}
