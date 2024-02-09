export default function HeroImageText() {
  return (
    <div className="relative isolate overflow-hidden pt-52 sm:pt-40">
      <img
        src="https://ipfs.filebase.io/ipfs/QmayojLyPFZXZvzX5gBzis26uVZSdB27Y85EfSSGvvdGMB/QmVVSQswM9dDiPjLvwfvMXf3P8F8spNp47WEsPXjTSZvQV"
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
              className="rounded-sm border px-4 py-3 text-md font-normal text-white shadow-sm hover:bg-[#9a651d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              Shop Artwork
            </a>
            <a
              href="/home"
              className="text-md font-normal leading-6 text-white hover:text-neutral-300 hover:underline hover:underline-offset-8"
            >
              Shop Home <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
