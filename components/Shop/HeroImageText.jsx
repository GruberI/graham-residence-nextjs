export default function HeroImageText() {
  return (
    <div className="relative isolate overflow-hidden pt-36 h-screen">
      <img
        src="https://ipfs.filebase.io/ipfs/QmSqxCjc9XPjGpGqjabtNG7RNBodEn9ivXaSWXqhUuxFmh/QmeXsmv4nMF6WvguaWH99tdHJdNCkY3SehXg974QWMdwEy"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="mx-auto max-w-4xl py-10 sm:py-10 lg:py-10">
        <div className="text-center">
          {/* <h1 className="text-2xl font-thin tracking-wide sm:text-6xl text-gray-300 text-[#d9d2ca] pt-1 animate-fadeTwo">
            THE GRAHAM RESIDENCE
          </h1> */}
          <h1 className="lg:text-5xl md:text-5xl sm:text-4xl text-3xl pt-2 leading-8 text-gray-300 text-[#d9d2ca] animate-fadeTwo font-extralight sm:mt-0 mt-6">
            THE GRAHAM RESIDENCE
          </h1>
          <div className="lg:mt-96 sm:mt-96 mt-72 2xl:mt-[500px] flex items-center justify-center gap-x-6 animate-fadeTwo">
            <a
              href="/art"
              className="rounded-sm border px-3.5 py-2.5 text-sm font-normal text-white shadow-sm hover:bg-slate-600  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              Shop Art
            </a>
            <a href="/home" className="text-sm font-normal leading-6 text-white hover:text-neutral-300">
              Shop Home <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
