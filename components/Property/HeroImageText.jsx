export default function HeroImageText() {
  return (
    <div className="relative isolate overflow-hidden pt-36">
      <img
        src="https://ipfs.filebase.io/ipfs/QmSqxCjc9XPjGpGqjabtNG7RNBodEn9ivXaSWXqhUuxFmh/QmeXsmv4nMF6WvguaWH99tdHJdNCkY3SehXg974QWMdwEy"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="mx-auto max-w-4xl py-10 sm:py-10 lg:py-10">
        <div className="text-center">
          <h1 className="sm:text-7xl text-4xl leading-8 text-gray-300 text-[#d9d2ca] animate-fadeTwo font-thin font-[cormorant]">
            The Graham Residence
          </h1>
          <div className="flex items-center justify-center gap-x-6 animate-fadeTwo mt-[50vh] mb-[10vh]">
            {/* <a
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
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}
