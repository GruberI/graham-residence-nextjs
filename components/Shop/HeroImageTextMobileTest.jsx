export default function HeroImageText() {
    return (
      <div className="relative isolate overflow-hidden sm:pt-36">
        <img
          src="https://ipfs.filebase.io/ipfs/QmSqxCjc9XPjGpGqjabtNG7RNBodEn9ivXaSWXqhUuxFmh/QmeXsmv4nMF6WvguaWH99tdHJdNCkY3SehXg974QWMdwEy"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover hidden sm:block"
        />
        <img
          src="https://ipfs.filebase.io/ipfs/QmeaTzdDbtnXD9CqvnfDqHVp4k1wigk1LNX2kAwARzVuX6/QmdPwkTUgsxWTTWQnVChQwJ24SxukRWgzqzCvQruR4CtNx"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-scale-down block sm:hidden"
        />
        <div className="mx-auto max-w-4xl sm:py-10 lg:py-10 relative mb-40 sm:mb-0">
          <div className="text-center py-10 pt-10 sm:pt-0 sm:py-0">
            <h1 className="sm:text-6xl text-2xl leading-8 text-gray-300 text-[#d9d2ca] animate-fadeTwo absolute sm:static inset-x-0 inset-y-40 bottom-[40vh]">
              THE GRAHAM RESIDENCE
            </h1>
            <div className="flex items-center justify-center gap-x-6 animate-fadeTwo sm:mt-[50vh] sm:mb-[10vh] pt-52 sm:pt-0 relative">
              <a
                href="/art"
                className="rounded-sm border px-3.5 py-2.5 sm:text-sm text-xs font-normal text-white shadow-sm hover:bg-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 absolute sm:static inset-x-12 sm:inset-x-0 top-72 sm:top-0 w-[130px] sm:w-52"
              >
                Shop Artwork
              </a>
              <a
                href="/home"
                className="text-sm font-normal leading-6 text-white hover:text-neutral-300 hover:underline hover:underline-offset-8 absolute sm:static inset-x-[30vh] sm:inset-x-0 top-[44vh] sm:top-0 w-[130px]"
              >
                Shop Home <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  