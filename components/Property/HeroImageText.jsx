"use client";
import { Fade } from "react-awesome-reveal";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function HeroImageText() {
  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Calculate the offset to adjust scroll position (e.g., 50px offset)
      const offset = 50;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      // Scroll to the adjusted position
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative isolate overflow-hidden pt-20 sm:pt-28 h-[450px] md:h-screen">
      <img
        src="https://siteimagery.nyc3.cdn.digitaloceanspaces.com/david-marcel-tgr3.jpg"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover hidden sm:flex"
      />
      <img
        src="https://ipfs.filebase.io/ipfs/QmSqxCjc9XPjGpGqjabtNG7RNBodEn9ivXaSWXqhUuxFmh/QmeXsmv4nMF6WvguaWH99tdHJdNCkY3SehXg974QWMdwEy"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover flex sm:hidden"
      />
      <div className="mx-auto max-w-4xl pb-10 sm:py-12">
        <div className="text-center">
          <h1 className="text-4xl sm:text-7xl sm:leading-8 text-gray-300 text-white animate-fadeTwo font-thin font-[cormorant] mt-6 sm:mt-0 relative">
            Graham Collective
          </h1>
          <div className="hidden md:flex flex-col items-center justify-center gap-x-6 animate-fadeTwo">
            <Fade>
              <a
                onClick={() => handleClickScroll("first-page-scroll")}
                className="flex items-center text-sm font-sm text-black hover:text-neutral-600 cursor-pointer"
              >
                <ChevronDownIcon className="h-[50px] text-white mt-6 font-thin opacity-70 absolute bottom-10 cursor-pointer" />
              </a>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
