"use client";
import { Fade } from "react-awesome-reveal";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function HeroImageText() {
  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative isolate overflow-hidden pt-36">
      <img
        src="https://ipfs.filebase.io/ipfs/QmSqxCjc9XPjGpGqjabtNG7RNBodEn9ivXaSWXqhUuxFmh/QmeXsmv4nMF6WvguaWH99tdHJdNCkY3SehXg974QWMdwEy"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="mx-auto max-w-4xl py-10 sm:py-10 lg:py-10">
        <div className="text-center">
          <h1 className="text-4xl sm:text-7xl leading-8 text-gray-300 text-[#d9d2ca] animate-fadeTwo font-thin font-[cormorant] mt-2 sm:mt-0">
            The Graham Collective
          </h1>
          <div className="flex flex-col items-center justify-center gap-x-6 animate-fadeTwo mt-[44vh]">
            <Fade>
              <p className="text-white text-xs sm:text-lg max-w-2xl">
                A celebration of California modernity and the quiet
                transcendence of the high desert, with destinations, fine art,
                and intentionally curated home essentials from leading
                craftsman.
              </p>
              <a
                onClick={() => handleClickScroll("editorial")}
                className="flex items-center text-sm font-sm text-black hover:text-neutral-600 scroll-smooth cursor-pointer"
              >
                <ChevronDownIcon className="h-[30px] text-white mt-6 font-thin opacity-60" />
              </a>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
