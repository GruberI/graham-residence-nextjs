export default function ShopAllHomeHeader() {
  return (
    <div className="relative isolate overflow-hidden pt-36 h-screen">
      <img
        src="https://ipfs.filebase.io/ipfs/QmSqxCjc9XPjGpGqjabtNG7RNBodEn9ivXaSWXqhUuxFmh/QmeXsmv4nMF6WvguaWH99tdHJdNCkY3SehXg974QWMdwEy"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="mx-auto max-w-5xl py-10 sm:py-10 lg:py-10">
        <div className="text-center">
          <h1 className="text-5xl font-thin tracking-wide sm:text-6xl text-gray-300 text-[#d9d2ca] pt-1 animate-fadeTwo">
            THE GRAHAM RESIDENCE
          </h1>
          <h1 className="mt-80 leading-8 text-gray-300 text-4xl text-[#d9d2ca] italic pt-1 animate-fadeTwo">
            Curation is about intentionality
          </h1>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            {/* <a
              href="#"
              className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              Get started
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Learn more <span aria-hidden="true">→</span>
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}
