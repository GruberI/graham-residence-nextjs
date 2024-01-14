export default function HeroImageText() {
  return (
    <div className="relative isolate overflow-hidden pt-36">
      <img
        src="https://ipfs.filebase.io/ipfs/QmQofT4Jvs8XVEnFiKDHsa3ZG5hBnFU3Jy8qGq2fEDrpdn/QmdLMUMfk9YmKVdidfJAtTqKPsxrSKa45mvc6viq8bBjoi"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="mx-auto max-w-4xl py-10 sm:py-0 lg:py-0">
        <div className="text-center">
          {/* <h1 className="sm:text-7xl text-5xl leading-8 text-white animate-fadeTwo font-thin font-[cormorant] pt-12">
            TGR SHOP
          </h1> */}
          <div className="flex items-center justify-center gap-x-6 animate-fadeTwo mt-[50vh] mb-[10vh]">
            <a
              href="/art"
              className="rounded-sm border px-3.5 py-2.5 text-sm font-normal text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              Shop Artwork
            </a>
            <a
              href="/home"
              className="text-sm font-normal leading-6 text-white hover:text-neutral-300 hover:underline hover:underline-offset-8"
            >
              Shop Home <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
