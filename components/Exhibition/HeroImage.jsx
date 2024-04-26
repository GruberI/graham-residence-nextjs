export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden h-[600px]">
      <img
        src="https://ipfs.filebase.io/ipfs/QmdcKQBRdXHif8GvZt9itMrr7HLUs1ciAQp8Cfyym2WyrC/QmY1vkcE3vKoVhKyYZ89B1w3UioNetz8uT12JHjtajbAzF"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />

      <div className="mx-auto max-w-4xl mt-80 sm:mt-64">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
        <div className="text-center mb-36">
          <h1 className="font-thin tracking-wide text-white sm:text-6xl text-4xl animate-fadeTwo font-[cormorant]">
            The Graham Gallery
          </h1>
        </div>
      </div>
    </div>
  );
}
